import React from "react";
import Navbar from "../Components/Navbar.js";

import ContactUs from "./ContactUs.js";
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
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
      <ContactUs />
      <footer className="footer">
        Tabletennis 2022. All Rights Reserved. Privacy Policy.
      </footer>
    </div>
  );
}
