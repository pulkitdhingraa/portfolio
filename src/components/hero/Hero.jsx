import ParticleGrid from './ParticleGrid'
import InfinityLoop from './InfinityLoop'
import ScrollIndicator from '../ScrollIndicator'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center px-[60px] pt-[120px] pb-[80px] overflow-hidden">
      <ParticleGrid />
      <div className="relative z-[1] flex justify-between items-center w-full max-w-[1200px] mx-auto gap-[60px]">
        <div className="flex-1">
          <div className="inline-flex items-center gap-2 text-[11px] tracking-[2px] text-teal-600 uppercase mb-5">
            <div className="w-1.5 h-1.5 bg-teal-600 rounded-full" style={{ animation: 'pulse 2s ease-in-out infinite' }} />
            Available for opportunities
          </div>
          <div className="text-[104px] font-black leading-[0.95] tracking-[-4px] text-[#1A1A1A]">PULKIT</div>
          <div className="text-[104px] font-black leading-[0.95] tracking-[-4px] text-gray-300">DHINGRA</div>
          <div className="flex items-center gap-3 my-6">
            <div className="w-10 h-0.5 bg-[#1A1A1A]" />
            <span className="text-[13px] tracking-[2px] font-semibold">DEVSECOPS ENGINEER</span>
          </div>
          <p className="text-[15px] text-gray-500 leading-[1.7] max-w-[400px] mb-3">
            Securing cloud-native infrastructure with a focus on automation, compliance, and zero-trust architecture.
          </p>
          <div className="flex gap-2 flex-wrap my-5">
            {['AWS', 'Kubernetes', 'Terraform', 'CI/CD', 'SIEM'].map(tag => (
              <span key={tag} className="text-[11px] font-mono px-3 py-1 border border-gray-200 rounded text-gray-500 bg-white/60">
                {tag}
              </span>
            ))}
          </div>
          <div className="flex gap-3 mt-7">
            <a href="#contact" className="inline-flex items-center gap-2 bg-teal-600 text-white px-7 py-3 rounded-full text-xs font-semibold tracking-[0.5px] hover:bg-teal-700 hover:-translate-y-px transition-all">
              COLLABORATE &rarr;
            </a>
            <a href="#" className="inline-flex items-center gap-2 bg-white text-[#1A1A1A] px-7 py-3 rounded-full text-xs font-semibold tracking-[0.5px] border-[1.5px] border-[#1A1A1A] hover:bg-gray-50 hover:-translate-y-px transition-all">
              RESUME &darr;
            </a>
          </div>
        </div>
        <div className="flex-none w-[480px]">
          <InfinityLoop />
        </div>
      </div>
      <ScrollIndicator />
    </section>
  )
}
