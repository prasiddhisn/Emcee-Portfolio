// src/utils/mediaPath.js
export const getMediaPath = (filePath) =>
  import.meta.env.BASE_URL.replace(/\/$/, "") + filePath;
