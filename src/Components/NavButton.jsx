/*
 ------------------
 NavButton Component
 ------------------
 Renders a button with an icon and label for navigation purposes.
 Used in the NavBar for About, Contact, Home links, etc.
*/

function NavButton({ icon, label, onClick, style }) {
  // Button wrapper with click handler and custom style
  return (
    <button
      onClick={onClick} // handles navigation click
      style={style} // applies custom positioning or style
      className="flex items-center gap-2 bg-transparent border-none shadow-none focus:outline-none"
    >
      {icon} {/* Icon element (e.g., image or SVG) */}
      <span>{label}</span> {/* Text label for the button */}
    </button>
  );
}

export default NavButton;
