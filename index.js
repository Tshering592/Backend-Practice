console.log('Hello, World!');

// today we will study about MVC clean architecture and publiish to github

// At first we will learn about userside ...!

const express = require("express");
const connectToDatabase = require("./db/db");
const dotenv = require("dotenv");
dotenv.config();

const app = express();

connectToDatabase();
const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.get("/", (req, res) => {
    res.send("Tshering Funchok Lama is learning Node.js");
});
