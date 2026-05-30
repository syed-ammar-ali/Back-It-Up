const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const connectToDB = require("./config/db");
const userRouter = require("./routes/user.routes");
const indexRouter = require("./routes/index.routes");
const cookieParser = require("cookie-parser");

connectToDB();

const app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.render("index");
});

app.use("/", indexRouter);
app.use("/user", userRouter);

<<<<<<< HEAD
app.listen(process.env.PORT || 3000, () => {
=======
app.listen(3000, () => {
>>>>>>> af4c2a35ef4b1144258ad93b61b35213ef333136
  console.log("chal gya bhai");
});
