import React, { useState } from 'react';

export default function Info({ name, info }) {
  const [message, setMessage] = useState('');

  const clicker = () => (message === '' ? setMessage(info) : setMessage(''));

  return (
    <div className="info-base" onClick={clicker}>
      <div className="info-box">
        <h4>{name}</h4>
        <i class="bi bi-arrow-bar-down special-button-icon-alt"></i>
      </div>
      <p className="info-text">{message}</p>
    </div>
  );
}
