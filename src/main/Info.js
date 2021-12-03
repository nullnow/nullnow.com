import React, {useState} from 'react';

export default function Info({ name, info }) {
  const [message, setMessage] = useState('');

  const clicker = () => message === '' ? setMessage(info) : setMessage('');

  return (
    <div className="info-base" onClick={clicker}>
      <h2 className="info-box">{name}</h2>
      <p className="info-text">{message}</p>
    </div>
  );
}
