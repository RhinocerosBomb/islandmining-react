import '../assets/css/tailwind.css';
import React from 'react';
import PublicRoutes from '../router';

function App() {
  return (
    <div className="site-content" style={{ height: '100%' }}>
      <PublicRoutes />
    </div>
  );
}

export default App;
