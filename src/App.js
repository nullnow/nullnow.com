import './App.css';

import Navbar from './main/Navbar';
import Description from './main/sections/Description';
import OurVision from './main/sections/Vision';
import TheMission from './main/sections/Mission';
import Contact from './main/sections/Contact';
import Copyright from './main/sections/Copyright';
import Shop from './main/sections/Shop';
import Blog from './main/sections/Blog';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <h3 style={{ color: '#639', margin: '50px 0px 20px 0' }}>
          Building a digital feed for marketing content.
        </h3>
        <Description />
        <OurVision />
        <TheMission />
        <hr />
        <div className="footer">
          <div className="activity">
            <Contact />
            <Shop />
            <Blog />
          </div>
          <Copyright />
        </div>
      </div>
    </div>
  );
}

export default App;
