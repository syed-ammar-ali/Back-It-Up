const mongoose = require("mongoose");

function connectToDB() {
  mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log("MongoDB bhi connect ho gya");
  });
}

module.exports = connectToDB;
