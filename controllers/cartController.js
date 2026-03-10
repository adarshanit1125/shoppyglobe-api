const Cart = require("../models/Cart");

exports.addToCart = async (req, res) => {
    try {
        const { productId, quantity } = req.body;

        const cart = await Cart.create({
            userId: req.user.id,
            productId,
            quantity
        });

        res.json(cart);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateCart = async (req, res) => {
    try {
        const cart = await Cart.findByIdAndUpdate(
            req.params.id,
            { quantity: req.body.quantity },
            { new: true }
        );

        res.json(cart);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteCart = async (req, res) => {
    try {
        await Cart.findByIdAndDelete(req.params.id);
        res.json({ message: "Item removed" });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};