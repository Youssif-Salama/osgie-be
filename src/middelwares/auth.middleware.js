import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { AppError, CatchAsyncErrors } from "../utils/Error.Handeler.js";
dotenv.config();


export const authentication = CatchAsyncErrors(async (req, res, next) => {
    const token = req.header("token");
    if (!token) throw new AppError(401, "unauthorized");
    await jwt.verify(token, process.env.TokenKey, async(error, decodedToken) => {
        if (error) res.json(498,"invalid token");
        req.decodedToken = decodedToken;
        next();
    })
})




export const authorization = (actorRole) => {
    return CatchAsyncErrors((req, res, next) => {
        if (typeof actorRole == "string") {
            const { Role } = req.decodedToken;
            if (Role === actorRole) next();
            else throw new AppError(403, "forbidden")
        }
        else {
            const { Role } = req.decodedToken;
            if (Role === actorRole[0] || Role === actorRole[1]|| Role === actorRole[2]) next();
            else throw new AppError(403, "forbidden")
        }
    })
}