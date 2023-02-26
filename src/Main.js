import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import ApartmentIcon from "@mui/icons-material/Apartment";
import "./Main.css";

function Main() {
  return (
    <div className="main__main">
      <div class="logo">
        <h1 class="hum">Hum</h1>
        <h1 class="pe">पे</h1>
        <h1 class="sha">sha</h1>
      </div>
      <h1 class="slogan">Together | Humesha</h1>
      <div className="choose__login">
        <div id="loginbox" className="login__left">
          <PersonIcon className="icon1"/>
          Register as a User
        </div>
        <div id="loginbox" className="login__right">
          <ApartmentIcon className="icon1"/>
          Register as a Company
        </div>
      </div>
    </div>
  );
}

export default Main;
