const express = require("express");
const pdfUploadRoute = require("./src/routes/pdfUploadRoute");
const app = express();
const port = 3500;

// Middleware to parse JSON data (if you're sending JSON)
app.use(express.json());

// Middleware to parse URL-encoded form data (e.g., form submissions)
app.use(express.urlencoded({ extended: true }));

// Test route
app.get("/", (req, res) => {
  res.send("successfully!");
});

// Use the pdfUploadRoute for handling the PDF upload
app.use(pdfUploadRoute);

// Start the server
app.listen(port, () => {
  console.log(`Node app is running at port: ${port}`);
});
