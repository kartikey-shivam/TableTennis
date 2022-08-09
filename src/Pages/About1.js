import React from "react";
import Bgimg1 from "./../assets/about-img1.png";
export default function About() {
  return (
    <div className="about">
      <div className="about_header">
        <img src={Bgimg1} alt="" className="about_img" />
        <div className="about_header-text">
          <h1 className="about_heading">IMPORTANCE OF YOGA </h1>
          <h3 className="about_subhead">Reasons Why Everyone Must Do Yoga </h3>
        </div>
      </div>
      <div className="about-content">
        <h1 className="about-heading">About</h1>
        <p className="about-para">
          <span className="about-para_span">Y</span>
          oga as a lifestyle is that holistic way of living your life that can
          change the way you handle life significantly. Practicing yoga creates
          a deeper sense of knowing and enables to create a union with something
          higher than an individual’s consciousness.
        </p>
        <br />
        <p className="about-para">
          Yoga as a lifestyle is that holistic way of living your life that can
          change the way you handle life significantly. Practicing yoga creates
          a deeper sense of knowing and enables to create a union with something
          higher than an individual’s consciousness.
        </p>
        <br />
        <p className="about-para">
          It was internationally recognized by the United Nations General
          Assembly (UNGA) on December 11, 2014. Prime Minister Narendra Modi in
          his UN Address had suggested the date of June 21, as it is the longest
          day of the year. Yoga has its roots in India and was developed during
          the Indus-Sarasvati civilization in Northern India over 5000 years
          ago. The word ‘yoga’ was first mentioned in the oldest holy book, the
          Rig Veda.
        </p>
        <br />
        <p className="about-para">
          Adopting yoga as a lifestyle is like a tool that helps a person be in
          a blissful state of being. The people who practice and deepen their
          knowledge ofyoga easily become capable of dealing with almost anything
          life throws at them. They begin to realize that their will has power
          over anything in their lives.
        </p>
        <br />
        <p className="about-para">
          It builds discipline, self-discipline. Intimate understanding of your
          body – With gradual practice, you start listening to your body. You
          become aware of the resistance in certain muscles or asanas that come
          naturally to you. Understanding the teachings – Certain yoga postures
          take time and practice. And self practice gives you the best
          opportunity.
        </p>
        <br />
        <br />
        <div className="about-secondary">
          <br />
          <h2 className="about-secondary_head">
            Here are some of the common health benefits of practising yoga:
          </h2>
          <br />

          <li> Helps reduce stress</li>
          <li>Relieves anxiety</li>
          <li>Improves concentration levels</li>
          <li>Helps reduce inflammation</li>
          <li>Improves quality of life</li>
          <li>Could reduce chronic pain</li>
          <li>Promotes quality of sleep</li>
          <br />
          <p className="about-secondary_para">
            Yoga with its many health benefits changes you for the better into a
            fitter and happier person.
          </p>
        </div>
      </div>
    </div>
  );
}
