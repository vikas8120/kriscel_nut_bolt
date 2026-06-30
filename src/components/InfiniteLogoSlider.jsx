export function InfiniteLogoSlider({ logos }) {
  const doubled = [...logos, ...logos]

  return (
    <div className="overflow-hidden rounded-[2rem] border border-white/16 bg-white/8 backdrop-blur-md">
      <div className="flex min-w-max animate-[marquee_28s_linear_infinite] gap-4 px-4 py-5">
        {doubled.map((logo, index) => (
          <div
            key={`${logo}-${index}`}
            className="rounded-full border border-white/16 bg-white/12 px-5 py-3 text-sm font-semibold text-white/84 shadow-[0_8px_24px_rgba(0,0,0,0.08)]"
          >
            {logo}
          </div>
        ))}
      </div>
    </div>
  )
}
