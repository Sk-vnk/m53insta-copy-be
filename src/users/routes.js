const { Router } = require ("express");
const bookRouter = Router();

const{ addUser, getUser, deleteUser, deleteAllUsers} = require("./user/controllers");

bookRouter.post("/user", addUser);

bookRouter.get("/user/:username", getUser);

bookRouter.delete("/users/deleteAll", deleteAllUsers);

bookRouter.delete("/user/deleteUser", deleteUser);

module.exports = bookRouter;