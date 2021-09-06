import "./App.css";

import Navbar from "./main/Navbar";
import Description from "./main/sections/Description";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Description />
      </div>
    </div>
  );
}

export default App;
