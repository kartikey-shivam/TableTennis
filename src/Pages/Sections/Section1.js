import React from "react";
import Bgimg from "./../../assets/bgimg1.png";
import Carousel from "react-bootstrap/Carousel";
const Card = (props) => {
  return (
    <div className="card">
      <h2 className="card_head">{props.Head}</h2>
      <p className="card_para">{props.Para}</p>
    </div>
  );
};

// function UncontrolledExample() {
//   return (
//     <Carousel>
//       <Carousel.Item>
//         <img className="d-block w-100" src={Bgimg} alt="First slide" />
//       </Carousel.Item>
//       <Carousel.Item>
//         <img className="d-block w-100" src={Bgimg} alt="Second slide" />
//       </Carousel.Item>
//       <Carousel.Item>
//         <img className="d-block w-100" src={Bgimg} alt="Third slide" />
//       </Carousel.Item>
//     </Carousel>
//   );
// }

export default function Section1() {
  return (
    <div className="section1">
      <img src={Bgimg} className="section1_img" />
      {/* <UncontrolledExample /> */}
      <div className="card_box">
        <Card
          Head="Register For Tennis Lessons"
          Para="Our experiences in-structure offer a variety of table tannis lessons for children and teens"
        />
        <Card
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
