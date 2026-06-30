import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

export function MagneticButton({ className = '', children, ...props }) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 200, damping: 20, mass: 0.5 })
  const springY = useSpring(y, { stiffness: 200, damping: 20, mass: 0.5 })
  const rotateX = useTransform(springY, [-20, 20], [8, -8])
  const rotateY = useTransform(springX, [-20, 20], [-8, 8])

  const handleMove = (event) => {
    const bounds = event.currentTarget.getBoundingClientRect()
    x.set(event.clientX - bounds.left - bounds.width / 2)
    y.set(event.clientY - bounds.top - bounds.height / 2)
  }

  const handleLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.button
      whileHover={{ y: -2 }}
      style={{ x: springX, y: springY, rotateX, rotateY, transformStyle: 'preserve-3d' }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={`group relative inline-flex items-center justify-center overflow-hidden rounded-full border border-[#ECE7D1]/34 bg-[#FBF8EF] px-6 py-3 text-sm font-semibold text-[#6E6754] shadow-[0_18px_40px_rgba(95,82,56,0.1)] transition-colors hover:border-[#DBCEA5] ${className}`}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      <span className="absolute inset-0 bg-[linear-gradient(135deg,rgba(219,206,165,0.3),rgba(142,151,125,0.18))] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </motion.button>
  )
}
