import React, { Profiler, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import TearmsCo from "./pages/TearmsCo";
import Register from "./pages/Register";
import Head from "./Component/Head";
import Foot from "./Component/Foot";
import Profil from "./pages/Profil";


function App() {
 
  return (
    <div>
      <Head />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Terms" element={<TearmsCo />} />
          <Route path="/Profile" element={<Profil />} />
          <Route path="/Registration" element={<Register />} />
        </Routes>
      </Router>
      <Foot />
    </div>
  );
}

export default App;
