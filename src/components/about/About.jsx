export default function About() {
  return (
    <section className="max-w-[1200px] mx-auto px-[60px] py-20" id="about">
      <div className="text-[11px] tracking-[3px] uppercase text-gray-400 mb-2">Biography</div>
      <div className="text-[42px] font-black tracking-[-1.5px] mb-12">
        What I <em className="font-accent text-gray-500">Automate</em>
      </div>
      <div className="flex gap-[60px] items-start">
        <div className="flex-none w-[280px]">
          <img
            src="/anime-portrait.png"
            alt="Pulkit Dhingra"
            className="w-[280px] h-[340px] rounded-lg object-cover"
          />
        </div>
        <div className="flex-1">
          <div className="text-[10px] tracking-[2px] uppercase text-teal-600 mb-4 font-semibold">
            &bull; DevSecOps Engineer
          </div>
          <h3 className="text-[22px] font-bold leading-[1.4] mb-4 tracking-[-0.5px]">
            Building resilient infrastructure with a focus on{' '}
            <em className="font-accent text-teal-600">automation</em> and{' '}
            <em className="font-accent text-teal-600">cloud-native</em> engineering.
          </h3>
          <p className="text-sm text-gray-500 leading-[1.8] mb-7">
            I bridge the gap between development, security, and operations. I focus on creating
            infrastructure that is as reliable and automated as it is secure &mdash; building
            systems that scale, self-heal, and stay compliant without manual intervention.
          </p>
          <div className="flex gap-12 mb-8">
            <div className="flex flex-col gap-1">
              <span className="text-[9px] tracking-[2px] uppercase text-gray-400">Location</span>
              <span className="text-[13px] font-semibold text-[#1A1A1A]">India</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[9px] tracking-[2px] uppercase text-gray-400">Status</span>
              <span className="text-[13px] font-semibold text-[#1A1A1A]">Open to Work</span>
            </div>
          </div>
          <div className="flex items-center justify-between gap-6">
            <div className="flex gap-2.5 flex-wrap">
              {['Automation', 'IaC', 'Cloud Security', 'GitOps', 'SRE', 'Compliance'].map(tag => (
                <span key={tag} className="text-[11px] px-3.5 py-1.5 rounded-[20px] bg-gray-100 text-gray-500 font-medium">
                  {tag}
                </span>
              ))}
            </div>
            <a href="#contact" className="inline-flex items-center gap-2 text-xs font-semibold text-[#1A1A1A] no-underline tracking-[0.5px] hover:text-teal-600 transition-colors whitespace-nowrap">
              GET IN TOUCH
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
