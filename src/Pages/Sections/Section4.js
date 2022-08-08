import React from "react";
import Img1 from "./../../assets/sec4img1.png";
import Img2 from "./../../assets/sec4img2.png";

export default function Section4() {
  return (
    <div className="section4">
      <h1 className="section4_heading">Coaches</h1>
      <div className="section4_box1">
        <div className="section4_box1-imgbox">
          <img src={Img1} alt="" className="section4_box1-img" />
        </div>
        <div className="section4_box1-info">
          <h1 className="section4_box1-name"> Mr. Pulkit </h1>
          <h3 className="section4_box1-sub">Table Tennis Coach</h3>
          <p className="section4_box1-para">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna autem vel eum
            iriure dolor in hendrerit in vulputate velit esse molestie
            consequat, vel illum dolore eu feugiat nulla facilisis at vero eros
            et ac Lorem ipsum dolor sit amet, consectetuer adipiscing elit, diam
            nonummy nibh euismod tincidunt ut
          </p>
        </div>
      </div>
      <div className="section4_box1">
        <div className="section4_box1-info">
          <h1 className="section4_box1-name"> Mrs. Indu Kohli </h1>
          <h3 className="section4_box1-sub">Yoga Coach</h3>
          <p className="section4_box1-para">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna autem vel eum
            iriure dolor in hendrerit in vulputate velit esse molestie
            consequat, vel illum dolore eu feugiat nulla facilisis at vero eros
            et ac Lorem ipsum dolor sit amet, consectetuer adipiscing elit, diam
            nonummy nibh euismod tincidunt ut
          </p>
        </div>
        <div className="section4_box1-imgbox">
          <img src={Img2} alt="" className="section4_box1-img" />
        </div>
      </div>
    </div>
  );
}
