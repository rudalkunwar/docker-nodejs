const cloudinary = require("../../config/cloudinaryConfig");

const pdfUpload = async (file) => {
  console.log("file:", file);

  const currentDateTime = new Date().toISOString().replace(/[-:.]/g, ""); // Get current date and time
  const publicId = `rudal_uploads/${currentDateTime}_${file.originalname}`; // Create unique public_id

  console.log("Public ID:", publicId);

  let uploadOptions = {
    public_id: publicId,
    resource_type: "raw", // Specify resource_type for non-image files like PDFs
  };

  try {
    // If the file is in memory (using multer.memoryStorage), use file.buffer
    const result = await cloudinary.uploader.upload(file.buffer, uploadOptions);
    console.log("Cloudinary Upload Result:", result);

    return result.secure_url;
  } catch (error) {
    console.error("Error uploading file:", error);
    throw error;
  }
};

module.exports = { pdfUpload };
