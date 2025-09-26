/*
 ------------------
 NavBar Component
 ------------------
 Renders the top navigation bar of the website with Home, About, and Contact links.
 Located at the top of every page to navigate between main sections.
*/

import React from "react";
import NavButton from "../Components/NavButton.jsx";
import { Home } from "lucide-react";
import { PAGES } from "../Constants/Constants.jsx";
import { getMediaPath } from "../Constants/mediaPath";

export default function NavBar({ setPage, setActiveSkill, FONT_HEADLINE }) {
  return (
    <header style={{ backgroundColor: "#595451", color: "#e0d9c4" }}>
      {/* Changed nav to a flex container */}
      <nav className="flex justify-between items-center h-[100px] px-12">
        {/* Home button (left side) */}
        <button
          onClick={() => {
            setPage(PAGES.HOME);
            setActiveSkill?.(null);
          }}
          className="inline-flex items-center gap-2 tracking-wide bg-transparent border-none text-[color:var(--sand)]"
          aria-label="Go to Home"
        >
          <img
            src={getMediaPath("/Icons/icons8-home-32.png")}
            alt="Home"
            className="w-6 h-6"
          />
          <span></span>
        </button>

        {/* Container for the right-aligned buttons */}
        <div className="flex gap-8">
          {/* About Me button */}
          <NavButton
            label="About"
            onClick={() => {
              setActiveSkill(null);
              setPage(PAGES.ABOUT);
            }}
          />
        </div>
      </nav>
    </header>
  );
}
