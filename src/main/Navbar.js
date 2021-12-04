import React from 'react';

import logo from './nullnow-computing-logo.png';

export default function Navbar() {
  return (
    <div className="navbar">
      <img
        src={logo}
        alt="Logo"
        height={80}
        width={80}
        title="Nullnow Computing"
      />
      <span className="nav-header">Nullnow Computing</span>
    </div>
  );
}
