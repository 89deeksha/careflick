
import "./App.css";
import Careform from "./Pages/Careform";
import Users from "./Pages/User";

import React, { useEffect, useState } from "react";


function App() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [activeTab, setActiveTab] = useState("users");
  const [submittedForms, setSubmittedForms] = useState([]);
  const [users, setUsers] = useState([]);


  useEffect(() => {
    fetchUsers();
  }, []);
   const fetchUsers = async () => {
  try {
    setLoading(true);
    setError("");

    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    );

    if (!response.ok) {
      throw new Error("Failed to fetch users");
    }

    const data = await response.json();

    setUsers(data);
  } catch (err) {
    setError(err.message);
  } finally {
    setLoading(false);
  }
};
  
  if (loading) {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <h2 className="text-xl font-semibold">
        Loading Users...
      </h2>
    </div>
  );
}

if (error) {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <h2 className="text-red-500 text-xl">
        {error}
      </h2>
    </div>
  );
}

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-blue-600 text-white py-4 shadow-md">
        <h1 className="text-3xl font-bold text-center">
          Careflick Dashboard
        </h1>
      </header>

      {/* Tabs */}
      <div className="flex justify-center gap-4 mt-6">
        <button
          onClick={() => setActiveTab("users")}
          className={`px-6 py-2 rounded-lg font-medium transition ${
            activeTab === "users"
              ? "bg-blue-600 text-white"
              : "bg-white border border-gray-300"
          }`}
        >
          Users
        </button>

        <button
          onClick={() => setActiveTab("forms")}
          className={`px-6 py-2 rounded-lg font-medium transition ${
            activeTab === "forms"
              ? "bg-blue-600 text-white"
              : "bg-white border border-gray-300"
          }`}
        >
          Care Forms
        </button>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto p-6">
        {activeTab === "users" && (
  <Users
    users={users}
    setUsers={setUsers}
    submittedForms={submittedForms}
  />
)}

{activeTab === "forms" && (
  <Careform
  users={users}
  submittedForms={submittedForms}
  setSubmittedForms={setSubmittedForms}
/>
)}
      </div>
    </div>
  );
}

export default App;