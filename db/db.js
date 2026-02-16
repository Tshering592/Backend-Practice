// tsheringfunchok_db_user
// gvyma1MOewTreS2p

const mongoose = require("mongoose");

const Mongo_URI = "mongodb+srv://tsheringfunchok_db_user:gvyma1MOewTreS2p@cluster0.hkcj1gm.mongodb.net/";

const connectToDatabase = async () => {
    try {
        await mongoose.connect(Mongo_URI);
        console.log("Database is connected successfully");
    } catch (error) {
        console.log(`Database connection error is ${error}`);
    }
}

module.exports = connectToDatabase;
