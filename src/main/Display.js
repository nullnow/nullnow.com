import React, { useState } from 'react';

function Info({ name, message }) {
  const [show, setShow] = useState('hidden');

  const output = () =>
    show === 'hidden' ? setShow('visible') : setShow('hidden');

  return (
    <div className="info-base" onClick={output}>
      <span className="info-box">
        <h4>{name}</h4>
        <i class="bi bi-arrow-bar-down special-button-icon-alt"></i>
      </span>
      <span className="info-text" style={{ visibility: show }}>
        {message}
      </span>
    </div>
  );
}

export default function Display() {
  const input = [
    {
      header: 'who we are',
      value:
        'Nullnow Computing is a business technology partner for small-to-medium enterprises within the African continental region. The impact of technical innovation on societal improvements and profit does not escape us. We intend to become an established engine of growth and excellence.',
    },
    {
      header: 'the mission',
      value:
        'To serve as an entity of continental growth and empowerment - championing efficiency and excellence, at every turn. To improve the way businesses grow and scale, one stakeholder at a time, each day.',
    },
    {
      header: 'our vision',
      value:
        'To impact positive change even as we change the way businesses industrialize in Africa. Doing extraordinary things in ordinary ways.',
    },
  ];

  return (
    <div className="information">
      {input.map((item) => {
        return (
          <Info name={item['header'].toUpperCase()} message={item['value']} />
        );
      })}
    </div>
  );
}
