import { motion } from 'framer-motion'

export function Gallery({ images, className = '' }) {
  return (
    <div className={`grid gap-4 md:grid-cols-12 ${className}`}>
      {images.map((image, index) => (
        <motion.figure
          key={image.src}
          initial={{ opacity: 0, scale: 0.98, y: 18 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55, delay: index * 0.05 }}
          className={image.span ?? 'md:col-span-4'}
        >
          <div className="group relative overflow-hidden rounded-[1.75rem] border border-slate-200 bg-slate-100 shadow-[0_26px_60px_rgba(15,23,42,0.08)]">
            <img
              src={image.src}
              alt={image.alt}
              loading="lazy"
              decoding="async"
              className={`h-full w-full cursor-zoom-in object-cover transition duration-700 ease-out group-hover:scale-110 ${image.height ?? 'h-72'}`}
            />
            {image.caption ? (
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/65 to-transparent p-5 text-sm text-white">
                {image.caption}
              </figcaption>
            ) : null}
          </div>
        </motion.figure>
      ))}
    </div>
  )
}
