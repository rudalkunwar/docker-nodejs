// pdfUploadController.js
const { pdfUpload } = require("../middleware/pdfUpload"); // Adjust the path as needed

// Controller function for handling PDF upload
const uploadPDF = async (req, res) => {
  try {
    // Check if a file is uploaded
    if (!req.file) {
      return res.status(400).send("No file uploaded.");
    }

    // Call the pdfUpload function to upload the file to Cloudinary
    const fileUrl = await pdfUpload(req.file);

    console.log("File uploaded to Cloudinary:", fileUrl);

    // Send response with the uploaded file URL
    res.status(200).send({
      message: "PDF uploaded successfully!",
      fileUrl: fileUrl,
    });
    
  } catch (error) {
    console.error("Error uploading file:", error);
    res.status(500).send("Error uploading file.");
  }
};

module.exports = {
  uploadPDF,
};
