import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "../src/Pages/Landing";
import ContactUs from "./Components/Contact/ContactUs";
import Login from "./Pages/Login";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
