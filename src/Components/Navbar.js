// import Image from "next/image";
import { Link } from "@mui/material";
import React from "react";
import Logo from "./../assets/logo.svg";
export default function navbar() {
  return (
    <div className="navbar">
      <div className="logo_box">
        <div className="logo_imgbox">
          <img src={Logo} className="logo_img" />
        </div>
        <div className="logo_text">Positive Table Tennis</div>
      </div>
      <div className="navBtn">
        <div className="navBtn_text">Home</div>
        <a to="/about/tt">
          <div className="navBtn_text">About us</div>
        </a>
        <div className="navBtn_text">Contact us</div>
        <div className="navBtn_text">Register</div>
      </div>
    </div>
  );
}
