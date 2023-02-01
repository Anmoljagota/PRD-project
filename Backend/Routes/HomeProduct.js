const express = require("express");
const homeProductRoute = express.Router();
const { Homemodel } = require("../Models/HomePageProduct");
homeProductRoute.get("/", async (req, res) => {
  try {
    const HomeData = await Homemodel.find({});
    res.send(HomeData);
  } catch (err) {
    res.send(`error:${err}`);
  }
});
homeProductRoute.post("/", async (req, res) => {
  console.log(req.body);
  try {
    const PostData = new Homemodel(req.body);
    await PostData.save();
    res.send("data added");
  } catch (err) {
    res.send(`err`);
  }
});
module.exports = {
    homeProductRoute,
};
