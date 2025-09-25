/*
 ------------------
 MediaCard Component (Updated for Gallery Navigation)
 ------------------
 Renders a clickable media item with navigation for multiple items.
*/

/*
import { useState } from "react";
import { ChevronLeft, ChevronRight, Film, AudioLines } from "lucide-react";
import { FONT_HEADLINE } from "../Constants/Constants.jsx";

function MediaCard({ item, onOpen, allItems, currentIndex }) {
  const [currentItemIndex, setCurrentItemIndex] = useState(currentIndex);
  const currentItem = allItems[currentItemIndex];

  const nextItem = () => {
    setCurrentItemIndex((prev) => (prev + 1) % allItems.length);
  };

  const prevItem = () => {
    setCurrentItemIndex(
      (prev) => (prev - 1 + allItems.length) % allItems.length
    );
  };

  return (
    <div className="group rounded-2xl overflow-hidden bg-white border border-[color:var(--coffee)]/15 hover:shadow-md relative">
      {/* Navigation Arrows (only show if multiple items) 
      {allItems.length > 1 && (
        <>
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevItem();
            }}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
            aria-label="Previous item"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              nextItem();
            }}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
            aria-label="Next item"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </>
      )}

      {/* Media display 
      <button
        onClick={() => onOpen(currentItemIndex)}
        className="w-full focus:outline-none"
        aria-label={`Open ${currentItem.title}`}
      >
        {currentItem.type === "image" && (
          <img
            src={currentItem.src}
            alt={currentItem.alt || currentItem.title}
            className="w-full h-48 object-cover"
          />
        )}

        {currentItem.type === "video" && (
          <div className="w-full h-48 bg-black/5 grid place-items-center">
            {currentItem.poster ? (
              <img
                src={currentItem.poster}
                alt={currentItem.title}
                className="w-full h-48 object-cover"
              />
            ) : (
              <Film className="w-10 h-10" aria-hidden />
            )}
          </div>
        )}

        {currentItem.type === "audio" && (
          <div className="w-full h-48 grid place-items-center bg-[color:var(--sand)]">
            <AudioLines className="w-10 h-10" aria-hidden />
          </div>
        )}
      </button>

      {/* Item title and description 
      <div className="p-3 text-left">
        <h4
          className="font-semibold text-[color:var(--coffee)]"
          style={{ fontFamily: FONT_HEADLINE }}
        >
          {currentItem.title}
        </h4>
        <p className="text-sm text-[color:var(--slate)] mt-1">
          {currentItem.description}
        </p>
        {/* Item counter 
        {allItems.length > 1 && (
          <p className="text-xs text-gray-500 mt-2">
            {currentItemIndex + 1} of {allItems.length}
          </p>
        )}
      </div>
    </div>
  );
}

export default MediaCard;

*/
