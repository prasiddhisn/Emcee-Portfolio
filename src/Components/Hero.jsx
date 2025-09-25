/*
 ------------------
 Hero Component
 ------------------
 Renders the hero section on the homepage with intro text, portrait, social links, and scroll indicator.
*/

import { motion } from "framer-motion";
import SocialColumn from "./SocialColumn.jsx";
import ArrowPulse from "./ArrowPulse.jsx";
import { getMediaPath } from "../Constants/mediaPath";

function Hero({ setPage }) {
  return (
    // Main hero section with grid layout and full screen height
    <section className="relative grid md:grid-cols-[1fr_auto_80px] gap-6 items-center min-h-screen">
      {/* Left Section - Intro Text */}
      <div
        className="order-2 md:order-1 relative"
        style={{
          top: "-60px", // vertical adjustment
          left: "-100px", // horizontal adjustment
        }}
      >
        {/* Heading: Introduction */}
        <motion.h1
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-[#e0d9c4]"
          style={{
            fontFamily: "Libre Baskerville",
            fontWeight: "bold", // ← ADD THIS
            fontSize: "90px",
            lineHeight: "1.1",
            whiteSpace: "nowrap",
            letterSpacing: "0px",
            textAlign: "left",
            position: "relative",
            top: "0px",
            left: "10px",
          }}
        >
          Prasiddhi SN
        </motion.h1>

        {/* Paragraph: Description */}
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-[#e0d9c4] max-w-prose"
          style={{
            fontFamily: "Calibri, sans-serif",
            fontStyle: "italic", // ← ADD THIS
            fontWeight: "100", // ← Lighter weight (100-400 are light)
            fontSize: "26px",
            lineHeight: "1.6",
            letterSpacing: "0px",
            textAlign: "left",
            marginTop: "16px",
            position: "relative",
            top: "0px",
            left: "65px",
          }}
        >
          Emcee | Event Host | Public Speaker
        </motion.p>
      </div>

      {/* Middle Section - Portrait Photo */}
      <motion.figure
        className="order-1 md:order-2 justify-self-start"
        style={{
          width: "500px",
          height: "auto",
          position: "relative",
          left: "180px",
          top: "-50px",
        }}
        initial={{ scale: 0.98, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {/* Portrait Image */}
        <img
          src={getMediaPath("/Images/PrasiddhiImg_1.jpg")}
          alt="An Image of Prasiddhi"
          style={{
            width: "100%",
            height: "auto",
            objectFit: "contain",
          }}
        />
        <figcaption className="sr-only">
          A welcoming portrait photograph.
        </figcaption>
      </motion.figure>

      {/* Right Section - Social Column */}
      <div className="order-3 hidden md:flex md:justify-end">
        <SocialColumn />
      </div>

      {/* Scroll Indicator at bottom */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
        <ArrowPulse />
      </div>
    </section>
  );
}

// Export Hero component
export default Hero;
