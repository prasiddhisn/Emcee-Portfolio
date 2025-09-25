/*
 ------------------
 SkillPage Component
 ------------------
 Displays a skill with description, media grid, and lightbox preview.
*/

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import LightboxContent from "../Components/LightboxContent.jsx";
import { FONT_HEADLINE, MEDIA } from "../Constants/Constants.jsx";
import ProjectCard from "../Components/ProjectCard.jsx";

function SkillPage({ skill, onBack, setPage, setActiveSkill }) {
  const items = MEDIA[skill.mediaKey] || [];
  const [lightboxState, setLightboxState] = useState(null); // { projectIndex, mediaIndex }

  // Keyboard navigation for lightbox
  /* useEffect(() => {
    const handler = (e) => {
      if (lightboxState == null) return;
      if (e.key === "ArrowRight") {
        const nextIndex =
          (lightboxState.mediaIndex + 1) %
          items[lightboxState.projectIndex].media.length;
        setLightboxState({ ...lightboxState, mediaIndex: nextIndex });
      }
      if (e.key === "ArrowLeft") {
        const prevIndex =
          (lightboxState.mediaIndex -
            1 +
            items[lightboxState.projectIndex].media.length) %
          items[lightboxState.projectIndex].media.length;
        setLightboxState({ ...lightboxState, mediaIndex: prevIndex });
      }
      if (e.key === "Escape") setLightboxState(null);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightboxState, items]);
*/

  // Get current lightbox item
  const currentLightboxItem = lightboxState
    ? items[lightboxState.projectIndex]?.media[lightboxState.mediaIndex]
    : null;

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
        aria-label="Back to skills"
      >
        <ChevronLeft className="w-6 h-6 text-[#b5a281]" />
      </button>

      {/* Content wrapper */}
      <div className="max-w-6xl mx-auto">
        <h2
          className="text-2xl md:text-3xl text-[color:var(--sand)] mb-4"
          style={{ fontFamily: FONT_HEADLINE }}
        >
          {skill.label}
        </h2>
        <p className="text-[color:var(--sand)] leading-relaxed">
          {skill.desc} Here, you'll find samples of my work as I continue to
          learn and grow.
        </p>

        {/* Media grid for skill */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((project, projectIndex) => (
            <ProjectCard
              key={projectIndex}
              project={project}
              onOpen={(mediaArray, mediaIndex) => {
                // Store both project index and media index
                setLightboxState({ projectIndex, mediaIndex });
              }}
            />
          ))}
        </div>
      </div>

      {/* Lightbox modal */}
      <AnimatePresence>
        {lightboxState && currentLightboxItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 grid place-items-center p-4"
            role="dialog"
            aria-modal="true"
            aria-label="Media preview"
          >
            <div className="relative w-full max-w-4xl max-h-[85vh] bg-[color:var(--coffee)]  rounded-2xl overflow-hidden">
              {/* Close lightbox */}
              <button
                onClick={() => setLightboxState(null)}
                className="absolute top-3 right-3 z-10 w-10 h-10 rounded-full bg-white/90 hover:bg-white grid place-items-center shadow focus:outline-none focus:ring-2 focus:ring-[color:var(--amber)]"
                aria-label="Close preview"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Lightbox content */}
              <div
                className="relative bg-black/5"
                key={`lightbox-${lightboxState.projectIndex}-${lightboxState.mediaIndex}`}
              >
                <LightboxContent item={currentLightboxItem} />

                {/* Navigation only show if multiple media in this project */}
                {items[lightboxState.projectIndex]?.media.length > 1 && (
                  <>
                    {/* Previous button */}
                    <div className="absolute inset-y-0 left-0 flex items-center">
                      <button
                        onClick={() => {
                          setTimeout(() => {
                            // ← ADD setTimeout
                            const prevIndex =
                              (lightboxState.mediaIndex -
                                1 +
                                items[lightboxState.projectIndex].media
                                  .length) %
                              items[lightboxState.projectIndex].media.length;
                            setLightboxState({
                              ...lightboxState,
                              mediaIndex: prevIndex,
                            });
                          }, 100); // 100ms delay
                        }}
                        className="p-2 bg-white/80 rounded-full m-2 hover:bg-white transition-opacity"
                        aria-label="Previous media"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                    </div>
                    {/* Next button */}
                    <div className="absolute inset-y-0 right-0 flex items-center">
                      <button
                        onClick={() => {
                          setTimeout(() => {
                            // ← ADD setTimeout
                            const nextIndex =
                              (lightboxState.mediaIndex + 1) %
                              items[lightboxState.projectIndex].media.length;
                            setLightboxState({
                              ...lightboxState,
                              mediaIndex: nextIndex,
                            });
                          }, 100); // 100ms delay
                        }}
                        className="p-2 bg-white/80 rounded-full m-2 hover:bg-white transition-opacity"
                        aria-label="Next media"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </div>
                  </>
                )}
              </div>

              {/* Lightbox description */}
              <div className="p-4">
                <h3
                  className="font-semibold text-[color:var(--sand)]"
                  style={{ fontFamily: FONT_HEADLINE }}
                >
                  {currentLightboxItem.title ||
                    items[lightboxState.projectIndex]?.title}
                </h3>
                <p className="text-sm text-[color:var(--sand)] mt-1">
                  {currentLightboxItem.description ||
                    items[lightboxState.projectIndex]?.description}
                </p>
                {/* Media counter */}
                {items[lightboxState.projectIndex]?.media.length > 1 && (
                  <p className="text-xs text-[#bfab88] mt-2">
                    {lightboxState.mediaIndex + 1} of{" "}
                    {items[lightboxState.projectIndex].media.length}
                  </p>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}

export default SkillPage;
