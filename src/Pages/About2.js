import React from "react";
import Bgimg1 from "./../assets/about-img1.png";
export default function About() {
  return (
    <div className="about">
      <div className="about_header">
        <img src={Bgimg1} alt="" className="about_img" />
        <div className="about_header-text">
          <h1 className="about_heading">IMPORTANCE OF TABLE TENNIS </h1>
          <h3 className="about_subhead">Know More about Table tennis </h3>
        </div>
      </div>
      <div className="about-content">
        <h1 className="about-heading">About</h1>
        <p className="about-para">
          <span className="about-para_span">T</span>
          able tennis, also called (trademark) Ping-Pong, ball game similar in
          principle to lawn tennis and played on a flat table divided into two
          equal courts by a net fixed across its width at the middle. The object
          is to hit the ball so that it goes over the net and bounces on the
          opponent’s half of the table in such a way that the opponent cannot
          reach it or return it correctly.
        </p>
        <br />
        <p className="about-para">
          A match consists of the best of any odd number of games, each game
          being won by the player or team who first reaches 11 points or who,
          after 10 points each, gains a two-point lead.
        </p>
        <br />
        <p className="about-para">
          Many healthcare specialists note that table tennis helps to strengthen
          the cardiovascular system and brings pressure back to normal. They
          recommend this sport as prophylaxis for heart attacks and strokes.
          Table tennis is referred to as aerobic exercise, which increases blood
          circulation, has a positive effect on the work of the heart, and
          increases the body’s endurance.
        </p>
        <br />
        <p className="about-para">
          Table tennis is not only a great workout for the muscles of the body
          but also a great workout for the eyes. Constant concentration on the
          ball, which is moving away, approaching, then slowing down, then
          accelerating, helps to relieve stress and fatigue, as well as maintain
          excellent vision.
        </p>
        <br />
        <p className="about-para">
          Playing table tennis regularly helps to strengthen the muscles in the
          legs, arms, back, and abs. Also, playing table tennis uses the various
          joints of the arm, legs, and torso. As a result, the joints become
          more flexible, which allows you to maintain physical activity until
          old age.
        </p>
        <br />
        <br />
        <div className="about-secondary">
          <br />
          <h2 className="about-secondary_head">
            Here are some of the common health benefits of Table Tennis:
          </h2>
          <br />

          <li> Playing improves hand-eye coordination</li>
          <li>Develops mental acuity</li>
          <li>Improves concentration levels</li>
          <li>It’s easy on the joints</li>
          <li>Improves quality of life</li>
          <li>Stimulates various different parts of the brain</li>
          <li>Improves Balnce</li>
          <br />
          <p className="about-secondary_para">
            Table tennis with its many health benefits changes you for the
            better into a fitter and happier person.
          </p>
        </div>
      </div>
    </div>
  );
}
