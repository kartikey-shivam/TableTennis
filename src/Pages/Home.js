import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import Navbar from "../Components/Navbar.js";
import About1 from "./About1";
import About2 from "./About2";

import ContactUs from "./ContactUs.js";
import Section1 from "./Sections/Section1.js";
import Section2 from "./Sections/Section2.js";
import Section3 from "./Sections/Section3.js";
import Section4 from "./Sections/Section4.js";
import Section5 from "./Sections/Section5.js";
import Section6 from "./Sections/Section6.js";
import Section7 from "./Sections/Section7.js";
import Section8 from "./Sections/Section8.js";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
      <ContactUs />
      <Routes>
        <Route path="/about/tt" exact element={<About1 />} />
        <Route path="/about/yoga" exact element={<About2 />} />
      </Routes>
      <footer className="footer">
        Tabletennis 2022. All Rights Reserved. Privacy Policy.
      </footer>
    </div>
  );
}
