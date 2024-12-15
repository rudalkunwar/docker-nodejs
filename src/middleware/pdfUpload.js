const cloudinary = require("../../config/cloudinaryConfig");

// Middleware function for uploading single file to Cloudinary

const pdfUpload = async (file) => {
  // if (file.size > 600000) {
  //   throw new Error("File size exceeds the limit of 600KB");
  // }
  console.log("file" + file);

  const currentDateTime = new Date().toISOString().replace(/[-:.]/g, ""); // Get current date and time

  // const originalnameWithoutExtension = file.originalname.split(".").slice(0, -1).join("."); // Remove file extension

  const publicId = `rudal_uploads//${currentDateTime}_${file.originalname}`; // Create unique public_id

  console.log(publicId);

  let uploadOptions = {
    public_id: publicId,
    resource_type: "",
  };

  if (file.mimetype.includes("image")) {
    // For images, Cloudinary detects resource_type automatically ('auto')
  } else {
    // For non-image files (PDF, DOCX), specify resource_type: 'raw'
    uploadOptions.resource_type = "raw";
  }

  const result = await cloudinary.uploader.upload(file.path, uploadOptions);

  console.log(result);

  return result.secure_url;
};

module.exports = { pdfUpload };
