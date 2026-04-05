import { experience } from '../../data/experience'
import ExperienceItem from './ExperienceItem'

export default function Experience() {
  return (
    <section className="max-w-[1200px] mx-auto px-[60px] py-20" id="experience">
      <div className="text-[11px] tracking-[3px] uppercase text-gray-400 mb-2">Career</div>
      <div className="text-[42px] font-black tracking-[-1.5px] mb-12">
        Where I've <em className="font-accent text-gray-500">Worked</em>
      </div>
      <div className="relative pl-10">
        <div className="absolute -left-[25px] top-0 bottom-0 w-0.5 bg-gray-200" />
        {experience.map((item, i) => (
          <ExperienceItem key={i} item={item} />
        ))}
      </div>
    </section>
  )
}
