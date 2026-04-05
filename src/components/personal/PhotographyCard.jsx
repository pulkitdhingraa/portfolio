export default function PhotographyCard() {
  return (
    <div className="pp-card h-[176px] flex flex-col">
      <div className="flex items-center gap-2 mb-2">
        <div className="w-8 h-8 rounded flex items-center justify-center text-base bg-[#09090b]">&#128247;</div>
        <div>
          <div className="text-[0.75rem] font-medium text-[#fafafa]">Photography</div>
          <div className="text-[0.6rem] text-[#71717a]">gallery</div>
        </div>
      </div>
      <div className="flex-1 grid grid-cols-2 gap-[3px]">
        <div className="bg-gradient-to-br from-[#2a3a4a] to-[#4a5a6a] rounded-sm row-span-2" />
        <div className="bg-gradient-to-br from-[#4a3a2a] to-[#6a5a4a] rounded-sm" />
        <div className="bg-gradient-to-br from-[#2a4a3a] to-[#4a6a5a] rounded-sm" />
      </div>
    </div>
  )
}
