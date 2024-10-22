import mongoose from "mongoose";
import { AppError } from "../utils/Error.Handeler.js";

export const filterQuery = ({ fieldName, paramName }) => {
    return (req, res, next) => {
        const value = req.params[paramName];

        if (mongoose.Types.ObjectId.isValid(value)) {
            req.dbQuery = req.dbQuery.where({ [fieldName]: value });
            next();
        } else {
            next(new AppError(400, `${paramName} غير صالح`));
        }
    }
}

export const normalFilterQuery = ({ fieldName, paramName }) => {
    return (req, res, next) => {
        const value = req.params[paramName];
        req.dbQuery = req.dbQuery.where({ [fieldName]: value });
        next();
    }
}

export const normalFilterQueryPartialyMatching = ({ fieldName, paramName }) => {
    return (req, res, next) => {
        const value = req.params[paramName];
        req.dbQuery = req.dbQuery.where({ [fieldName]: {$regex:value,$options:"i"} });
        next();
    }
}



export const selectFileds = (fields) => {
    return (req, res, next) => {
        req.dbQuery = req.dbQuery.select(fields);
        next();
    }
}


export const populate = (field) => {
    return (req, res, next) => {
        req.dbQuery = req.dbQuery.populate(field)
        next();
    }
}



export const populateInArray = (field,model) => {
    return (req, res, next) => {
        if (field) {
            req.dbQuery = req.dbQuery.populate({
                path: field,
                model: model,
            });
        }
        next();
    };
};

export const nestedPopulate = (fields) =>{
    return (req, res, next) => {
        req.dbQuery = req.dbQuery.populate({
            path: fields[0],
            populate: {
                path: fields[1]
            }
        })
        next();
    }
}



export const pagination = (limit) => {
    return (req, res, next) => {
        const page = req.query.page;
        const limitValueFromQuery = req.query.limit || limit;
        const pageValue = page * 1 || 1;
        const skipValue = ((pageValue - 1) * (limitValueFromQuery));

        const model = req.dbQuery.model; // Get the model from the query

        // Use the filters applied to req.dbQuery for the count query
        const filter = req.dbQuery.getFilter ? req.dbQuery.getFilter() : {}; // Ensure you have a getFilter method

        const countQuery = model.countDocuments(filter); // Create a new query for counting

        req.dbQuery.skip(skipValue).limit(limitValueFromQuery);

        countQuery.then((totalDocuments) => {
            const numberOfPages = Math.ceil(totalDocuments / limitValueFromQuery); // Calculate number of pages
            const currentPage = pageValue;
            const nextPage = currentPage < numberOfPages ? currentPage + 1 : null;
            const prevPage = currentPage > 1 ? currentPage - 1 : null;

            res.pagination = {
                currentPage,
                nextPage,
                prevPage,
                numberOfRows: totalDocuments,
                numberOfPages
            };

            next();
        }).catch((err) => {
            next(err);
        });
    };
};

export const filter = (req, res, next) => {
    let filterObject = { ...req.query };
    const excludedQuery = ["page", "limit", "sort", "fields", "keyword"];
    excludedQuery.forEach((eq) => {
        delete filterObject[eq];
    });
    if (Object.keys(filterObject).length !== 0) req.dbQuery.options = {};
    filterObject = JSON.stringify(filterObject);
    filterObject = filterObject.replace(/\b(gt|lt|gte|lte)\b/g, match => `$${match}`);
    filterObject = JSON.parse(filterObject);

    req.dbQuery = req.dbQuery.where(filterObject);
    next();
};




export const sort = () => (req, res, next) => {
    const { sort, dir } = req.query
    if (!sort) return next()
    req.dbQuery = req.dbQuery.sort({ [sort]: dir })
    next()
}


export const search = () => (req, res, next) => {
    const { keyWord, value } = req.query;

    if (!keyWord || value === undefined) return next();

    let searchCriteria;

    // Check if the keyWord corresponds to a boolean field
    const booleanFields = ['Applied', 'Watch', 'Consideration', 'Rejected']; // Add all boolean fields here
    const isBooleanField = booleanFields.includes(keyWord);

    if (isBooleanField) {
        // Convert string 'true'/'false' to actual boolean values
        const booleanValue = value === 'true' ? true : value === 'false' ? false : undefined;

        if (booleanValue === undefined) {
            return next(new Error(`Invalid boolean value for field ${keyWord}`));
        }

        searchCriteria = { [keyWord]: booleanValue };
    } else {
        // Apply regex for other types of fields
        searchCriteria = { [keyWord]: new RegExp(value, 'i') };
    }

    req.dbQuery = req.dbQuery.where(searchCriteria);

    next();
};
