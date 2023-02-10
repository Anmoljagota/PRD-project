const express = require("express");
const { middleware } = require("../Middlewares/Middlewares");
const { Cartmodel } = require("../Models/Cart.model");
const { clothesmodel } = require("../Models/Clothes.model");
const cartRoute = express.Router();
cartRoute.post("/", middleware, async (req, res) => {
  console.log("hiiiiiiiiiiiii");
  const { product, userId } = req.body;
  let findproduct = await Cartmodel.find({ product });

  try {
    if (findproduct.length > 0) {
      res.send(findproduct);
    } else {
      const cart = new Cartmodel({ userId, product });
      await cart.save();
      res.send(cart);
    }
  } catch (err) {
    res.send(`error:${err}`);
  }
});
cartRoute.get("/", middleware, async (req, res) => {
  console.log("heyyyyyyyyyyy");
  try {
    const finduser = req.body.userId;
    console.log("finduser", finduser);
    const user = await Cartmodel.find({ userId: finduser });

    if (user.length > 0) {
      const cart = await Cartmodel.find({ userId: finduser }).populate([
        "product",
        "userId",
      ]);
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
