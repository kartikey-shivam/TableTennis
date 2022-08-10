import React from "react";
import Img1 from "./../../assets/sec6img.png";

export default function Section6() {
  return (
    <div>
      <div className="section6 section6_phnview">
        <div className="section6-text">
          <h1 className="section6_heading">Events</h1>
          <div className="section6-imgbox">
            <img src={Img1} className="section6-img" />
          </div>
          <div className="event_list">
            <ul>May Month League Tournament 2022</ul>
            <ul>June Month League Tournament 2022</ul>
            <ul>Inter colege League Tournament 2022</ul>
            <ul>District Level League Tournament 2022</ul>
            <ul>August Month League Tournament 2022</ul>
          </div>
        </div>
      </div>
      <div className="section6">
        <div className="section6-text">
          <h1 className="section6_heading">Events</h1>
          <div className="event_list">
            <ul>May Month League Tournament 2022</ul>
            <ul>June Month League Tournament 2022</ul>
            <ul>Inter colege League Tournament 2022</ul>
            <ul>District Level League Tournament 2022</ul>
            <ul>August Month League Tournament 2022</ul>
          </div>
        </div>
        <div className="section6-imgbox">
          <img src={Img1} className="section6-img" />
        </div>
      </div>
    </div>
  );
}
