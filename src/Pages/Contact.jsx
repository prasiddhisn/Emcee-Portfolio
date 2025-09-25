/*
 ------------------
 ContactPage Component
 ------------------
 Renders the contact section with a form and social links for connections.
*/

import React from "react";
import { motion } from "framer-motion";
import { ChevronLeft, Mail, Linkedin, Instagram } from "lucide-react";
import { FONT_HEADLINE } from "../Constants/Constants.jsx";

function ContactPage({ onBack }) {
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

      {/* Content wrapper */}
      <div className="max-w-6xl mx-auto">
        {/* Section heading */}
        <h2
          className="text-2xl md:text-3xl text-[color:var(--sand)] mb-4"
          style={{ fontFamily: FONT_HEADLINE }}
        >
          Contact
        </h2>

        {/* Intro text */}
        <p className="text-[color:var(--sand)] leading-relaxed max-w-prose">
          Collaborations, auditions, ideas? I’d love to connect. Email me or
          drop a note below.
        </p>

        {/* Contact form */}
        {/* Contact form that opens email client */}
        <form
          action="mailto:snprasiddhi2@gmail.com"
          method="post"
          encType="text/plain"
          className="mt-6 grid gap-3 max-w-xl"
        >
          {/* Keep all your existing input fields */}
          <label className="grid gap-1">
            <span className="text-sm text-[color:var(--sand)]">Name</span>
            <input
              name="name"
              required
              className="px-3 py-2 rounded-xl border border-[color:var(--coffee)]/20 focus:outline-none focus:ring-2 focus:ring-[color:var(--amber)] bg-white"
              placeholder="Your name"
            />
          </label>

          <label className="grid gap-1">
            <span className="text-sm text-[color:var(--sand)]">Email</span>
            <input
              type="email"
              name="email"
              required
              className="px-3 py-2 rounded-xl border border-[color:var(--coffee)]/20 focus:outline-none focus:ring-2 focus:ring-[color:var(--amber)] bg-white"
              placeholder="you@email.com"
            />
          </label>

          <label className="grid gap-1">
            <span className="text-sm text-[color:var(--sand)]">Message</span>
            <textarea
              name="message"
              required
              rows={5}
              className="px-3 py-2 rounded-xl border border-[color:var(--coffee)]/20 focus:outline-none focus:ring-2 focus:ring-[color:var(--amber)] bg-white"
              placeholder="Tell me about your idea"
            />
          </label>

          <button
            type="submit"
            className="justify-self-start px-4 py-2 rounded-2xl bg-[color:var(--white)] text-[color:var(--coffee)] hover:bg-gray-100 transition focus:outline-none focus:ring-2 focus:ring-[color:var(--amber)]"
          >
            Send Email
          </button>
        </form>
      </div>
    </motion.section>
  );
}

export default ContactPage;
