// tsheringfunchok_db_user
// gvyma1MOewTreS2p

const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const DB_URI = process.env.DB_URL;

const connectToDatabase = async () => {
    try {
        await mongoose.connect(DB_URI);
        console.log("Database is connected successfully");
    } catch (error) {
        console.log(`Database connection error is ${error}`);
    }
}

module.exports = connectToDatabase;
