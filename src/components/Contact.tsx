// import { MapPin, Send } from "lucide-react";
// import GlowCard from "./effects/GlowCard";
// import MagicButton from "./effects/MagicButton";
// import { useState } from "react";

// export default function Contact() {
//   const [sent, setSent] = useState(false);

//   const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
//     e.preventDefault();
//     // const fd = new FormData(e.currentTarget); // wire this to Formspree/Getform/your API
//     setSent(true);
//   };

//   return (
//     <section
//       id="contact"
//       className="relative isolate overflow-hidden text-white"
//       style={{
//         // true fullscreen; change to '80vh' if you want shorter
//         minHeight: "100dvh",
//         // fallback gradient so color shows even if custom classes are missing
//         background:
//           "radial-gradient(60% 60% at 12% 0%, hsla(245,85%,65%,.10) 0%, transparent 60%), radial-gradient(50% 50% at 88% 18%, hsla(320,75%,60%,.08) 0%, transparent 60%), linear-gradient(180deg, hsl(220,20%,4%) 0%, hsl(220,20%,4%) 100%)",
//       }}
//     >
//       {/* Background layers behind content */}
//       <div className="absolute inset-0 -z-20 bg-aurora opacity-50" aria-hidden />
//       <div className="absolute inset-0 -z-20 bg-hero-mesh opacity-30 mix-blend-overlay" aria-hidden />

//       {/* Soft blobs + diagonal sheen for depth */}
//       <div className="absolute inset-0 -z-10 pointer-events-none" aria-hidden>
//         <div
//           className="absolute top-16 left-10 w-40 h-40 rounded-full blur-3xl"
//           style={{ background: "radial-gradient(circle, rgba(99,102,241,.25), transparent 60%)" }}
//         />
//         <div
//           className="absolute bottom-16 right-8 w-56 h-56 rounded-full blur-3xl"
//           style={{ background: "radial-gradient(circle, rgba(236,72,153,.18), transparent 60%)" }}
//         />
//         <div
//           className="absolute inset-0"
//           style={{
//             background:
//               "linear-gradient(115deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0) 35%, rgba(255,255,255,0) 65%, rgba(255,255,255,0.06) 100%)",
//             opacity: 0.22,
//           }}
//         />
//       </div>

//       {/* Content */}
//       <div className="relative z-10 container mx-auto px-6 max-w-3xl py-20">
//         <h2 className="text-3xl sm:text-4xl font-bold text-center">Contact</h2>

//         <GlowCard className="mt-10 animate-scaleIn">
//           {sent ? (
//             <div role="status" aria-live="polite" className="text-emerald-300">
//               Thanks! I’ll get back to you soon.
//             </div>
//           ) : (
//             <form onSubmit={onSubmit} noValidate className="grid sm:grid-cols-2 gap-4">
//               <label className="text-sm text-white/80">
//                 First name
//                 <input
//                   name="first"
//                   className="mt-1 w-full rounded-md border border-white/15 bg-white/5 px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-indigo-400/30"
//                   placeholder="Parth"
//                 />
//               </label>

//               <label className="text-sm text-white/80">
//                 Last name
//                 <input
//                   name="last"
//                   className="mt-1 w-full rounded-md border border-white/15 bg-white/5 px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-indigo-400/30"
//                   placeholder="Godse"
//                 />
//               </label>

//               <label className="text-sm text-white/80 sm:col-span-2">
//                 Email
//                 <input
//                   type="email"
//                   name="email"
//                   required
//                   className="mt-1 w-full rounded-md border border-white/15 bg-white/5 px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-indigo-400/30"
//                   placeholder="you@example.com"
//                 />
//               </label>

//               <label className="text-sm text-white/80 sm:col-span-2">
//                 Message
//                 <textarea
//                   name="message"
//                   rows={4}
//                   className="mt-1 w-full rounded-md border border-white/15 bg-white/5 px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-indigo-400/30"
//                   placeholder="Let’s build something great."
//                 />
//               </label>

//               <div className="sm:col-span-2 flex items-center gap-3">
//                 <MagicButton type="submit">
//                   <Send size={16} className="mr-2 inline" /> Send
//                 </MagicButton>
//                 <span className="text-xs text-white/60 flex items-center gap-1">
//                   <MapPin size={14} /> USA
//                 </span>
//               </div>
//             </form>
//           )}
//         </GlowCard>
//       </div>
//     </section>
//   );
// }


import React, { useState } from "react";
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "", lastName: "", email: "", message: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    // TODO: wire to your backend/Formspree/Getform
    setSent(true);
  };

  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden text-white"
      style={{
        minHeight: "100dvh",
        background:
          "radial-gradient(60% 60% at 12% 0%, hsla(245,85%,65%,.10) 0%, transparent 60%), radial-gradient(50% 50% at 88% 18%, hsla(320,75%,60%,.08) 0%, transparent 60%), linear-gradient(180deg, hsl(220,20%,4%) 0%, hsl(220,20%,4%) 100%)",
      }}
    >
      {/* Effects behind content */}
      <div className="absolute inset-0 -z-20 bg-aurora opacity-50" aria-hidden />
      <div className="absolute inset-0 -z-20 bg-hero-mesh opacity-30 mix-blend-overlay" aria-hidden />
      <div className="absolute inset-0 -z-10 pointer-events-none" aria-hidden>
        <div className="absolute top-16 right-20 w-32 h-32 rounded-full blur-3xl" style={{ background:"radial-gradient(circle, rgba(99,102,241,.25), transparent 60%)" }} />
        <div className="absolute bottom-24 left-16 w-56 h-56 rounded-full blur-3xl" style={{ background:"radial-gradient(circle, rgba(236,72,153,.18), transparent 60%)" }} />
        <div className="absolute inset-0" style={{ background:"linear-gradient(115deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0) 35%, rgba(255,255,255,0) 65%, rgba(255,255,255,0.06) 100%)", opacity:.22 }} />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 max-w-4xl py-20">
        <h2 className="text-4xl font-bold text-center mb-12">Get In Touch</h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left: info + socials */}
          <div className="space-y-6 animate-scaleIn">
            <div>
              <h3 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-indigo-400 to-fuchsia-400 bg-clip-text text-transparent">
                Let’s Connect
              </h3>
              <p className="text-lg text-white/75 leading-relaxed">
                I’m always interested in new opportunities and exciting projects. Whether you’re looking to
                hire, collaborate, or just want to chat about tech, feel free to reach out!
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4 transition-transform duration-300 hover:translate-x-1">
                <div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                  <Mail size={20} className="text-indigo-300" />
                </div>
                <div>
                  <div className="font-medium">Email</div>
                  <div className="text-white/70">parthgod0708@gmail.com</div>
                </div>
              </div>

              <div className="flex items-center gap-4 transition-transform duration-300 hover:translate-x-1">
                <div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                  <Phone size={20} className="text-indigo-300" />
                </div>
                <div>
                  <div className="font-medium">Phone</div>
                  <div className="text-white/70">+1 (812) 553-2820</div>
                </div>
              </div>

              <div className="flex items-center gap-4 transition-transform duration-300 hover:translate-x-1">
                <div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                  <MapPin size={20} className="text-indigo-300" />
                </div>
                <div>
                  <div className="font-medium">Location</div>
                  <div className="text-white/70">United States</div>
                </div>
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <a
                href="https://github.com/ParthGodse"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="inline-flex items-center justify-center rounded-lg border border-white/25 p-2 text-white/80 hover:text-white hover:border-white/40 transition"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/parth-godse/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="inline-flex items-center justify-center rounded-lg border border-white/25 p-2 text-white/80 hover:text-white hover:border-white/40 transition"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Right: form "card" (plain div, no shadcn) */}
          <div className="rounded-2xl border border-white/15 bg-white/5 backdrop-blur-sm p-6 animate-scaleIn transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:shadow-md hover:border-white/25">
            <div className="mb-4 text-lg font-semibold flex items-center gap-2">
              Send me a message <span aria-hidden></span>
            </div>

            {sent ? (
              <div role="status" aria-live="polite" className="text-emerald-300">
                Thanks! I’ll get back to you soon.
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <label className="text-sm text-white/80">
                    First Name
                    <input
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="mt-1 w-full rounded-md border border-white/15 bg-white/5 px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-indigo-400/30"
                      placeholder="Parth"
                    />
                  </label>
                  <label className="text-sm text-white/80">
                    Last Name
                    <input
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="mt-1 w-full rounded-md border border-white/15 bg-white/5 px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-indigo-400/30"
                      placeholder="Godse"
                    />
                  </label>
                </div>

                <label className="text-sm text-white/80">
                  Email
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="mt-1 w-full rounded-md border border-white/15 bg-white/5 px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-indigo-400/30"
                    placeholder="you@example.com"
                  />
                </label>

                <label className="text-sm text-white/80">
                  Message
                  <textarea
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="mt-1 w-full rounded-md border border-white/15 bg-white/5 px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-indigo-400/30 resize-none"
                    placeholder="Let’s build something great."
                  />
                </label>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-md px-4 py-2 font-medium
                             bg-gradient-to-r from-indigo-500 to-fuchsia-500 hover:from-indigo-500/90 hover:to-fuchsia-500/90
                             transition-transform hover:scale-[1.02]"
                >
                  <Send size={16} />
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
