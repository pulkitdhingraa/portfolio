import { books } from '../../data/personal'

export default function BooksCard() {
  return (
    <div className="pp-card flex flex-col">
      <div className="flex items-center gap-2 mb-2">
        <div className="w-8 h-8 rounded flex items-center justify-center bg-[#09090b]">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
        </div>
        <div className="text-[0.75rem] font-medium text-[#f59e0b]">reading</div>
      </div>
      <div className="text-[0.55rem] text-[#71717a] mb-1.5">Favourites</div>
      <div className="flex flex-col gap-[5px] flex-1">
        {books.map(book => (
          <div key={book.name} className="flex items-center gap-1.5 hover:opacity-80 transition-opacity">
            <img className="w-[22px] h-[32px] rounded-sm flex-shrink-0 object-cover bg-[#27272a]" src={book.img} alt={book.name} />
            <div className="flex-1 min-w-0">
              <div className="text-[0.6rem] text-[#fafafa] whitespace-nowrap overflow-hidden text-ellipsis leading-tight">{book.name}</div>
              <div className="text-[0.55rem] text-[#71717a]">{book.author}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-2 pt-2 border-t border-[#27272a]">
        <a href="https://www.goodreads.com/user/show/191622763-pulkit-dhingra" target="_blank" rel="noopener noreferrer" className="text-[0.6rem] text-[#71717a] no-underline hover:text-[#fafafa] transition-colors">
          more books →
        </a>
      </div>
    </div>
  )
}
