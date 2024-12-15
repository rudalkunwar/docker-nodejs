const express = require("express");
const multer = require("multer");
const { uploadPDF } = require("../controllers/pdfuploadController"); // Adjust path if necessary

const upload = multer({ storage: multer.memoryStorage() });

const router = express.Router();

// Define route for handling PDF upload
router.post("/pdf", upload.single('file'), uploadPDF);

module.exports = router;
