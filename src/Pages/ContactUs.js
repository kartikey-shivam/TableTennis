import React from "react";
import Map from "./../assets/map.png";
import Location from "./../assets/location.png";
import Phn from "./../assets/phn.png";
import Email from "./../assets/email.png";
import Inst from "./../assets/insta.png";
import Fb from "./../assets/Fb.png";
import Wp from "./../assets/wp.png";
import Internet from "./../assets/internet.png";
export default function ContactUs() {
  return (
    <div className="contactus">
      <div className="contactus_text">
        <h1 className="contactus_heading">Contact us</h1>
        <div className="content">
          <div className="content-logo">
            <img src={Location} alt="" className="content-logo_img" />
          </div>
          <p className="contactus_address">
            Center1: In Dikshant international school, Dhakoli, Zirakpur, Punjab
            Haryana 134109 Centre 2: Sco 1, Village Kundi, Sector 20, Panchkula,
            Haryana 134117
          </p>
        </div>
        <div className="content">
          <div className="content-logo">
            <img src={Phn} alt="" className="content-logo_img2" />
          </div>
          <h1 className="contactus_phn">
            +91 8437188555 <br />
            +91 7889003014
          </h1>
        </div>
        <div className="content">
          <div className="content-logo">
            <img src={Email} alt="" className="content-logo_img3" />
          </div>
          <p className="contactus_email">company@email.com</p>
        </div>
        <div className="social">
          <img src={Fb} alt="" className="social_logo" />
          <img src={Inst} alt="" className="social_logo" />
          <img src={Wp} alt="" className="social_logo" />
          <img src={Internet} alt="" className="social_logo" />
        </div>
      </div>
      <div className="contactus_map">
        <img src={Map} alt="" className="map_img" />
      </div>
    </div>
  );
}
