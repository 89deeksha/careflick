import React, { useState } from "react";

function FormModal({
  onClose,
  onAddUser,
  user,
  onUpdateUser,
}) {
  const [formData, setFormData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    phone: user?.phone || "",
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
      !formData.name ||
      !formData.email ||
      !formData.phone
    ) {
      alert("Please fill all fields");
      return;
    }

    // Edit User
    if (user && onUpdateUser) {
      onUpdateUser({
        ...user,
        ...formData,
      });
    }
    // Add User
    else if (onAddUser) {
      onAddUser({
        id: Date.now(),
        ...formData,
        address: {
          street: "",
          city: "",
        },
        company: {
          name: "",
        },
      });
    }

    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div className="bg-white w-full max-w-md rounded-xl p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">
            {user ? "Edit User" : "Add New User"}
          </h2>

          <button
            onClick={onClose}
            className="text-red-500 text-xl"
          >
            ✕
          </button>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border rounded-lg p-2"
          />

          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border rounded-lg p-2"
          />

          <input
            type="text"
            name="phone"
            placeholder="Enter Phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border rounded-lg p-2"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
          >
            {user ? "Update User" : "Add User"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default FormModal;