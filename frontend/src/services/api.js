import axios from "axios";

const API = axios.create({
  baseURL: "https://threed-product-viewer-backend.onrender.com",
  timeout: 60000,
});

export const uploadModel = (formData) =>
  API.post("/api/upload", formData);

export const saveSettings = (data) =>
  API.post("/api/settings", data);

export const getSettings = () =>
  API.get("/api/settings");