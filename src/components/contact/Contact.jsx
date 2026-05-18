export default function Contact() {
  return (
    <section className="max-w-[1200px] mx-auto px-5 md:px-[60px] py-16 md:py-[100px] pb-12 md:pb-20 text-center relative overflow-hidden" id="contact">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[110px] sm:text-[160px] md:text-[220px] font-black tracking-[-6px] md:tracking-[-10px] text-[rgba(13,148,136,0.04)] whitespace-nowrap pointer-events-none select-none">
        CONNECT
      </div>
      <div className="relative text-[11px] tracking-[3px] uppercase text-gray-400 mb-2">Get In Touch</div>
      <div className="relative text-[32px] md:text-[42px] font-black tracking-[-1.5px] mb-8 md:mb-12">
        Let's <em className="font-accent text-gray-500">Connect</em>
      </div>
      <p className="relative text-base text-gray-500 leading-[1.8] max-w-[500px] mx-auto mb-10">
        Have a project in mind or just want to chat about DevSecOps? I'm always open to discussing new opportunities and ideas.
      </p>
      <a
        href="mailto:pulkitdhngra@gmail.com"
        className="relative inline-flex items-center gap-2.5 bg-teal-600 text-white px-9 py-4 rounded-[32px] text-[13px] font-semibold tracking-[0.5px] no-underline hover:bg-teal-700 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(13,148,136,0.2)] transition-all border-none cursor-pointer"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
        </svg>
        GET IN TOUCH
      </a>
      <div className="relative flex justify-center gap-6 mt-7">
        <a href="https://github.com/pulkitdhingraa" className="text-gray-400 no-underline hover:text-teal-600 transition-colors">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/>
          </svg>
        </a>
        <a href="https://linkedin.com/in/pulkitdhingraa" className="text-gray-400 no-underline hover:text-teal-600 transition-colors">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
          </svg>
        </a>
      </div>
    </section>
  )
}
