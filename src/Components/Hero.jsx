import { motion } from "framer-motion";
import SocialColumn from "./SocialColumn.jsx";
import ArrowPulse from "./ArrowPulse.jsx";
import { getMediaPath } from "../Constants/mediaPath";

function Hero({ setPage }) {
  return (
    <section className="relative grid md:grid-cols-[1fr_auto_80px] gap-6 items-center min-h-screen px-4 md:px-12">
      {/* Left Section - Intro Text */}
      <div className="order-2 md:order-1 relative md:top-0 md:left-0">
        {/* Heading: Introduction */}
        <motion.h1
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-[#e0d9c4] font-bold font-serif text-5xl sm:text-4xl md:text-[90px] leading-tight"
        >
          Prasiddhi SN
        </motion.h1>

        {/* Paragraph: Description */}
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-[#e0d9c4] max-w-prose italic font-light text-xl sm:text-lg md:text-2xl mt-4"
        >
          Emcee | Event Host | Public Speaker
        </motion.p>
      </div>

      {/* Middle Section - Portrait Photo */}
      <motion.figure
        className="order-1 md:order-2 justify-self-center md:justify-self-start w-64 sm:w-80 md:w-[500px]"
        initial={{ scale: 0.98, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <img
          src={getMediaPath("/Images/PrasiddhiImg_1.jpg")}
          alt="An Image of Prasiddhi"
          className="w-full h-auto object-contain"
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

export default Hero;
