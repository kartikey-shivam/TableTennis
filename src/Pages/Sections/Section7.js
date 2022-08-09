import React from "react";
import Usr from "./../../assets/usr.png";
import Usr2 from "./../../assets/usr2.png";
import Usr4 from "./../../assets/usr4.png";
const UserCard = (props) => {
  return (
    <div className="userCard">
      <div className="profilePhoto-box">
        <img src={props.Img} className="profilePhoto" />
      </div>
      <p className="userCard-para">{props.Para}</p>
      <h2 className="userCard-name">{props.Name}</h2>
    </div>
  );
};
export default function Section7() {
  return (
    <div className="section7">
      <h1 className="section7_heading">Testimonials</h1>
      <div className="section7_card">
        <UserCard
          Img={Usr}
          Name="Sumit Bedi"
          Para="Been playing since December 2021, they have the best tables and enthusiastic ambience 
Would recommend you to play there once and you’ll notice the change"
        />
        <UserCard
          Img={Usr2}
          Name="Sourabh Grover"
          Para="All credit goes for this academy is to Mr. Pulkit who is the main coach of this academy.
This guy take your game to next level"
        />
        <UserCard
          Img={Usr}
          Name="Ravinder Singh"
          Para="The academy is very good and there are so many hard working students.  There are so many types of training like multiball, drills, fitness, matches to open us for the big tournament ."
        />
        <UserCard
          Img={Usr4}
          Name="Reshma Nair"
          Para="The overall experience is commendable. Pulkit sir as a coach has good knowledge and vast experience about the game."
        />
      </div>
    </div>
  );
}
