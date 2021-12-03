import React, { useState } from 'react';
import Info from '../Info';

export default function Display() {
  return (
    <div>
      <div className="information">
        <Info
          name="Description"
          info="Nullnow Computing is a business technology partner for small-to-medium enterprises within the African continental region. The impact of technical innovation on societal improvements and profit does not escape us. We intend to become an established engine of growth and excellence."
        />
        <Info
          name="The Mission"
          info="To serve as an entity of continental growth and empowerment - championing efficiency and excellence, at every turn. To improve the way businesses grow and scale, one stakeholder at a time, each day."
        />

        <Info
          name="Our Vision"
          info="To impact positive change even as we change the way businesses industrialize in Africa. Doing extraordinary things in ordinary ways."
        />
      </div>
    </div>
  );
}
