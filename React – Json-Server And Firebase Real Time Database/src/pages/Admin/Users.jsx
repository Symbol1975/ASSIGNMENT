import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UserForm from '../../components/UserForm';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [userToEdit, setUserToEdit] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/users').then((response) => {
      setUsers(response.data);
    });
  }, []);

  const saveUser = (user) => {
    if (userToEdit) {
      axios.put(`http://localhost:5000/users/${userToEdit.id}`, user).then((response) => {
        setUsers(users.map((u) => (u.id === userToEdit.id ? response.data : u)));
        setUserToEdit(null);
      });
    } else {
      axios.post('http://localhost:5000/users', user).then((response) => {
        setUsers([...users, response.data]);
      });
    }
    setShowForm(false);
  };

  const deleteUser = (id) => {
    axios.delete(`http://localhost:5000/users/${id}`).then(() => {
      setUsers(users.filter((user) => user.id !== id));
    });
  };

  const handleEdit = (user) => {
    setUserToEdit(user);
    setShowForm(true);
  };

  const handleView = (user) => {
    alert(`Viewing User:\nName: ${user.firstName} ${user.lastName}\nEmail: ${user.email}`);
  };

  return (
    <div>
      <h1>Users</h1>
      <button onClick={() => { setShowForm(true); setUserToEdit(null); }}>Add User</button>
      
      {showForm && (
        <UserForm
          onSave={saveUser}
          userToEdit={userToEdit}
          onCancel={() => setShowForm(false)}
        />
      )}
      
      <table>
        <thead>
          <tr>
            <th>User First Name</th>
            <th>User Last Name</th>
            <th>User Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.email}</td>
              <td>
                <button className="view-btn" onClick={() => handleView(user)}>View</button>
                <button className="edit-btn" onClick={() => handleEdit(user)}>Edit</button>
                <button className="delete-btn" onClick={() => deleteUser(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
