const Order = require("../models/Order");
const { to, ReE, ReS } = require("../services/util.service");
const CONFIG = require("../config/config");
const { isNull } = require("../services/util.service");
const HttpStatus = require("http-status");
const { populate } = require("../models/Order");

//Get order details

module.exports.getOrderDetailsByID = async function (req, res) {
  const user = req.user;
  const body=req.body;
  if(isNull(body.orderID)){
      return ReE(res,"Order ID not found",HttpStatus.BAD_REQUEST)
  }
  let data, err;
  [err, data] = await to(Order.findById(body.orderID).populate({path:'product', populate:'id'}));

  if (err) {
    return ReE(res, err, HttpStatus.BAD_REQUEST);
  }
 
  if (!data) {
    return ReE(
      res,
      { message: "Order details not found" },
      HttpStatus.BAD_REQUEST
    );
  }
  if(String(user._id) !== String(data.user)){
    return ReE(
        res,
        { message: "This is not your order" },
        HttpStatus.BAD_REQUEST
      );
  }
  if (data) {
    return ReS(
      res,
      { message: "Order details found", Orders: data },
      HttpStatus.OK
    );
  }
};
