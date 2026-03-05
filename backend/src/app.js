const express = require("express");
const cors = require("cors");
const path = require("path");

const uploadRoutes = require("./routes/upload.routes");
const settingsRoutes = require("./routes/settings.routes");

const app = express();

app.use(cors());
app.use(express.json());

//serve uploaded models as static files
app.use("/uploads", express.static(path.join(__dirname, "../uploads")));

app.use("/api/upload", uploadRoutes);
app.use("/api/settings", settingsRoutes);

app.get("/", (req, res) => {
  res.send("backend is running");
});

module.exports = app;