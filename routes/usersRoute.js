const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");  // Import body-parser
const User = require("../models/user");

// Use body-parser middleware
router.use(bodyParser.json());

router.post("/register", async (req, res) => {
    const { name, email, password } = req.body;

    const newUser = new User({ name, email, password });

    try {
        const user = await newUser.save();
        res.send('User Registered Successfully');
    } catch (error) {
        return res.status(400).json({ error });
    }
});

router.post("/login", async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email, password });
        if (user) {
            const temp={
                name:user.name,
                email:user.email,//
                isAdmin:user.isAdmin,
                _id:user._id,
            }
            res.send(temp);
        } else {
            return res.status(400).json({ message: 'Login failed' });
        }
    } catch (error) {
        return res.status(400).json({ error });
    }
});

module.exports = router;
