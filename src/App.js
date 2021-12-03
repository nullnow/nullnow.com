import './App.css';

import Navbar from './main/sections/Navbar';
import Display from './main/sections/Display';
import Footer from './main/sections/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Display />
        <Footer />
      </div>
    </div>
  );
}

export default App;
