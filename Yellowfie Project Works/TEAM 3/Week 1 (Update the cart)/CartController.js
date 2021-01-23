
const Cart = require("../models/Cart");
const { to, ReE, ReS } = require("../services/util.service");
const CONFIG = require("../config/config");
const { isNull } = require("../services/util.service");
const HttpStatus = require("http-status");
//cart updation
module.exports.updateCart = (req, res) => {
    
    const user = req.user;

    //validating detalis
    if (isNull(user._id)) {
        return ReE(res, "User id cannot be blank", HttpStatus.BAD_REQUEST);
    }
    if (isNull(req.body.productId)) {
        return ReE(res, "Product id cannot be null", HttpStatus.BAD_REQUEST);
    }
    if (isNull(req.body.cartId)) {
        return ReE(res, "Cart id cannot be null", HttpStatus.BAD_REQUEST);
    }
    let err, cart;
    //finding cart and updating
    [err, cart] = await to(Cart.find({
        _id: req.body.cartId,
        user: req.body.user._id,
        product: { $elemMatch: { id: req.body.productId } }
    }))

    if (err) {
        return ReE(err, "Something went wrong", HttpStatus.BAD_REQUEST);
    }

    if (!cart) {
        return ReE(
            res,
            "Cart not found. Please select the existing product.",
            HttpStatus.BAD_REQUEST
        );
    }

    let data;

    [err, data] = await to(Cart.updateOne(
        {
            _id: req.body.cartId,
            user: req.user._id,
            product: { $elemMatch: { id: req.body.productId } },
        },
        {
            $push: {
                product: [
                    {
                        id: req.body.productId,
                        quantity: Cart.product[0].quantity + 1,
                    },
                ],
            },
        }
    ))

    if (!data) {
        return ReE(res, "Failed to update", HttpStatus.BAD_REQUEST);
    }

    [err, cart] = await to(Cart.find({
        _id: req.body.cartId,
        user: req.body.user._id,
        "product.id": req.body.productId,
    }))

    if (err) {
        return ReE(err, "Something went wrong", HttpStatus.BAD_REQUEST);
    }

    if (!cart) {
        return ReE(
            res,
            "Cart not found.",
            HttpStatus.BAD_REQUEST
        );
    }
    if (cart) {
        return ReS(
            res,
            { message: "Updated Sucessfully !", cart: xart },
            HttpStatus.OK
        );

        }
    }
module.exports.getall = async function (req, res) {


    const user = req.user
    let data, err;
    [err, data] = await to(Cart.find({ user: user._id })
        .populate({ path: 'product', populate: 'product.id' }))
    if (err) {
        return ReE(res, err, HttpStatus.BAD_REQUEST)
    }
    if (data) {
        return ReS(res,{ message: 'Cart get succefully', Carts: data },HttpStatus.OK);
    }
    if (!data) {
        return ReE(res,{ message: 'add somtimes problem' },HttpStatus.BAD_REQUEST)

    }

}
    
