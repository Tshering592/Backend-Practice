console.log('Hello, World!');

// today we will study about MVC clean architecture and publiish to github

// At first we will learn about userside ...!

const express = require("express");
const app = express();

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.get("/", (req, res) => {
    res.send("Tshering Funchok Lama is learning Node.js");
});
