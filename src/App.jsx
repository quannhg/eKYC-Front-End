import "bootstrap/dist/css/bootstrap.min.css";
import Feature1 from "./components/Feature1";
import Feature2 from "./components/Feature2";
import { HomePage } from "./components/Home";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const appStyle = {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    fontFamily: "Inter",
  };

  const contentStyle = {
    flex: 1,
  };

  return (
    <div style={appStyle}>
      <Router>
        <div className="w-100" style={contentStyle}>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/feature1" element={<Feature1 />} />
            <Route exact path="/feature2" element={<Feature2 />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
