import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Applications from "./Applications";
import Footer from "./Footer";
import Hero from "./Hero";
import Home from "./Home";
import Internship from "./Internship";
import Main from "./Main";
import Navbar from "./Navbar";


function App() {
  return (
    <div className="App">
      {/* <Main /> */}

      {/* <Navbar />
      <Hero />
      <Footer /> */}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            {/* <Route index element={<Footer />} /> */}
            <Route path="applications" element={<Applications />} />
            <Route path="dashboard" element={<Hero />} />
            <Route path="internship" element={<Internship />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
