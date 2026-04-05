import { blogPosts } from '../../data/blog'
import BlogPost from './BlogPost'

export default function Blog() {
  return (
    <section className="max-w-[1200px] mx-auto px-[60px] py-20" id="blog">
      <div className="text-[11px] tracking-[3px] uppercase text-gray-400 mb-2">Professional Insights</div>
      <div className="text-[42px] font-black tracking-[-1.5px] mb-12">
        Latest <em className="font-accent text-gray-500">Writings</em>
      </div>

      <div className="flex flex-col">
        {blogPosts.map(post => (
          <BlogPost key={post.num} post={post} />
        ))}
      </div>

      <div className="relative mt-8 p-8 border border-gray-200 rounded-2xl flex items-center justify-between gap-6 overflow-hidden">
        <div className="absolute -right-2.5 top-1/2 -translate-y-1/2 text-[100px] font-black tracking-[-4px] text-[rgba(13,148,136,0.03)] pointer-events-none leading-none">
          SUBSCRIBE
        </div>
        <div>
          <h4 className="text-[15px] font-bold tracking-[-0.2px] mb-1">Stay in the loop</h4>
          <p className="text-xs text-gray-400">DevSecOps insights, tool deep-dives, and quick tips. No spam.</p>
        </div>
        <div className="flex gap-2 flex-shrink-0">
          <input
            type="email"
            placeholder="your@email.com"
            className="font-[Inter] text-[13px] px-4 py-2.5 border border-gray-200 rounded-lg outline-none w-[260px] transition-colors focus:border-teal-600"
          />
          <button className="font-[Inter] text-xs font-semibold tracking-[1px] uppercase px-6 py-2.5 bg-teal-600 text-white border-none rounded-lg cursor-pointer hover:bg-teal-700 transition-colors">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  )
}
