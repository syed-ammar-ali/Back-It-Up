const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("./cloudinary.config"); // Import Cloudinary config

// Configure Multer Cloudinary Storage
const storage = new CloudinaryStorage({
  cloudinary: cloudinary, // Use the Cloudinary instance
  params: {
    folder: "uploads", // Folder in Cloudinary where files will be stored
    allowed_formats: ["jpg", "png", "jpeg", "gif", "webp", "mp4", "pdf", "txt"], // Adjust formats if needed
    unique_filename: true,
  },
});

const upload = multer({ storage });

module.exports = upload;
