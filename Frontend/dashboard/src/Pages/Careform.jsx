import React, { useState } from "react";

function Careform({ users, setSubmittedForms }) {
  const [formData, setFormData] = useState({
    userId: "",
    formType: "",
    notes: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

 const handleSubmit = (e) => {
  e.preventDefault();

  if (
    !formData.userId ||
    !formData.formType ||
    !formData.notes
  ) {
    alert("Please fill all fields");
    return;
  }

  const newForm = {
    id: Date.now(),
    userId: Number(formData.userId),
    formType: formData.formType,
    notes: formData.notes,
    submittedAt: new Date().toLocaleString(),
  };

  setSubmittedForms((prev) => [
    ...prev,
    newForm,
  ]);

  alert("Form submitted successfully");

  setFormData({
    userId: "",
    formType: "",
    notes: "",
  });
};

  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h2 className="text-2xl font-bold mb-4">
        Care Form
      </h2>

      <form
        onSubmit={handleSubmit}
        className="space-y-4"
      >
        {/* User Dropdown */}
        <select
          name="userId"
          value={formData.userId}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        >
          <option value="">
            Select User
          </option>

          {users?.map((user) => (
            <option
              key={user.id}
              value={user.id}
            >
              {user.name}
            </option>
          ))}
        </select>

        {/* Form Type */}
        <select
          name="formType"
          value={formData.formType}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        >
          <option value="">
            Select Form Type
          </option>

          <option value="Health Check Form">
            Health Check Form
          </option>

          <option value="Medication Form">
            Medication Form
          </option>
        </select>

        {/* Notes */}
        <textarea
          name="notes"
          value={formData.notes}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          placeholder="Enter Notes"
          rows="4"
        />

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Submit Form
        </button>
      </form>
    </div>
  );
}

export default Careform;