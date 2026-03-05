export default function Controls({onUpload,bgColor,setBgColor,wireframe,setWireframe,}) 
{
return (
 <div className="w-full lg:w-72 flex flex-col gap-6">
<h2 className="text-lg font-semibold text-gray-700">
        Viewer Controls
      </h2>
 <div>
 <label className="block text-sm font-medium text-gray-600 mb-2">
   Upload 3D Model
   </label>

<input type="file" accept=".glb,.gltf"onChange={onUpload} className="block w-full text-sm border rounded-lg p-2 cursor-pointer bg-gray-50 hover:bg-gray-100 transition "
 />
 </div>
 <div>
  <label className="block text-sm font-medium text-gray-600 mb-2">
    Background Color
   </label>
<input type="color" value={bgColor} onChange={(e) => setBgColor(e.target.value)}
 className="w-full h-10 rounded-md border cursor-pointer"
  />
</div>
 <div className="flex items-center gap-2">

<input type="checkbox" checked={wireframe} onChange={(e) => setWireframe(e.target.checked)} 
className="w-4 h-4" />
       
 <label className="text-sm text-gray-700">
           Wireframe
        </label>
      </div>

    </div>
  );
}