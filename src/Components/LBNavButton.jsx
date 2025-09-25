/*
 ------------------
 LBNavButton Component
 ------------------
 Renders a circular navigation button used inside the SkillPage.jsx lightbox to navigate between media items.
*/

function LBNavButton({ onClick, label, children }) {
  return (
    // Button element for lightbox navigation
    <button
      onClick={onClick} // triggers navigation action
      className="m-2 w-10 h-10 rounded-full bg-white/90 hover:bg-white grid place-items-center shadow focus:outline-none focus:ring-2 focus:ring-[color:var(--amber)]"
      aria-label={label} // accessibility label for screen readers
    >
      {children} {/* Icon or content inside button */}
    </button>
  );
}

// Export LBNavButton component
export default LBNavButton;
