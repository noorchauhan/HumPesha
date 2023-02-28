import React from "react";
import "./Hero.css";
import { Outlet, Link } from "react-router-dom";

function Hero() {
  return (
    <>
      <div className="hero">
        <div className="heroleft">
          <h1>GET STARTED WITH YOUR JOURNEY</h1>
          <p>
            HumPesha is a platform for your skills to put to test
            using our services you can find yourself the perfect match to
            your skills
          </p>
          <Link to="/internship"><button>Apply Now!</button></Link>
        </div>
      </div>
    </>
  );
}

export default Hero;
