import './App.css';

import Navbar from './main/Navbar';
import Display from './main/Display';
import Footer from './main/Footer';

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
