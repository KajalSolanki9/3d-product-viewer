const express = require("express");
const ViewerSetting = require("../models/ViewerSetting");

const router = express.Router();
// save or update viewer settings
router.post("/", async (req, res) => {
  try {
    let existingSettings = await ViewerSetting.findOne();
  if (!existingSettings) {
// create new settings document
      existingSettings = new ViewerSetting(req.body);
    } else {
// update existing values
      existingSettings.backgroundColor = req.body.backgroundColor;
      existingSettings.wireframe = req.body.wireframe;
    }
    const savedSettings = await existingSettings.save();
    res.status(201).json(savedSettings);
  } catch (err) {
    console.error("Error saving settings:", err);
    res.status(500).json({ error: "Failed to save settings" });
  }
});
// get latest viewer setting
router.get("/", async (req, res) => {
  try {
    const settings = await ViewerSetting.findOne().sort({ createdAt: -1 });
    res.json(settings);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch settings" });
  }
});
module.exports = router;