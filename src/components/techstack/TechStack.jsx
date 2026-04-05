import OrbitalSphere from './OrbitalSphere'

export default function TechStack() {
  return (
    <>
      <div className="max-w-[1200px] mx-auto px-[60px] pt-20 pb-5" id="skills">
        <div className="text-[11px] tracking-[3px] uppercase text-gray-400 mb-2">Expertise</div>
        <div className="text-[42px] font-black tracking-[-1.5px]">
          Tools I <em className="font-accent text-gray-500">Work With</em>
        </div>
      </div>
      <OrbitalSphere />
    </>
  )
}
