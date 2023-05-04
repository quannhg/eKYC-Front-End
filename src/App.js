import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './components/Home';
import Feature1 from './components/Feature1';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/feature1" element={<Feature1 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
