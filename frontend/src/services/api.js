import axios from "axios";

const API = axios.create({
  baseURL: "https://threed-product-viewer-backend.onrender.com",
  timeout: 10000,
});

export const uploadModel = (formData) =>
  API.post("/upload", formData);

export const saveSettings = (data) =>
  API.post("/settings", data);

export const getSettings = () =>
  API.get("/settings");
