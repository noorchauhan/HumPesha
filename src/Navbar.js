import React from "react";
import Logo from "./Logo";
import "./Navbar.css";
import { Outlet, Link } from "react-router-dom";
import NavIcon from "./NavIcon";
import Searchbar from "./Searchbar";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";

function Navbar() {
  return (
    <>
      <div className="navbar">
        <nav className="nav">
          <div className="nav__left">
            <Link to="/">
              <Logo />
            </Link>
            <Searchbar />
          </div>
          <div className="nav__right">
            {/* <Link to="/bookmarks">
              <NavIcon Icon={BookmarkBorderIcon} title="Bookmarks" />
            </Link> */}
            <Link to="/applications">
              <NavIcon Icon={ArticleOutlinedIcon} title="My Applications" />
            </Link>
            {/* <Link to="/chats">
              {" "}
              <NavIcon Icon={ChatBubbleOutlineIcon} title="Chats" />
            </Link> */}
            <Link to="/dashboard">
              <NavIcon Icon={AccountCircleIcon} title="Account" />
            </Link>
          </div>
        </nav>
      </div>
      <Outlet />
    </>
  );
}

export default Navbar;
