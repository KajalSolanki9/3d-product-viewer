import { useState, useEffect } from "react";
import ModelViewer from "./components/ModelViewer";
import Controls from "./components/Controls";
import { uploadModel, saveSettings, getSettings } from "./services/api";
function App() {
  const [modelUrl, setModelUrl] = useState(null);
  const [bgColor, setBgColor] = useState("#ffffff");
  const [wireframe, setWireframe] = useState(false);
const API_URL = import.meta.env.VITE_API_URL;
console.log("API URL:", API_URL);
//Settings Load From Backend
  useEffect(() => {
    const loadSettings = async () => {
      try {
        const res = await getSettings();

        if (res.data) {
          setBgColor(res.data.backgroundColor);
          setWireframe(res.data.wireframe);
        }
      } catch (error) {
        console.log("Error loading settings", error);
      }
    };

    loadSettings();
  }, []);

//Settings Save To Backend
  useEffect(() => {
    const persistViewerSettings = async () => {
  try {
    await saveSettings({
      backgroundColor: bgColor,
      wireframe: wireframe,
    });
  } catch (err) {
    console.error("Failed to persist viewer settings", err);
  }
};

   persistViewerSettings();
  }, [bgColor, wireframe]);

//Model upload
  const handleFileUpload = async (e) => {
   const file = e.target.files?.[0];

if (!file) {
  console.warn("No file selected");
  return;
}

const ext = file.name.split(".").pop().toLowerCase();

if (ext !== "glb" && ext !== "gltf") {
  alert("Please upload a valid GLB or GLTF file");
  return;
}

    const formData = new FormData();
    formData.append("model", file);

    try {
      const res = await uploadModel(formData);
      console.log(res.data);

      setModelUrl(`${API_URL}${res.data.url}`);
    } catch (error) {
      console.log("Upload error", error);
    }
    
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 flex flex-col items-center px-4 py-8">

      <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
       Intreactive 3D Product Viewer
      </h1>

      <div className="bg-white shadow-xl rounded-xl p-4 md:p-6 flex flex-col lg:flex-row gap-6 w-full max-w-6xl">

   <ModelViewer
   modelUrl={modelUrl}
  bgColor={bgColor}
   wireframe={wireframe}
 />

  <Controls
   onUpload={handleFileUpload}
    bgColor={bgColor}
     setBgColor={setBgColor}
       wireframe={wireframe}
        setWireframe={setWireframe}
 />
</div>

    </div>
  );
}

export default App;