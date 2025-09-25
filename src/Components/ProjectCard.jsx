/*
 ------------------
 ProjectCard Component
 ------------------
 Renders a project with multiple media items and navigation arrows.
*/

import { useState } from "react";
import { ChevronLeft, ChevronRight, Film, AudioLines } from "lucide-react";
import { FONT_HEADLINE } from "../Constants/Constants.jsx";
import LazyMedia from "./LazyMedia.jsx";
import { FileText, Download } from "lucide-react"; // Add to imports

function ProjectCard({ project, onOpen, projectIndex }) {
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
  const currentMedia = project.media[currentMediaIndex];

  const nextMedia = () => {
    setCurrentMediaIndex((prev) => (prev + 1) % project.media.length);
  };

  const prevMedia = () => {
    setCurrentMediaIndex(
      (prev) => (prev - 1 + project.media.length) % project.media.length
    );
  };

  return (
    <div className="group rounded-2xl overflow-hidden bg-[color:var(--sand)] border border-[#bfab88]/15 hover:shadow-md relative">
      {/* Navigation Arrows (only show if multiple media) */}
      {project.media.length > 1 && (
        <>
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevMedia();
            }}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
            aria-label="Previous media"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              nextMedia();
            }}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
            aria-label="Next media"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </>
      )}

      {/* Media display */}
      <button
        onClick={() => onOpen(project.media, currentMediaIndex, projectIndex)}
        className="w-full focus:outline-none"
        aria-label={`Open ${project.title}`}
      >
        {currentMedia.type === "image" && (
          <LazyMedia
            type="image"
            src={currentMedia.src}
            alt={currentMedia.alt || project.title}
            className="w-full h-48"
          />
        )}

        {currentMedia.type === "video" && (
          <LazyMedia
            key={`${projectIndex}-${currentMediaIndex}-${currentMedia.src}`} // ← UNIQUE KEY
            type="video"
            src={currentMedia.src}
            className="w-full h-48"
          />
        )}
        {currentMedia.type === "audio" && (
          <div className="w-full h-32 grid place-items-center bg-[color:var(--sand)] group/audio border-b border-[color:var(--coffee)]">
            <div className="text-center">
              <AudioLines className="w-11 h-11 text-[color:var(--coffee)] mx-auto mb-2 transition-all duration-300 group-hover/audio:translate-y-[-5px] group-hover/audio:text-[color:var(--coffee)]" />
            </div>
          </div>
        )}
        {currentMedia.type === "pdf" || currentMedia.type === "doc" ? (
          <div className="w-full h-48 grid place-items-center bg-gradient-to-br from-[color:var(--sand)] to-[color:var(--amber)]/20 border-b border-[color:var(--coffee)] group/file">
            <div className="text-center">
              <FileText className="w-12 h-12 text-[color:var(--coffee)] mx-auto mb-2 transition-all duration-300 group-hover/file:translate-y-[-5px] group-hover/file:text-[color:var(--coffee)]" />
            </div>
          </div>
        ) : null}
      </button>

      {/* Project title and description */}
      <div className="p-3">
        <h4
          className="font-semibold text-[color:var(--coffee)]"
          style={{ fontFamily: FONT_HEADLINE }}
        >
          {project.title}
        </h4>
        <p className="text-sm text-[color:var(--coffee)] mt-1">
          {project.description}
        </p>
        {/* Media counter */}
        {project.media.length > 1 && (
          <p className="text-xs text-[color:var(--slate)] mt-2">
            {currentMediaIndex + 1} of {project.media.length}
          </p>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
