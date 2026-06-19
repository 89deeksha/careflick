import React, { useEffect, useState } from "react";
import UserModal from "../Components/UserModal";
import FormModal from "../Components/FormModal";

function Users({users,
  setUsers,
  submittedForms,}) {
  
  const [search, setSearch] = useState("");
  
  const [selectedUser, setSelectedUser] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [editingUser, setEditingUser] = useState(null);

  

 

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase())
  );

 

  const addUser = (newUser) => {
  setUsers((prevUsers) => [...prevUsers, newUser]);
};


const deleteUser = (id) => {
  setUsers(users.filter((user) => user.id !== id));
  setSelectedUser(null);
};

const editUser = (user) => {
  setEditingUser(user);
};

  return (
    <div>
      {/* Heading */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        <h2 className="text-2xl font-bold">
          Users Management
        </h2>

        <button onClick={()=>setShowAddModal(true)} className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          + Add User
        </button>
      </div>

      {/* Search */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search by name or email..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-96 border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* User Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user) => (
            <div
              key={user.id}
               onClick={() => setSelectedUser(user)}
              className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition cursor-pointer"
            >
              <h3 className="text-lg font-bold mb-2">
                {user.name}
              </h3>

              <p className="text-gray-600 mb-1">
                📧 {user.email}
              </p>

              <p className="text-gray-600">
                📞 {user.phone}
              </p>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center text-gray-500">
            No users found
          </div>
        )}
      </div>
      <UserModal
  user={selectedUser}
  submittedForms={submittedForms}
  onClose={() => setSelectedUser(null)}
  onDelete={deleteUser}
  onEdit={editUser}
/>
{showAddModal && (
  <FormModal
    onClose={() => setShowAddModal(false)}
    onAddUser={addUser}
    
  />
)}

{editingUser && (
  <FormModal
    user={editingUser}
    onClose={() => setEditingUser(null)}
    onUpdateUser={(updatedUser) => {
      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user.id === updatedUser.id ? updatedUser : user
        )
      );

      setEditingUser(null);
      setSelectedUser(null);
    }}
  />
)}
    </div>
    
  );
}


export default Users;