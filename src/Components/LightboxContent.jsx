/*
 ------------------
 LightboxContent Component
 ------------------
 Renders media (image, video, audio) in the lightbox with loading states,
 error handling, and optional video autoplay.
 
 Features:
 - Loading spinner while media loads
 - Error fallback display
 - Video autoplay (muted) for better UX
 - Accessibility support
 - Browser fallback messages
 
 @param {Object} item - The media item to display
 @param {string} item.type - Media type ('image', 'video', 'audio')
 @param {string} item.src - Media source URL
 @param {string} [item.alt] - Alternative text for images
 @param {string} [item.title] - Title used as alt fallback
 @param {string} [item.poster] - Video thumbnail URL
*/

import { useState, useEffect } from "react";
import { FileText, Download } from "lucide-react"; // Add to imports

function LightboxContent({ item }) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // Handle media load completion
  const handleLoad = () => {
    setLoading(false);
    setError(false);
  };

  // Handle media loading errors
  const handleError = () => {
    setLoading(false);
    setError(true);
  };

  // Render loading spinner
  const renderLoadingState = () => (
    <div className="absolute inset-0 grid place-items-center bg-gray-100/50">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[color:var(--amber)]"></div>
    </div>
  );

  // Render error state
  const renderErrorState = () => (
    <div className="absolute inset-0 grid place-items-center bg-gray-100/80 p-4">
      <div className="text-center text-[color:var(--slate)]">
        <p className="font-medium">Unable to load media</p>
        <p className="text-sm mt-1">
          Please check the file URL or try again later
        </p>
      </div>
    </div>
  );

  const handleLoadStart = () => {
    setLoading(true);
    setError(false);
  };

  // Add preloading for next/previous images
  useEffect(() => {
    if (item?.type === "image") {
      const img = new Image();
      img.src = item.src;
    }
  }, [item]);

  // Render image if type is 'image'
  if (item.type === "image") {
    return (
      <div className="relative w-full max-h-[65vh] grid place-items-center">
        <img
          src={item.src}
          alt={item.alt || item.title}
          className="w-full max-h-[65vh] object-contain"
          onLoad={handleLoad}
          onError={handleError}
        />
        {loading && renderLoadingState()}
        {error && renderErrorState()}
      </div>
    );
  }

  // Render video if type is 'video'
  if (item.type === "video") {
    return (
      <div className="relative w-full max-h-[65vh] bg-black">
        <video
          key={item.src} // ← THIS FIXES THE SKIPPING ISSUE
          controls
          playsInline
          autoPlay
          muted
          preload="auto" // ← Change from "metadata" to "auto"
          poster={item.poster}
          className="w-full max-h-[65vh]"
          onLoadStart={handleLoadStart} // ← Add this
          onLoadedData={handleLoad}
          onError={handleError}
        >
          <source src={item.src} />
          Sorry, your browser doesn't support embedded videos.
        </video>
        {loading && renderLoadingState()}
        {error && renderErrorState()}
      </div>
    );
  }

  // Render audio if type is 'audio'
  if (item.type === "audio") {
    return (
      <div className="relative w-full p-6 grid place-items-center bg-[color:var(--sand)]">
        <audio
          controls
          preload="metadata"
          className="w-full max-w-md"
          onLoadedData={handleLoad}
          onError={handleError}
          onLoad={() => console.log("Audio loaded:", item.src)} // Debug
        >
          <source src={item.src} />
          Your browser doesn't support the audio element.
        </audio>
        <p className="sr-only">Audio player with controls</p>
        {loading && renderLoadingState()}
        {error && renderErrorState()}
      </div>
    );
  }

  // Render audio if type is 'audio'
  if (item.type === "audio") {
    return (
      <div className="relative w-full p-6 grid place-items-center bg-[color:var(--sand)]">
        <audio
          key={item.src} // ← THIS IS THE CRITICAL FIX
          controls
          preload="metadata"
          className="w-full max-w-md"
          onLoadStart={handleLoadStart}
          onLoadedData={handleLoad}
          onError={handleError}
        >
          <source src={item.src} />
          Your browser doesn't support the audio element.
        </audio>
        <p className="sr-only">Audio player with controls</p>
        {loading && renderLoadingState()}
        {error && renderErrorState()}
      </div>
    );
  }

  if (item.type === "pdf") {
    return (
      <div className="relative w-full h-[65vh] bg-white">
        <iframe
          src={item.src}
          className="w-full h-full border-0"
          title={`PDF Preview: ${item.title}`}
        />
        <div className="absolute bottom-4 right-4">
          <a
            href={item.src}
            download
            className="inline-flex items-center gap-2 bg-[color:var(--coffee)] text-[color:var(--sand)] px-4 py-2 rounded-lg hover:bg-[color:var(--coffee)]/90 transition-colors"
          >
            <Download className="w-4 h-4" />
            Download PDF
          </a>
        </div>
      </div>
    );
  }
  // Return null if media type is unsupported
  return null;
}

export default LightboxContent;
