import React from "react";
import Bgimg from "./../../assets/bgimg1.png";
import Bgimg1 from "./../../assets/sec2img1.png";
import Bgimg2 from "./../../assets/sec2img2.png";
// import Carousel from "react-bootstrap/Carousel";
import Carousel from "react-material-ui-carousel";
import { Link } from "@mui/material";

// import { Carousel } from "react-responsive-carousel";
const Card = (props) => {
  return (
    <div className="card">
      <a href={props.Link}>
        {/* <Link to={"/about/tt"}> */}
        <h2 className="card_head">{props.Head}</h2>
        <p className="card_para">{props.Para}</p>
        {/* </Link> */}
      </a>
    </div>
  );
};

export default function Section1() {
  return (
    <div className="section1">
      {/* <UncontrolledExample /> */}
      <Carousel className="carousel" NextIcon={true} PrevIcon={true}>
        <img src={Bgimg} className="section1_img" />
        <img src={Bgimg1} className="section1_img" />
        <img src={Bgimg2} className="section1_img" />
      </Carousel>
      <div className="card_box">
        {/* <a href="/about/tt"> */}
        <Card
          Link="/about/tt"
          Head="Register For Tennis Lessons"
          Para="Our experiences in-structure offer a variety of table tannis lessons for children and teens"
        />
        {/* </a> */}
        <Card
          Link="/about/yoga"
          Head="Register For Yoga Session"
          Para="Our experiences in-structure offer a variety of table tannis lessons for children and teens"
        />
        <Card
          Head="What Level Is My Child?"
          Para="Our experiences in-structure offer a variety of table tannis lessons for children and teens"
        />
        <Card
          Head="Franchise Opportu-nities"
          Para="Our experiences in-structure offer a variety of table tannis lessons for children and teens"
        />
      </div>
    </div>
  );
}
