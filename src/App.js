import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "../src/Pages/Landing";
import ContactUs from "./Components/Contact/ContactUs";
import Login from "./Pages/Login";
import Volunteer from "./Pages/Volunteer";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/volunteer" element={<Volunteer />} />
      </Routes>
    </Router>
  );
};

export default App;
