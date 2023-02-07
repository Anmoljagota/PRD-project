const jwt = require("jsonwebtoken");
const ProductTocart = (req, res, next) => {
  const token = req.headers.auth;
  // if(token){
  //     const decode=jwt.verify(token,"loginornot")
  //     console.log("i am decoded",decode.UserId)
  //     req.body.userId=decode.UserId
  //     next()llll
  // }
  // else{
  //     res.send("you are not authorized")
  // }
  next();
};
module.exports = {
  ProductTocart,
};
