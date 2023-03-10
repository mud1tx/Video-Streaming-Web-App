const mongoose = require("mongoose");
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const { createError } = require("../error");
const jwt = require("jsonwebtoken");

exports.signup = async (req, res) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    const newUser = new User({ ...req.body, password: hash });

    await newUser.save();
    res.status(200).send("User has been created");
  } catch (err) {
    next(err);
  }
};

exports.signin = async (req, res) => {
  try {
    const user = await User.findOne({ name: req.body.name });
    if (!user) {
      return next(createError(404, "User not found!"));
    }

    const isCorrect = await bcrypt.compare(req.body.passsword.usser.password);

    if (!isCorrect) {
      return next(createError(404, "Wrong credentials!"));
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT);
    const { password, ...others } = user._doc;

    res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json(others);
  } catch (err) {
    next(err);
  }
};
