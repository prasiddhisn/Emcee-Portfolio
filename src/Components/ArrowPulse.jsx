/*
 ------------------
 ArrowPulse Component
 ------------------
 Renders a down arrow with optional bounce and text, used as a scroll indicator. Located in the hero section.
*/

import { ArrowDown } from "lucide-react";

function ArrowPulse({
  top = "auto", // vertical position
  left = "50%", // horizontal position
  bottom = "85px", // alternative vertical position
  right = "auto", // optional horizontal position
  size = "20px", // arrow size
  color = "#e0d9c4", // arrow & text color
  bounce = true, // enable/disable bounce animation
  text = "", // optional label below arrow
  fontSize = "12px", // text font size
  fontFamily = "sans-serif", // text font family
}) {
  return (
    // Wrapper div for arrow and text
    <div
      style={{
        position: "absolute", // manual positioning
        top,
        left,
        bottom,
        right,
        transform: left !== "auto" ? "translateX(-50%)" : "none", // center horizontally if left set
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        color,
      }}
      aria-hidden
    >
      {/* Down arrow icon */}
      <ArrowDown
        style={{
          width: size,
          height: size,
          animation: bounce ? "gentlePulse 2s ease-in-out infinite" : "none",
          // Notice the slower speed (2s) and smoother easing (ease-in-out)
        }}
      />

      {/* Optional text below arrow */}
      {text && (
        <span
          style={{
            marginTop: "4px",
            fontSize,
            fontFamily,
            color,
          }}
        >
          {text}
        </span>
      )}
    </div>
  );
}

// Export ArrowPulse component
export default ArrowPulse;
