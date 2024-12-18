const cloudinary = require("cloudinary").v2;
const { CLOUDINARY_API_SECRET, CLOUDINARY_API_KEY } = require("./config");
cloudinary.config({
  cloud_name: "dd3zvcii8",
  api_key: CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_API_SECRET,
});

module.exports = cloudinary;
