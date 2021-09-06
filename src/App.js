import "./App.css";

import Navbar from "./main/Navbar";
import Description from "./main/sections/Description";
import OurVision from "./main/sections/Vision";
import TheMission from "./main/sections/Mission";
import Contact from "./main/sections/Contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Description />
        <OurVision />
        <TheMission />
        <hr />
        <Contact />
      </div>
    </div>
  );
}

export default App;
