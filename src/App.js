import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "../src/Pages/Landing";
import ContactUs from "./Components/Contact/ContactUs";
import Login from "./Pages/Login";
import Volunteer from "./Pages/Volunteer";
import ErrorPage from "./Pages/ErrorPage";
import Organization from "./Pages/Organization";
import CommunityEvents from "./Pages/CommunityEvents";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/volunteer" element={<Volunteer />} />
        <Route path="/error" element={<ErrorPage />} />
        <Route path="/organization" element={<Organization />} />
        <Route path="/community" element={<CommunityEvents />} />
      </Routes>
    </Router>
  );
};

export default App;
