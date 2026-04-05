export default function ScrollIndicator() {
  return (
    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-[1]">
      <span className="text-[10px] tracking-[2px] uppercase text-gray-400">Scroll</span>
      <div
        className="w-px bg-gradient-to-b from-gray-400 to-transparent"
        style={{ animation: 'scrollPulse 2s ease-in-out infinite', height: 30 }}
      />
    </div>
  )
}
