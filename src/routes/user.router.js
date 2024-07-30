const express = require('express');
const { getAll, create, getOne, del, upd } = require('../controllers/user.controllers');
const userRouter = express.Router();

// colocar las rutas aquí

userRouter.route("/")
    .get(getAll)
    .post(create)

    userRouter.route("/:id")
        .get(getOne)
        .delete(del)
        .put(upd)


module.exports = userRouter;