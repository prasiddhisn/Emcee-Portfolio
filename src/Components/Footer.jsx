/*
 ------------------
 SiteFooter Component
 ------------------
 Renders the footer at the bottom of the website with copyright, text, and social links.
*/

function SiteFooter({ setPage }) {
  return (
    // Footer container with background, text color, and padding
    <footer
      className="mt-8"
      style={{
        backgroundColor: "#3a2e2a", // footer background color
        color: "#bfab88", // footer text color
        padding: "35px 30px", // footer spacing
      }}
    >
      {/* Flex container for left, middle, and right sections */}
      <div
        className="w-full flex flex-col md:flex-row items-center justify-between gap-6 px-12"
        style={{ textAlign: "center" }} // center text in middle section
      >
        {/* Left Section - copyright text */}
        <p style={{ fontSize: "13px" }}>© Prasiddhi SN 2025</p>

        {/* Middle Section - custom tagline */}
        <p style={{ fontSize: "15px", fontWeight: "500" }}>
          Built with ❤️ | Exploring Voice, Stage & Media
        </p>

        {/* Right Section - social icons with links */}
        <div className="flex gap-4">
          <a
            href="https://www.instagram.com/prasiddhi_sn/"
            aria-label="Instagram"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="/Icons/Instagram_Icon.png"
              alt="Instagram"
              className="w-6 h-6 object-contain"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/prasiddhisn/"
            aria-label="LinkedIn"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="/Icons/Linkedin_Icon.png"
              alt="LinkedIn"
              className="w-6 h-6 object-contain"
            />
          </a>
          <a href="mailto:snprasiddhi2@gmail.com" aria-label="Email">
            <img
              src="/Icons/Email_Icon.png"
              alt="E-Mail"
              className="w-6 h-6 object-contain"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}

// Export SiteFooter component
export default SiteFooter;
