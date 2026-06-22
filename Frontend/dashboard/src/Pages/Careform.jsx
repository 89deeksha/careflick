import React, { useState } from "react";
import "./App.css";

function App() {
  const initialdata = {
    residentName: "",
    symptomsObserved: {
      fever: false,
      cough: false,
      fatigue: false,
      headache: false,
      shortnessOfBreath: false,
      diziness: false,
    },
  };

  const [formData, setFormData] = useState(initialdata);

  const handleTextChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSymptomChange = (e) => {
    const { name, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      symptomsObserved: {
        ...prev.symptomsObserved,
        [name]: checked,
      },
    }));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="w-full max-w-lg bg-white shadow-lg rounded-xl p-6">
        <h1 className="text-2xl font-bold text-center mb-6">
          Resident Care Form
        </h1>

        {/* Resident Name */}
        <div className="mb-5">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Resident Name
          </label>
          <input
            type="text"
            name="residentName"
            value={formData.residentName}
            onChange={handleTextChange}
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter resident name"
          />
        </div>

        {/* Symptoms */}
        <div>
          <h2 className="text-lg font-semibold mb-3">
            Symptoms Observed
          </h2>

          <div className="grid grid-cols-2 gap-3">
            {Object.keys(formData.symptomsObserved).map((symptom) => (
              <label
                key={symptom}
                className="flex items-center gap-2 text-gray-700"
              >
                <input
                  type="checkbox"
                  name={symptom}
                  checked={formData.symptomsObserved[symptom]}
                  onChange={handleSymptomChange}
                  className="h-4 w-4"
                />
                <span className="capitalize">
                  {symptom.replace(/([A-Z])/g, " $1")}
                </span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;