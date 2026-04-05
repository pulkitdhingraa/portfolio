import { projects } from '../../data/projects'
import ProjectCard from './ProjectCard'

export default function Projects() {
  return (
    <section className="max-w-[1200px] mx-auto px-[60px] py-20" id="projects">
      <div className="text-[11px] tracking-[3px] uppercase text-gray-400 mb-2">Featured Works</div>
      <div className="text-[42px] font-black tracking-[-1.5px] mb-12">
        Things I've <em className="font-accent text-gray-500">Built</em>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {projects.map(p => (
          <ProjectCard key={p.num} project={p} />
        ))}
      </div>
    </section>
  )
}
