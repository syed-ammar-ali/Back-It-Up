const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const userModel = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

router.get("/register", (req, res) => {
  const errorMessage = req.query.error ? req.query.error.trim() : null;
  res.render("register", { error: errorMessage });
});

router.get("/login", (req, res) => {
  const errorMessage = req.query.error ? req.query.error.trim() : null;
  res.render("login", { error: errorMessage });
});

router.post(
  "/register",
  body("email").trim().isEmail().isLength({ min: 13 }),
  body("password").trim().isLength({ min: 5 }),
  body("username").trim().isLength({ min: 5 }),
  async (req, res) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
          message: "Invalid data. Please check your inputs.",
        });
      }

      const { email, username, password } = req.body;

      const hashPassword = await bcrypt.hash(password, 10);

      const newUser = await userModel.create({
        email,
        username,
        password: hashPassword,
      });

      res.redirect("/user/login");
    } catch (error) {
      console.error("Error during registration:", error.message);
      res.render("register", { error: error.message });
    }
  }
);

router.post(
  "/login",
  body("password").trim().isLength({ min: 5 }),
  body("username").trim().isLength({ min: 5 }),
  async (req, res) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
          message: "Invalid data. Please check your inputs.",
        });
      }

      const { username, password } = req.body;

      const user = await userModel.findOne({ username });

      if (!user) {
        throw new Error("Invalid credentials");
      }

      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        throw new Error("Invalid credentials");
      }

      const token = jwt.sign(
        {
          userId: user._id,
          email: user.email,
          username: user.username,
        },
        process.env.JWT_SECRET
      );

      res.cookie("token", token);
      res.redirect("/home");
    } catch (error) {
      console.error("Error during login:", error.message);
      res.render("login", { error: error.message });
    }
  }
);

router.get("/logout", (req, res) => {
  res.clearCookie("token");
  res.redirect("/user/login");
});

module.exports = router;
