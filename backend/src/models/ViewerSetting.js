const mongoose = require("mongoose");

const ViewerSettingSchema = new mongoose.Schema(
  {
    backgroundColor: {
      type: String,
      required: true,
    },

    wireframe: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("ViewerSetting", ViewerSettingSchema);