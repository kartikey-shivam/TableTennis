import React from "react";
import Navbar from "../Components/Navbar.js";
import Section2 from "./Sections/Section2.js";
import Section3 from "./Sections/Section3.js";
import Section4 from "./Sections/Section4.js";
export default function Home() {
  return (
    <div>
      <Navbar />
      <Section2 />
      <Section3 />
      <Section4 />
    </div>
  );
}
