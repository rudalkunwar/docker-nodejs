require("dotenv").config();

module.exports = {
  VERIFY_TOKEN: process.env.VERIFY_TOKEN,
  PAGE_ACCESS_TOKEN: process.env.PAGE_ACCESS_TOKEN,
  CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET,
  CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY,
};
