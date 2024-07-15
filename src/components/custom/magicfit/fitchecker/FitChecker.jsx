import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import toast from 'react-hot-toast';

function FitChecker() {
  const [size, setSize] = useState("");
  const [formData, setFormData] = useState({
    neck: "",
    shoulder: "",
    chest: "",
    waist: "",
    armLength: "",
    fitPreference: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    // Load existing fit data from localStorage
    const savedFitData = localStorage.getItem("userFitData");
    if (savedFitData) {
      const parsedData = JSON.parse(savedFitData);
      setSize(parsedData.size || "");
      setFormData({
        neck: parsedData.neck || "",
        shoulder: parsedData.shoulder || "",
        chest: parsedData.chest || "",
        waist: parsedData.waist || "",
        armLength: parsedData.armLength || "",
        fitPreference: parsedData.fitPreference || "",
      });
    }
  }, []);

  const handleSizeChange = (e) => {
    setSize(e.target.value);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const dataToSave = { ...formData, size };
    localStorage.setItem("userFitData", JSON.stringify(dataToSave));
    toast.success("Your fit data has been saved!");
    navigate('/'); // Navigate back to home page
  };

  return (
    <div className="max-w-lg mx-auto p-6">
      <h1 className="text-4xl font-bold mb-4 text-center">Check Your Perfect Fit</h1>
      <p className="mb-6 text-xl text-center">
        Enter your size details below to find the best fit for your upper wear clothing needs.
      </p>

      <div className="p-5 shadow-lg rounded-lg border border-gray-300 bg-white">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="text-sm font-semibold">Select Size:</label>
            <select
              value={size}
              onChange={handleSizeChange}
              className="mt-2 block w-full border border-gray-300 rounded-md p-2"
            >
              <option value="">--Choose Size--</option>
              <option value="S">S (36-38 cm)</option>
              <option value="M">M (38-40 cm)</option>
              <option value="L">L (40-42 cm)</option>
              <option value="XL">XL (42-44 cm)</option>
              <option value="XXL">XXL (44-46 cm)</option>
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-semibold">Neck Size (in cm)</label>
              <Input name="neck" placeholder="e.g., 39" value={formData.neck} onChange={handleInputChange} />
            </div>
            <div>
              <label className="text-sm font-semibold">Shoulder Width (in cm)</label>
              <Input name="shoulder" placeholder="e.g., 46" value={formData.shoulder} onChange={handleInputChange} />
            </div>
            <div>
              <label className="text-sm font-semibold">Chest Size (in cm)</label>
              <Input name="chest" placeholder="e.g., 96" value={formData.chest} onChange={handleInputChange} />
            </div>
            <div>
              <label className="text-sm font-semibold">Waist Size (in cm)</label>
              <Input name="waist" placeholder="e.g., 82" value={formData.waist} onChange={handleInputChange} />
            </div>
            <div>
              <label className="text-sm font-semibold">Arm Length (in cm)</label>
              <Input name="armLength" placeholder="e.g., 60" value={formData.armLength} onChange={handleInputChange} />
            </div>
            <div>
              <label className="text-sm font-semibold">Fit Preference</label>
              <Input name="fitPreference" placeholder="e.g., Slim, Regular" value={formData.fitPreference} onChange={handleInputChange} />
            </div>
          </div>

          <div className="mt-6 flex justify-center">
            <Button type="submit" className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white hover:opacity-90 transition px-6">
              Save
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FitChecker;
