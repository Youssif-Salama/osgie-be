import mongoose from 'mongoose';
import env from 'dotenv';
env.config();

export const dbConnection = async () => {
    try {
        const uri = `${process.env.DataBaseHost}${process.env.DataBaseName}`;
        await mongoose.connect(uri, {
            serverSelectionTimeoutMS: 30000,
        });
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
};