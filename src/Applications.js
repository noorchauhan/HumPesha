import AppliedWidget from "./AppliedWidget"
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./Applications.css"

function Applications() {
  return (
    <div className="applications">
      <AppliedWidget/>
      <AppliedWidget/>
      <AppliedWidget/>
      <AppliedWidget/>
    </div>
  );
}

export default Applications;
