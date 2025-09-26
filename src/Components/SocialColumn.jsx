/*
 ------------------
 SocialColumn Component
 ------------------
 Displays a vertical column of social media links on the right side of the Hero section.
 Provides clickable icons for Instagram, LinkedIn, and Email.
*/

function SocialColumn() {
  const btn = "transition hover:scale-105"; // common button hover animation

  return (
    // Container for social icons, vertically centered and positioned to the right
    <div
      className="flex flex-col items-center gap-20 absolute"
      style={{
        top: "48%", // vertical positioning
        right: "-220px", // horizontal offset from the right
        transform: "translateY(-50%)", // centers container vertically
      }}
      aria-label="Social links"
    >
      {/* Instagram link */}
      <a
        className={btn}
        href="https://www.instagram.com/prasiddhi_sn/"
        target="_blank"
        rel="noreferrer"
        aria-label="Instagram"
      >
        <img
          src={getMediaPath("/Icons/Instagram_Icon.png")}
          alt="Instagram"
          className="w-10 h-10 object-contain"
        />
      </a>

      {/* LinkedIn link */}
      <a
        className={btn}
        href="https://www.linkedin.com/in/prasiddhisn/"
        target="_blank"
        rel="noreferrer"
        aria-label="LinkedIn"
      >
        <img
          src={getMediaPath("/Icons/Linkedin_Icon.png")}
          alt="LinkedIn"
          className="w-10 h-10 object-contain"
        />
      </a>

      {/* Email link */}
      <a
        className={btn}
        href="mailto:snprasiddhi2@gmail.com"
        aria-label="Send Email"
      >
        <img
          src={getMediaPath("/Icons/Email_Icon.png")}
          alt="E-Mail"
          className="w-10 h-10 object-contain"
        />
      </a>
    </div>
  );
}

export default SocialColumn;
