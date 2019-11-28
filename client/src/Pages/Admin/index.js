import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Users from './users/Users';
import Transaction from './transactions/Transactions';
import { getUsers } from '../../crud/admin.crud';
import { actions } from '../../store/ducks/admin.duck';
import './admin.css';

const App = () => {
  const [userTab, setUserTab] = useState(true);
  const dispatch = useDispatch();
  const {
    admin: { users }
  } = useSelector(state => state.rootReducer);
  useEffect(() => {
    getUsers().then(response => {
      dispatch(actions.storeUsers(response.data.users));
    });
  }, []);
  return (
    <div className="container">
      <h1>Admin Panel</h1>
      <button onClick={() => setUserTab(true)} className="button muted-button">
        Users
      </button>

      <button onClick={() => setUserTab(false)} className="button muted-button">
        Transactions
      </button>

      {userTab ? <Users users={users} /> : <Transaction />}
    </div>
  );
};

export default App;
