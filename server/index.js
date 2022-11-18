import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import authRoutes from './routes/auth.js';
import router from './routes/auth.js';

dotenv.config();

const app = express();

// db
mongoose
.connect(process.env.MONGO_URI)
.then(() => console.log('DB connected'))
.catch(err => console.log('DB error is =>', err));

// router middleware
app.use('/api', authRoutes);


const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`node server is running on port ${port}`)
});