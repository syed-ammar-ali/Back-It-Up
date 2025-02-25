const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    unique: true,
    minLength: [5, "Username must be at least 5 characters"],
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    unique: true,
    minLength: [13, "Email must be at least 13 characters"],
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minLength: [5, "Password must be at least 5 characters"],
  },
});

const user = mongoose.model("user", userSchema);
module.exports = user;
    