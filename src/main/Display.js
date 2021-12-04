import React, { useState } from 'react';

function Info({ name, message }) {
  return (
    <div className="info-base">
      <span className="info-box">
        <h1>{name}</h1>
      </span>

      <span className="info-text">{message}</span>
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
      header: 'mission & vision',
      value:
        'We serve as an entity of continental growth and empowerment - championing efficiency and excellence, at every turn. We are positioned to improve the way businesses grow and scale, one stakeholder at a time, each day. Our vision is to change the way businesses industrialize in Africa, by doing extraordinary things in ordinary ways.',
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
