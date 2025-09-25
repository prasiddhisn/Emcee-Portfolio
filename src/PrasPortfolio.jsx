import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home } from "lucide-react";

import {
  COLORS,
  FONT_HEADLINE,
  FONT_BODY,
  MEDIA,
  SKILL_CATEGORIES,
  PAGES,
} from "./Constants/Constants.jsx";

// ---- COMPONENTS ----
import NavButton from "./Components/NavButton.jsx";
import SocialColumn from "./Components/SocialColumn.jsx";
import Hero from "./Components/Hero.jsx";
import ArrowPulse from "./Components/ArrowPulse.jsx";
import SkillsGrid from "./Components/SkillsGrid.jsx";
import LightboxContent from "./Components/LightboxContent.jsx";
import LBNavButton from "./Components/LBNavButton.jsx";
import SkillPage from "./Pages/Skills.jsx";
import AboutPage from "./Pages/About.jsx";
import ContactPage from "./Pages/Contact.jsx";
import SiteFooter from "./Components/Footer.jsx";
import NavBar from "./Components/Navbar.jsx";
import HomePage from "./Pages/Home.jsx";
import ProjectCard from "./Components/ProjectCard.jsx";
import LazyVideo from "./Components/LazyMedia.jsx";

/**
 * PRASIDDHI — MEDIA PORTFOLIO
 * ----------------------------
 * Single-page React app showcasing media portfolio.
 * TailwindCSS, framer-motion for animations, lucide-react for icons.
 * Accessible, responsive, SEO-friendly structure.
 *
 * HOW TO USE:
 * 1) Replace social links, images, and media URLs.
 * 2) Deploy on Netlify/Vercel/GitHub Pages.
 * 3) Optional: further component extraction for scalability.
 */

// Helper function to join Tailwind classes
const cx = (...classes) => classes.filter(Boolean).join(" ");

export default function PortfolioPrasiddhi() {
  // ------------------------------
  // State hooks
  // ------------------------------
  const [page, setPage] = useState(PAGES.HOME); // Current page
  const [activeSkill, setActiveSkill] = useState(null); // Currently selected skill
  const mainRef = useRef(null); // Reference to main scroll container
  const skillsRef = useRef(null); // Reference for skills section

  // ------------------------------
  // Effect: Smooth scroll to top when page or activeSkill changes
  // ------------------------------
  useEffect(() => {
    mainRef.current?.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]); // <-- ONLY [page] remains here

  // ------------------------------
  // Effect: Close skill modal on Escape key
  // ------------------------------
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape" && activeSkill) setActiveSkill(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [activeSkill]);

  // ------------------------------
  // Render
  // ------------------------------
  return (
    <div
      className="min-h-screen w-full bg-[color:var(--coffee)] flex flex-col"
      style={{
        // CSS variables for palette
        "--coffee": COLORS.coffee,
        "--sand": COLORS.sand,
        "--amber": COLORS.amber,
        "--slate": COLORS.slate,
        "--white": COLORS.white,
        fontFamily: FONT_BODY,
      }}
    >
      {/* ------------------------------
          Accessibility: Skip to main content link
      ------------------------------ */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 bg-[color:var(--white)] text-[color:var(--coffee)] px-3 py-2 rounded-lg shadow"
      >
        Skip to content
      </a>

      {/* ------------------------------
          Navigation Bar
      ------------------------------ */}
      <NavBar
        setPage={setPage}
        setActiveSkill={setActiveSkill}
        FONT_HEADLINE={FONT_HEADLINE}
      />

      {/* ------------------------------
          Main scrollable content
      ------------------------------ */}
      <main
        id="main"
        ref={mainRef}
        className="max-w-6xl mx-auto px-4 md:px-6 flex-grow"
      >
        <AnimatePresence mode="wait">
          {/* Home Page */}
          {page === PAGES.HOME && !activeSkill && (
            <motion.div
              key="home"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.4 }}
            >
              <HomePage
                setPage={setPage}
                onOpenSkill={setActiveSkill}
                skillsRef={skillsRef}
              />
            </motion.div>
          )}

          {/* Skill modal/page */}
          {activeSkill && (
            <SkillPage
              key={activeSkill.key}
              skill={activeSkill}
              onBack={() => {
                setActiveSkill(null);
                // Use a timeout to ensure the modal is gone before scrolling
                setTimeout(() => {
                  skillsRef.current?.scrollIntoView({
                    behavior: "smooth",
                    block: "start", // Ensures it aligns to the top of the section
                  });
                }, 50); // A short delay is often necessary
              }}
              setPage={setPage}
              setActiveSkill={setActiveSkill}
            />
          )}

          {/* About Page */}
          {page === PAGES.ABOUT && !activeSkill && (
            <AboutPage
              key="about"
              onBack={() => setPage(PAGES.HOME)} // send user back to Home
            />
          )}

          {/* Contact Page */}
          {page === PAGES.CONTACT && !activeSkill && (
            <ContactPage
              key="contact"
              onBack={() => setPage(PAGES.HOME)} // send user back to Home
            />
          )}
        </AnimatePresence>
      </main>

      {/* ------------------------------
          Footer
      ------------------------------ */}
      <SiteFooter setPage={setPage} />
    </div>
  );
}
