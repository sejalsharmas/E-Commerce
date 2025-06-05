import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import { getHome, getHealth, getNotFound } from './controllers/other.js';
dotenv.config();

const app = express()
app.use(cors())

const connectDB = async () => {
    const conn = await mongoose.connect(process.env.MONGO_URI)

    if (conn){
        console.log('MongoDB connected')
    }
};

app.get("/",getHome );
app.get("/health", getHealth);




app.use(getNotFound);

const PORT = process.env.PORT || 5002;

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
    connectDB();
}
)