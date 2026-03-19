const { Router } = require("express").Router();
const { userController } = require("../controller/userController");

Router.post("/register", userController.register);
Router.post("/login", userController.login);
Router.get("/profile/:id", userController.getProfile);

module.exports = Router;

