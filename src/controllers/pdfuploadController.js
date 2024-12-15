const cloudinary = require("../../config/cloudinaryConfig"); // Ensure your Cloudinary configuration is correct
const streamifier = require("streamifier"); // To convert the buffer to a readable stream

const uploadPDF = async (req, res) => {
  try {
    // Check if file is present
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    console.log("Received file:", req.file);

    // Generate a unique public_id for Cloudinary
    const currentDateTime = new Date().toISOString().replace(/[-:.]/g, ""); // Get current date and time
    const publicId = `rudal_uploads/${currentDateTime}_${req.file.originalname}`;

    // Prepare upload options for Cloudinary
    const uploadOptions = {
      public_id: publicId,
      resource_type: "raw", // Since it's a PDF, we specify 'raw'
    };

    // Create a readable stream from the buffer
    const bufferStream = streamifier.createReadStream(req.file.buffer);

    // Upload the file to Cloudinary using upload_stream
    bufferStream.pipe(
      cloudinary.uploader.upload_stream(uploadOptions, (error, result) => {
        if (error) {
          console.error("Error uploading file:", error);
          return res.status(500).json({ error: "Error uploading file." });
        }

        console.log("File uploaded to Cloudinary:", result);
        // Send back the file URL from Cloudinary
        res.status(200).json({
          message: "PDF uploaded successfully!",
          fileUrl: result.secure_url,
        });
      })
    );
  } catch (error) {
    console.error("Error uploading file:", error);
    res.status(500).json({ error: "Error uploading file." });
  }
};

module.exports = { uploadPDF };
