import React from "react";

export default function Info({ text }) {
  return (
    <div className="info-box">
      <p className="info-text">{text}</p>
    </div>
  );
}
