/*
 ------------------
 SkillsGrid Component
 ------------------
 Displays all skill categories and skills on the home page.
 Each skill card is clickable to open the corresponding skill details.
*/

import { FONT_HEADLINE, SKILL_CATEGORIES } from "../Constants/Constants.jsx";

function SkillsGrid({ onOpenSkill }) {
  return (
    <section className="pb-12" aria-labelledby="skills-heading">
      {/* Section heading */}
      <h2
        id="skills-heading"
        className="text-2xl md:text-3xl mb-6 text-[color:var(--sand)]"
        style={{ fontFamily: FONT_HEADLINE }}
      >
        Skills
      </h2>

      <div className="space-y-8">
        {SKILL_CATEGORIES.map((cat) => (
          <div key={cat.name}>
            {/* Category header with icon */}
            <div className="flex items-center gap-2 mb-3">
              <div className="flex items-center gap-1 text-[color:var(--sand)]">
                {cat.icon} {/* Category icon */}
              </div>
              <h3
                className="text-lg md:text-xl"
                style={{
                  fontFamily: FONT_HEADLINE,
                  color: "#e0d9c4",
                }}
              >
                {cat.name} {/* Category name */}
              </h3>
            </div>

            {/* Skills grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {cat.skills.map((s) => (
                // Individual skill card
                <button
                  key={s.key}
                  onClick={() => onOpenSkill(s)} // opens skill details
                  className="group relative rounded-2xl p-4 border hover:-translate-y-1 hover:shadow-md transition focus:outline-none"
                  style={{
                    backgroundColor: "#e0d9c4", // card background
                    borderColor: "#bfab88", // border color
                    color: "#3a2e2a", // default text color
                  }}
                  aria-label={`Open ${s.label}`}
                >
                  <div className="absolute inset-0 rounded-2xl transition" />{" "}
                  {/* overlay for hover effect */}
                  <div className="relative z-10 text-left">
                    <p
                      className="text-sm uppercase tracking-wide"
                      style={{ color: "#3a2e2a" }}
                    >
                      {cat.name} {/* Category name inside card */}
                    </p>
                    <p
                      className="mt-1 font-semibold"
                      style={{
                        fontFamily: FONT_HEADLINE,
                        color: "#3a2e2a",
                      }}
                    >
                      {s.label} {/* Skill label */}
                    </p>
                    <p className="mt-2 text-sm" style={{ color: "#3a2e2a" }}>
                      {s.desc} {/* Skill description */}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SkillsGrid;
