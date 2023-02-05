const express = require("express");
const clothesProductRoute = express.Router();
const { clothesmodel } = require("../Models/Clothes.model");
clothesProductRoute.get("/clothes", async (req, res) => {
  if (req.query.page && req.query.limit) {
    try {
      console.log("running");
      const { page, limit } = req.query;
      if (!page) {
        page = 1;
      }
      let newlimit = Number(limit);
      let size = (page - 1) * limit;
      let paginateddata = await clothesmodel
        .find({})
        .limit(newlimit)
        .skip(size);
      res.send(paginateddata);
    } catch (err) {
      res.send(`error:${err}`);
    }
  } else if (req.query._sort ) {
    try {
      const sortBy = req.query._sort;
      // const order = req.query._order;
      console.log("i am", sortBy);
      if (sortBy === "disc") {
        data = 1;
      } else {
        sortBy === "LTH" ? (data = 1) : (data = -1);
      }
      console.log("i am data", data);
      const sortdata = await clothesmodel.find({}).sort({ price: data });
      res.send(sortdata);
    } catch (err) {
      res.send(err);
    }
  }
});

clothesProductRoute.post("/clothes", async (req, res) => {
  console.log(req.body);

  try {
    const PostData = new clothesmodel(req.body);
    await PostData.save();
    res.send("data added");
  } catch (err) {
    res.send(`err`);
  }
});
module.exports = {
  clothesProductRoute,
};
