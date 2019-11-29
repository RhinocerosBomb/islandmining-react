import React, { useState } from 'react';
// import axios from 'axios';

import UserTable from './tables/UserTable';
import AddUserForm from './forms/AddUserForm';
import EditUserForm from './forms/EditUserForm';

const User = ({ users }) => {
  /** 
  useEffect(() => {
    axios.get('http://localhost:4000/api/users')
      .then(response => {
        console.log(response)
      })
      .catch(function(err) {
        console.log(err)
      })
  }, [])
  */

  // User data state

  // State for editing mode
  const [editing, setEditing] = useState(false);

  // State for currentUser
  const initialFormState = { id: null, name: '', username: '' };
  const [currentUser, setCurrentUser] = useState(initialFormState);

  // CRUD operations
  const addUser = user => {
    // Increment ID manually in place of an
    // auto incrementing feature of a database
    // user.id = users.length + 1
    // setUsers([...users, user])
  };

  const deleteUser = id => {
    // setUsers(users.filter(user => user.id !== id))
  };

  const editRow = user => {
    setEditing(true);
    setCurrentUser({ id: user.id, name: user.name, username: user.username });
  };

  const updateUser = (id, updatedUser) => {
    setEditing(false);
    // setUsers(users.map(user => (user.id === id ? updatedUser : user)))
  };
  console.log(users);

  return (
    <div className="flex-row">
      <div className="flex-large">
        {editing ? (
          <div>
            <h2>Edit user</h2>
            <EditUserForm
              editing={editing}
              setEditing={setEditing}
              currentUser={currentUser}
              updateUser={updateUser}
            />
          </div>
        ) : (
          <div>
            <h2>Add user</h2>
            <AddUserForm addUser={addUser} />
          </div>
        )}
      </div>
      <div className="flex-large">
        <h2>View users</h2>
        <UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
      </div>
    </div>
  );
};

export default User;
