import React from "react";

function UserModal({ user, onClose, onDelete, onEdit, submittedForms }) {
  if (!user) return null;


   const userForms = submittedForms.filter(
  (form) => form.userId === user.id
);

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div className="bg-white rounded-xl w-full max-w-lg p-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">User Details</h2>

          <button
            onClick={onClose}
            className="text-red-500 text-xl"
          >
            ✕
          </button>
        </div>

        <div className="mt-4 space-y-3">
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Phone:</strong> {user.phone}</p>

          <p>
            <strong>Address:</strong>{" "}
            {user.address.street}, {user.address.city}
          </p>

          <p>
            <strong>Company:</strong>{" "}
            {user.company.name}
          </p>
        </div>

        <div className="mt-6">
          <h3 className="font-semibold text-lg">
            Submitted Care Forms
          </h3>

          <p className="text-gray-500">
            No forms submitted yet
          </p>
        </div>

        <div className="flex gap-3 mt-6">
  <button
    onClick={() => onDelete(user.id)}
    className="bg-red-500 text-white px-4 py-2 rounded"
  >
    Delete
  </button>

  <button
    onClick={() => onEdit(user)}
    className="bg-yellow-500 text-white px-4 py-2 rounded"
  >
    Edit
  </button>
</div>
      </div>
      {userForms.length > 0 ? (
  userForms.map((form) => (
    <div key={form.id} className="border p-2 rounded mt-2">
      <p>{form.formType}</p>
      <p>{form.notes}</p>
    </div>
  ))
) : (
  <p>No forms submitted yet</p>
)}
    </div>
  );
}

export default UserModal;