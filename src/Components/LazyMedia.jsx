import { useState, useRef, useEffect } from "react";

/**
 * LazyMedia Component
 *
 * Efficiently loads images and videos only when they enter the viewport.
 * Prevents performance issues by not loading all media at once.
 *
 * @param {Object} props
 * @param {string} props.src - The media source URL
 * @param {string} [props.alt] - Alt text for images
 * @param {'image'|'video'} props.type - Type of media to display
 * @param {string} [props.className] - Additional CSS classes
 * @param {string} [props.key] - Unique key to force re-render on media change
 */
function LazyMedia({ src, alt, type, className }) {
  const [isVisible, setIsVisible] = useState(false);
  const videoRef = useRef(null);
  const containerRef = useRef(null);

  // Intersection Observer to detect when media enters viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 } // Trigger when 10% of element is visible
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Handle video source changes to ensure proper playback
  useEffect(() => {
    if (isVisible && type === "video" && videoRef.current) {
      const videoElement = videoRef.current;

      // Reload and play video when it becomes visible or src changes
      const loadAndPlay = async () => {
        try {
          videoElement.load(); // Force reload the video source
          await videoElement.play();
        } catch (error) {
          // Autoplay may be blocked, which is expected behavior
          console.debug("Autoplay prevented:", error);
        }
      };

      loadAndPlay();

      // Cleanup: pause video when component unmounts or src changes
      return () => {
        if (!videoElement.paused) {
          videoElement.pause();
        }
      };
    }
  }, [src, isVisible, type]); // Re-run when src or visibility changes

  // Render image media
  if (type === "image") {
    return (
      <div ref={containerRef} className={className}>
        {isVisible ? (
          <img
            src={src}
            alt={alt || "Image"}
            className="w-full h-full object-cover"
            loading="lazy" // Native lazy loading as fallback
          />
        ) : (
          // Loading placeholder for images
          <div className="w-full h-full bg-gray-200 animate-pulse" />
        )}
      </div>
    );
  }

  // Render video media
  if (type === "video") {
    return (
      <div ref={containerRef} className={className}>
        {isVisible ? (
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            src={src}
            preload="metadata" // Load only metadata initially
          />
        ) : (
          // Loading placeholder for videos
          <div className="w-full h-full bg-gray-200 animate-pulse flex items-center justify-center">
            <div className="w-8 h-8 border-2 border-gray-300 border-t-[color:var(--coffee)] rounded-full animate-spin"></div>
          </div>
        )}
      </div>
    );
  }

  // Return null for unsupported media types
  return null;
}

export default LazyMedia;
