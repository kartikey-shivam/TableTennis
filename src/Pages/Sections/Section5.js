import React from "react";
import Insta from "./../../assets/instaLogo.svg";
import Img1 from "./../../assets/sec5img1.png";
import Img2 from "./../../assets/sec5img2.png";
import Img3 from "./../../assets/sec5img3.png";
import Img4 from "./../../assets/sec5img4.png";
import Img5 from "./../../assets/sec5img5.png";
import Img6 from "./../../assets/sec5img6.png";
const Block = (props) => {
  return (
    <div className="block">
      <div className="block_imgBox">
        <img src={props.Img} alt="" className="block_img" />
      </div>
      <div className="block_text">{props.Name}</div>
    </div>
  );
};
export default function Section5() {
  return (
    <div className="section5">
      <h1 className="section5_heading">Achievments</h1>
      <div className="blocks">
        <Block Img={Img1} Name="Garvita" />
        <Block Img={Img2} Name="Aditya" />
        <Block Img={Img3} Name="Suhani Sareen" />
      </div>
      <div className="blocks">
        <Block Img={Img4} Name="Aditya" />
        <Block Img={Img5} Name="Pawan" />
        <Block Img={Img6} Name="Kairav Saini" />
      </div>
      <div className="insta-btnbox">
        <button type="" className="insta-btn">
          Read More
          <img src={Insta} className="insta-img" />
        </button>
      </div>
    </div>
  );
}
