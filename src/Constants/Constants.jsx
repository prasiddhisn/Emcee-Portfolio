import { Mic, AudioLines, Camera, PenLine } from "lucide-react";

// ---- THEME COLORS ----
export const COLORS = {
  coffee: "#3a2e2a", // primary dark
  sand: "#e0d9c4", // light bg
  amber: "#d8c199", // accents
  slate: "#595451", // neutral text
  white: "#ffffff", // white
};

// ---- FONTS ----
export const FONT_HEADLINE =
  "Georgia, Palatino Linotype,Cambria,Constantia,'Times New Roman', Times, serif";
export const FONT_BODY =
  "'Segoe UI', Candara,Calibri,Optima, Arial, sans-serif";
// ---- MEDIA LIBRARY ----
// All media now follows consistent nested structure with 'media' arrays
export const MEDIA = {
  voiceDemos: [
    {
      title: "Emceeing",
      description:
        "Confident and charismatic—making every event lively and unforgettable.",
      media: [
        {
          type: "audio",
          title: "Emcee Demo",
          description:
            "Sample script performed to bring energy, warmth, and audience connection to life.",
          src: "/Audio/Emcee Demo.mp3",
        },
      ],
    },
    {
      title: "Voice Overs",
      description:
        "Warm and genuine—my voice connects effortlessly with every audience.",
      media: [
        {
          type: "audio",
          title: "Windstar Holidays",
          description:
            "Voiceover used in promotional Instagram content for Windstar Holidays.",
          src: "/Audio/Windstar Holidays.mp3",
        },
      ],
    },
    {
      title: "Narration",
      description: "Calm, clear, and immersive—bringing every story to life.",
      media: [
        {
          type: "audio",
          title: "Night Sky - Sample Narration",
          description:
            "Narration demo highlighting range, articulation, and expression.",
          src: "/Audio/Night Sky.m4a",
        },
        {
          type: "audio",
          title: "Soft Sunrise",
          description:
            "Narration demo highlighting range, articulation, and expression.",
          src: "/Audio/Soft Sunrise.m4a",
        },
        {
          type: "audio",
          title: "Quiet Moments",
          description:
            "Narration demo highlighting range, articulation, and expression.",
          src: "/Audio/Quiet Moments.mp3",
        },
      ],
    },
  ],

  singing: [
    {
      title: "I See the Light",
      description: "by Mandy Moore & Zachary Levi",
      media: [
        {
          type: "audio",
          title: "I See the Light (Cover)",
          description:
            "A heartfelt acoustic cover, performed over karaoke accompaniment.",
          src: "/Audio/I See the Light.mp3",
        },
      ],
    },
    {
      title: "How Far I'll Go",
      description: "by Auliʻi Cravalho",
      media: [
        {
          type: "audio",
          title: "How Far I'll Go (Cover)",
          description:
            "A heartfelt acoustic cover, performed over karaoke accompaniment.",
          src: "/Audio/How Far Ill Go.mp3",
        },
      ],
    },
    {
      title: "Love Story",
      description: "by Taylor Swift",
      media: [
        {
          type: "audio",
          title: "Love Story (Cover)",
          description:
            "A heartfelt acoustic cover, performed over karaoke accompaniment.",
          src: "/Audio/Love Story.mp3",
        },
      ],
    },
    {
      title: "Yellow",
      description: "by Coldplay",
      media: [
        {
          type: "audio",
          title: "Yellow (Cover)",
          description:
            "A soft acoustic cover, performed over karaoke accompaniment.",
          src: "/Audio/Yellow.m4a",
        },
      ],
    },
    {
      title: "Piece by Piece",
      description: "by Kelly Clarkson",
      media: [
        {
          type: "audio",
          title: "Piece by Piece (Cover)",
          description:
            "A heartfelt acoustic cover, performed over karaoke accompaniment.",
          src: "/Audio/Piece by Piece.mp3",
        },
      ],
    },
    {
      title: "Umbrella",
      description: "by Rihanna",
      media: [
        {
          type: "audio",
          title: "Umbrella (Cover)",
          description:
            "A heartfelt acoustic cover, performed over karaoke accompaniment.",
          src: "/Audio/Umbrella.m4a",
        },
      ],
    },
    {
      title: "Somewhere Only We Know",
      description: "by Keane",
      media: [
        {
          type: "audio",
          title: "Somewhere Only We Know (Cover)",
          description:
            "A soft acoustic cover, performed over karaoke accompaniment.",
          src: "/Audio/Somewhere Only We Know.m4a",
        },
      ],
    },
  ],
  oncamTalent: [
    {
      title: "Coffee or Chai?",
      description: "Promotional content created for PlayStation Radio House",
      media: [
        {
          type: "video",
          description: "Filmed and produced by Storie Weavers.",
          src: "/Videos/PS5vid_1.mp4",
          alt: "Promotional content video",
        },
      ],
    },
    {
      title: "Are you still waiting?",
      description: "Promotional content created for PlayStation Radio House.",
      media: [
        {
          type: "video",
          description: "Filmed and produced by Storie Weavers",
          src: "/Videos/PS5vid_2.mp4",
          alt: "Promotional content video",
        },
      ],
    },
    {
      title: "It's time..",
      description: "Promotional content created for PlayStation Radio House.",
      media: [
        {
          type: "video",
          description: "Filmed and produced by Storie Weavers",
          src: "/Videos/PS5vid_3.mp4",
          alt: "Promotional content video",
        },
      ],
    },
  ],

  emceeing: [
    {
      title: "Inauguration Ceremony of Xactitude 2025",
      description: "Introduced the Chief Guest and solo-emceed a guest session",
      media: [
        {
          type: "image",
          src: "/Images/XactitudeImg_1.JPG",
          alt: "Xactitude'25 Image",
        },

        {
          type: "image",
          src: "/Images/XactitudeImg_2.JPG",
          alt: "Xactitude'25 Image",
        },

        {
          type: "image",
          src: "/Images/XactitudeImg_3.JPG",
          alt: "Xactitude'25 Image",
        },
      ],
    },
    {
      title: "Valedictory Ceremony of Synchronize 2024",
      description:
        "Co-led the ceremony with a warm, professional presence, keeping the audience engaged.",
      media: [
        {
          type: "image",
          src: "/Images/SynchronizeImg_1.JPG",
          alt: "Valedictory event image",
        },
        {
          type: "image",
          src: "/Images/SynchronizeImg_2.jpg",
          alt: "Valedictory event image",
        },
      ],
    },
    {
      title: "Grand Slam Competition: MILT Alumni Meeting 2023",
      description:
        "Co-hosted the meeting, keeping the atmosphere fun, lively and energetic",
      media: [
        {
          type: "image",
          src: "/Images/MILTImg_1.jpg",
          alt: "Alumni meeting image",
        },
        {
          type: "video",
          src: "/Videos/MILTVid_1.mp4",
          alt: "Alumni meeting image",
        },
        {
          type: "video",
          src: "/Videos/MILTVid_2.mp4",
          alt: "Alumni meeting image",
        },
        {
          type: "image",
          src: "/Images/MILTImg_2.jpg",
          alt: "Alumni meeting image",
        },
      ],
    },
    {
      title: "Bicentenary of the Birth of the Báb 2019",
      description:
        "Served as the lead emcee bringing a warm, welcoming presence to the celebration.",
      media: [
        {
          type: "image",
          src: "/Images/BahaiImg_1.jpg",
          alt: "Bicentenary event image",
        },
        {
          type: "video",
          src: "/Videos/Bahaivid_1.mp4",
          alt: "Bicentenary event image",
        },
        {
          type: "video",
          src: "/Videos/Bahaivid_2.mp4",
          alt: "Bicentenary event image",
        },

        {
          type: "image",
          src: "/Images/BahaiImg_3.JPG",
          alt: "Bicentenary event image",
        },
      ],
    },
  ],
  eventHosting: [
    {
      title: "Pranic Singles Meet 2025",
      description:
        "Co-hosted the meet, guiding activities and conversations while creating a warm, inviting space for participants to connect.",
      media: [
        {
          type: "image",
          src: "/Images/SinglesImg_1.jpg",
          alt: "Singles Meet image",
        },

        {
          type: "video",
          src: "/Videos/SinglesVid_1.mp4",
          alt: "Singles Meet image",
        },
        {
          type: "video",
          src: "/Videos/SinglesVid_2.mp4",
          alt: "Singles Meet image",
        },
        {
          type: "image",
          src: "/Images/SinglesImg_2.jpg",
          alt: "Singles Meet image",
        },
      ],
    },
  ],
  publicSpeaking: [
    {
      title: "HR Feedback - MILT National Level Finalist",
      description:
        "Bringing confidence and energy to the stage at the BreakFree'23 convention, Kolkata.",
      media: [
        {
          type: "image",
          src: "/Images/HRimg_1.JPG",
          alt: "HR Feedback image",
        },
        {
          type: "video",
          src: "/Videos/HRvid_1.mp4",
          alt: "HR Feedback image",
        },
        {
          type: "image",
          src: "/Images/HRimg_2.JPG",
          alt: "HR Feedback image",
        },

        {
          type: "image",
          src: "/Images/HRimg_3.JPG",
          alt: "HR Feedback image",
        },
      ],
    },
  ],
  scriptWriting: [
    {
      title: "Synchronize'24 MC Script",

      media: [
        {
          type: "pdf", // ← NEW TYPE
          title: "Synchronize'24 MC Script",
          description:
            "MC script designed to guide proceedings and maintain a lively, attentive audience.",
          src: "/Documents/Synchronize 2024 Valedictory Script.pdf", // Path to your PDF
        },
      ],
    },
    {
      title: "MILT Grand Slam MC script",

      media: [
        {
          type: "pdf", // ← NEW TYPE
          title: "MILT Grand Slam MC script",
          description:
            "MC script designed to guide proceedings and maintain a lively, attentive audience.",
          src: "/Documents/Grand Slam MC script.pdf", // Path to your PDF
        },
      ],
    },
    {
      title: "Xactitude'25 MC Script",

      media: [
        {
          type: "pdf", // ← NEW TYPE
          title: "Xactitude'25 MC Script",
          description:
            "MC script designed to guide proceedings and maintain a lively, attentive audience.",
          src: "/Documents/Xactitude'25 Chief Guest Script.pdf", // Path to your PDF
        },
      ],
    },
    {
      title: "MILT Grand Slam MC speech",

      media: [
        {
          type: "pdf", // ← NEW TYPE
          title: "MILT Grand Slam MC speech",
          description:
            "Speech crafted to inspire and captivate the audience from start to finish.",
          src: "/Documents/Grand Slam MC speech.pdf", // Path to your PDF
        },
      ],
    },
    {
      title: "MILT HR Feedback Speech",

      media: [
        {
          type: "pdf", // ← NEW TYPE
          title: "MILT HR Feedback Speech",
          description:
            "Speech crafted to inspire and captivate the audience from start to finish.",
          src: "/Documents/HR Feedback Speech.pdf", // Path to your PDF
        },
      ],
    },
  ],
};

// ---- SKILL DEFINITIONS ----
export const SKILL_CATEGORIES = [
  {
    name: "Content Creation",
    icon: <Camera className="w-5 h-5" aria-hidden />,
    skills: [
      {
        key: "oncamTalent",
        label: "On-Camera Talent",
        mediaKey: "oncamTalent",
        desc: "Warm, playful, and magnetic—captivating audiences, one frame at a time",
      },
    ],
  },
  {
    name: "On Stage",
    icon: <Mic className="w-5 h-5" aria-hidden />,
    skills: [
      {
        key: "emceeing",
        label: "Emceeing",
        mediaKey: "emceeing",
        desc: "On stage, I speak with clarity and composure—bringing a calm, articulate presence paired with warm, friendly energy.",
      },
      {
        key: "eventHosting",
        label: "Event Hosting",
        mediaKey: "eventHosting",
        desc: "Hosting events where audiences feel comfortable, included, and at ease—every detail attended to with care.",
      },
      {
        key: "publicSpeaking",
        label: "Public Speaking",
        mediaKey: "publicSpeaking",
        desc: "Delivering speeches with poise and confidence, leaving lasting impressions on audiences.",
      },
    ],
  },
  {
    name: "Voice & Audio",
    icon: <AudioLines className="w-5 h-5" aria-hidden />,
    skills: [
      {
        key: "voiceDemos",
        label: "Voice Demos",
        mediaKey: "voiceDemos",
        desc: "Clear, confident and engaging—my voice makes every story, script, and event come alive.",
      },

      {
        key: "singing",
        label: "Singing",
        mediaKey: "singing",
        desc: "Soft, dreamy vocals bringing soulful melodies to life.",
      },
    ],
  },
  {
    name: "Writing",
    icon: <PenLine className="w-5 h-5" aria-hidden />,
    skills: [
      {
        key: "scriptWriting",
        label: "Script Writing",
        mediaKey: "scriptWriting",
        desc: "Crafting scripts that feel alive, expressive, and captivate all audiences.",
      },
    ],
  },
];

// ---- PAGES ----
// Basic client-side router state
export const PAGES = {
  HOME: "home",
  ABOUT: "about",
  CONTACT: "contact",
  SKILL: "skill",
};
