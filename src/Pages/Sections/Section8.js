import React from "react";

export default function Section8() {
  return (
    <div className="section8">
      <div className="section8-left">
        <h3 className="section8_head">Working Hours</h3>
        <div className="section8-list_box">
          <ul className="section8-list">
            <p className="section8_para">Tuesday</p>
            <p className="section8_para">5:00pm - 8:00pm</p>
          </ul>
          <ul className="section8-list">
            <p className="section8_para">Wednesday</p>
            <p className="section8_para">6:00pm - 8:30pm</p>
          </ul>
          <ul className="section8-list">
            <p className="section8_para">Thursday</p>
            <p className="section8_para">5:00pm - 8:00pm</p>
          </ul>
          <ul className="section8-list">
            <p className="section8_para">Friday</p>
            <p className="section8_para">5:00pm - 8:00pm</p>
          </ul>
          <ul className="section8-list">
            <p className="section8_para">Saturday</p>
            <p className="section8_para">5:00pm - 8:00pm</p>
          </ul>
          <ul className="section8-list">
            <p className="section8_para">Sunday</p>
            <p className="section8_para">9:00am - 11:30pm</p>
          </ul>
          <ul className="section8-list">
            <p className="section8_para">Monday</p>
            <p className="section8_para">Closed</p>
          </ul>
        </div>
      </div>
      <div className="section8-right">
        <h3 className="section8_head">Peak Hours</h3>
        <div className="section8-list_box">
          <ul className="section8-list">
            <p className="section8_para">In morning</p>
            <p className="section8_para">7:00am - 9:00am</p>
          </ul>
          <ul className="section8-list">
            <p className="section8_para">In evening</p>
            <p className="section8_para">6:00pm - 8:00pm</p>
          </ul>
        </div>
      </div>
    </div>
  );
}
