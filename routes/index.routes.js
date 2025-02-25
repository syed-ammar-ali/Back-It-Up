const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/auth");
const upload = require("../config/multer.config");
const fileModel = require("../models/files.model");
const cloudinary = require("../config/cloudinary.config");

router.get("/home", authMiddleware, async (req, res) => {
  try {
    const userFiles = await fileModel.find({ user: req.user.userId });
    const { username } = req.user;
    res.render("home", { username: username, files: userFiles, error: null });
  } catch (error) {
    console.error("Error fetching user files:", error.message);
    res.send(`
      <script>
        alert("Something went wrong while fetching files: ${error.message}");
        history.back();
      </script>
    `);
  }
});

router.post(
  "/upload",
  authMiddleware,
  upload.single("file"),
  async (req, res) => {
    try {
      if (!req.file) {
        return res.redirect("/home");
      }
      const newFile = await fileModel.create({
        path: req.file.path,
        orignalname: req.file.originalname,
        user: req.user.userId,
      });
      res.redirect("/home");
    } catch (error) {
      console.error("Error during file upload:", error.message);
      res.send(`
        <script>
          alert("Error during file upload: ${error.message}");
          history.back();
        </script>
      `);
    }
  }
);

module.exports = router;
