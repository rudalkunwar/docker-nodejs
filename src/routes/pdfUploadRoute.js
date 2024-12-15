// pdfUploadRoute.js
const express = require("express");
const multer = require("multer");
const { uploadPDF } = require("../controllers/pdfuploadController"); // Adjust path if necessary

// Set up multer storage (memory storage for files)
const storage = multer.memoryStorage();
const upload = multer({ storage: storage }).single("pdf"); // 'pdf' is the field name in form-data

const router = express.Router();

// Define route for handling PDF upload
router.post("/pdf", upload, uploadPDF);

module.exports = router;
