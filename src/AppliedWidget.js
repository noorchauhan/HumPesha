import React from "react";
import "./Widget.css"
import LocationOnIcon from "@mui/icons-material/LocationOn";

function widget() {
  return (
    <div class="widget">
      <h3 class="job-profile">Carpentry</h3>
      <p class="company">Goodwoods.inc</p>
      <h6 class="location">
        <LocationOnIcon class="location__icon" />
        Delhi NCR
      </h6>
      <p>10k-15k/month</p>
      <button type="button" class="btn btn-dark btn-lg apply-button">
        Review Application
      </button>
    </div>
  );
}

export default widget;
