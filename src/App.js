import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "../src/Pages/Landing";
import VolunteerPopup from "./Components/Register/VolunteerPopup";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/volunteer" element={<VolunteerPopup />} />
      </Routes>
    </Router>
  );
};

export default App;
