const express = require("express");
const { UserModel } = require("../Models/Login");
const userRouter = express.Router();
const { middleware } = require("../Middlewares/Middlewares");
const {
  RegisterUser,
  DeleteUser,
  LoginUser,
  GetUserDetails,
} = require("../controllers/User.Controller");
/* For Regisration */
userRouter.post("/register", RegisterUser);

/* For Login */
userRouter.post("/login", LoginUser);
//DELETE USER
userRouter.delete("/delete/:id", DeleteUser);
userRouter.get("/user", middleware, GetUserDetails);
module.exports = {
  userRouter,
};
