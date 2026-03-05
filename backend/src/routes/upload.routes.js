const express = require("express");
const multer = require("multer");
const path = require("path");
const router = express.Router();

//configure storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },

  filename: (req, file, cb) => {
    const uniqueName = Date.now() + path.extname(file.originalname);
    cb(null, uniqueName);
  },
});

//allow only glb and gltf models
const fileFilter = (req, file, cb) => {
  const allowed = [".glb", ".gltf"];
  const extension = path.extname(file.originalname).toLowerCase();

  if (allowed.includes(extension)) {
    cb(null, true);
  } else {
    cb(new Error("Unsupported file format"));
  }
};
const upload = multer({
  storage,
  fileFilter,
});
// upload endpoint
router.post("/", upload.single("model"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: "Model file missing" });
  }
  res.json({
    success: true,
    fileName: req.file.filename,
    url: `/uploads/${req.file.filename}`,
  });
});

module.exports = router;