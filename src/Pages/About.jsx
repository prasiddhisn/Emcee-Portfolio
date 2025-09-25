/*
 ------------------
 AboutPage Component
 ------------------
 Renders the "About Me" section with intro text, image, and highlights.
*/

import { motion } from "framer-motion";
import { ChevronLeft } from "lucide-react";
import { FONT_HEADLINE } from "../Constants/Constants.jsx";

function AboutPage({ onBack }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.35 }}
      className="pt-8 pb-14 px-6 relative"
    >
      {/* Back button */}
      <button
        onClick={onBack}
        className="absolute top-8 left-[-25px] p-2 hover:scale-110 transition focus:outline-none"
        aria-label="Back to home"
      >
        <ChevronLeft className="w-6 h-6 text-[#b5a281]" />
      </button>

      <div className="max-w-6xl mx-auto">
        {/* Section heading */}
        <h2
          className="text-2xl md:text-3xl text-[color:var(--sand)] mb-8"
          style={{ fontFamily: FONT_HEADLINE }}
        >
          About Me
        </h2>

        {/* Grid: Text + Image - More spacing and less stuffy */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-14 max-w-5xl mx-auto">
          {/* Text Content - Left Side */}
          <div className="flex-1 max-w-2xl">
            <div className="text-[color:var(--sand)] leading-relaxed space-y-7 text-lg">
              <p>
                Hi there! I'm Prasiddhi SN, a 20-year-old girl balancing life
                between Bangalore's buzz and my love for all things voice and
                media.
              </p>

              <p>
                Communication has always been my superpower—I'm drawn to the
                mic, whether it's emceeing an event, voicing a script, or
                bringing stories to life.
              </p>

              <p>
                At the heart of it, I’m ambitious, playful, and endlessly
                curious—exploring voice, stage, and media with a mix of passion
                and experimentation that keeps me learning and growing every
                day.
              </p>
              <p>
                When I'm off-stage, you'll find me immersed in a good book,
                writing poems, or singing a few tunes!
              </p>
            </div>
          </div>
          {/* Image - Right Side */}
          <div className="flex-1 max-w-md">
            <div className="w-[500px] h-[450px] rounded-2xl overflow-hidden">
              {" "}
              {/* Removed shadow, changed rounded-3xl to rounded-lg */}
              <img
                src="/Images/PrasiddhiImg_2.JPG"
                alt="An Image of Prasiddhi"
                className="w-full h-full object-cover object-center"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default AboutPage;
