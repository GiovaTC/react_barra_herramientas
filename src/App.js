import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ToolbarMenu from './components/ToolbarMenu';
import Home from './components/Home';
import About from './components/About';

const App = () => {
  return (
    <Router>
      <ToolbarMenu />
      <div style={{ padding: '20px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

