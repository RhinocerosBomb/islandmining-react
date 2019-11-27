import './app.css';
import '../assets/css/tailwind.css';
import React from 'react';
import PublicRoutes from '../router';

function App({ history }) {
  return (
    <div className="site-content">
      <PublicRoutes history={history} />
    </div>
  );
}

export default App;
