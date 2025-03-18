import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Dash from "./Dash"; // Ensure this import is correct

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dash" element={<Dash />} /> {/* Ensure this route is correct */}
        <Route path="*" element={<Login />} /> { }
      </Routes>
    </Router>
  );
}

export default App;
