import React from "react";
import Img1 from "./../../assets/sec2img1.png";
import Img2 from "./../../assets/sec2img2.png";

export default function Section2() {
  return (
    <div>
      <div className="Section2 Section2_phnview">
        <div className="box1">
          <div className="box1_text">
            <div className="box1_img box1_img_phnview">
              <img src={Img1} alt="" className="box1_img1" />
            </div>
            <div className="box1_heading">Importance of Tennis lessons</div>
            <div className="box1_para">
              We offer a variety of private and group lessons for childrens and
              teens. The lessons and terms courses include everything your kid
              needs to learn confidently.
            </div>
            <button className="box1_btn">Read More</button>
          </div>
        </div>
        <div className="box1">
          <div className="box1_img">
            <img src={Img1} alt="" className="box1_img1" />
          </div>
        </div>
        <div className="box1">
          <div className="box2_img">
            <img src={Img2} alt="" className="box1_img1" />
          </div>
          <div className="box2_text">
            <div className="box1_heading">Importance of Yoga lessons</div>
            <div className="box1_para">
              We offer a variety of private and group lessons for childrens and
              teens. The lessons and terms courses include everything your kid
              needs to learn confidently.
            </div>
            <div className="box1_btn">Read More</div>
          </div>
        </div>
      </div>
      <div className="Section2">
        <div className="box1">
          <div className="box1_text">
            <div className="box1_heading">Importance of Tennis lessons</div>
            <div className="box1_para">
              We offer a variety of private and group lessons for childrens and
              teens. The lessons and terms courses include everything your kid
              needs to learn confidently.
            </div>
            <button className="box1_btn">Read More</button>
          </div>
          <div className="box1_img">
            <img src={Img1} alt="" className="box1_img1" />
          </div>
        </div>

        <div className="box1">
          <div className="box2_img">
            <img src={Img2} alt="" className="box1_img1" />
          </div>
          <div className="box2_text">
            <div className="box1_heading">Importance of Yoga lessons</div>
            <div className="box1_para">
              We offer a variety of private and group lessons for childrens and
              teens. The lessons and terms courses include everything your kid
              needs to learn confidently.
            </div>
            <div className="box1_btn">Read More</div>
          </div>
        </div>
      </div>
    </div>
  );
}
