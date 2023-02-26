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
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus consectetur, reprehenderit tempore accusamus inventore
            repudiandae nesciunt minus, nisi distinctio sed dicta quis ullam
            dignissimos ratione expedita eum quaerat. Necessitatibus blanditiis
            quod aliquid tenetur qui id iusto omnis?
          </p>
          <Link to="/internship"><button>Apply Now!</button></Link>
        </div>
      </div>
    </>
  );
}

export default Hero;
