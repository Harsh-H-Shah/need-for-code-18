import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Adopt from './pages/Adopt.jsx';
import Health from './pages/Health.jsx';
import Home from './pages/Home.jsx';
import Info from './pages/Info.jsx';
import Security from './pages/Security.jsx';
import AdoptApp from './pages/AdoptApp.jsx';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/adopt" element={<Adopt />} />
          <Route path="/adopt/app" element={<AdoptApp />} />
          <Route path="/health" element={<Health />} />
          <Route path="/security" element={<Security />} />
          <Route path="/info" element={<Info />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
