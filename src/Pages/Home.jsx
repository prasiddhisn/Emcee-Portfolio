/*
 ------------------
 HomePage Component
 ------------------
 This component renders the main homepage content for the portfolio.
 It includes: the Hero section and the SkillsGrid section.
*/

import React from "react";
import Hero from "../Components/Hero.jsx";
import SkillsGrid from "../Components/SkillsGrid.jsx";

/* Props:
 - setPage: function to navigate between pages (Home, About, Contact)
 - onOpenSkill: function to open a skill modal from SkillsGrid
 - skillsRef: forwarded ref to scroll back to skills section
*/
export default function HomePage({ setPage, onOpenSkill, skillsRef }) {
  return (
    <>
      {/* Hero Section: Intro text, portrait, and social column */}
      <section id="hero">
        <Hero setPage={setPage} />
      </section>

      {/* Skills Grid Section: displays skills and handles skill selection */}
      <section id="skills" ref={skillsRef}>
        <SkillsGrid onOpenSkill={onOpenSkill} />
      </section>
    </>
  );
}
