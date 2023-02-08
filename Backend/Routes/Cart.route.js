const express = require("express");
const { middleware } = require("../Middlewares/Middlewares");
const { Cartmodel } = require("../Models/Cart.model");
const cartRoute = express.Router();
cartRoute.post("/", middleware, async (req, res) => {
  // console.log(req.body);
  const { product, userId } = req.body;
  //   console.log("i m product", product);
  // console.log("i a, userid", userId);
  let findproduct = await Cartmodel.find({ product });
  // console.log("ia m find product", findproduct);
  try {
    if (findproduct.length > 0) {
      res.send(findproduct);
    } else {
      const cart = new Cartmodel({ userId, product });
      // console.log("i am cart", cart);
      await cart.save();
      res.send(cart);
    }
  } catch (err) {
    res.send(`error:${err}`);
  }
});
cartRoute.get("/", middleware, async (req, res) => {
  console.log("i am req.body", req.body);
  try {
    const finduser = req.body.userId;
    console.log("i am finduser", finduser);
    const user = await Cartmodel.find({ userId: finduser });
    console.log("iam user", user);
    if (user.length > 0) {
      const cart = await Cartmodel.find({ userId: finduser }).populate(["product", "userId"]);
      res.send(cart);
    } else {
      res.send("authorization first");
    }
  } catch (err) {
    res.send(`error:${err}`);
  }
});
module.exports = {
  cartRoute,
};
