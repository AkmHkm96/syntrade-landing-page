import { useState } from 'react'
import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'

export function NavLinks() {
  let [hoveredIndex, setHoveredIndex] = useState(null)

  return [
    ['Products', '#products', 'product-nav'],
    ['Trade', '#trade-types', 'trade-nav'],
    ['Reviews', '#reviews', 'review-nav'],
    ['FAQs', '#faqs', 'faq-nav'],
  ].map(([label, href, id], index) => (
    <Link
      key={label}
      href={href}
      id={id}
      className="text-md relative -my-2 -mx-3 rounded-lg px-3 py-2 text-gray-700 transition-colors delay-150 hover:text-gray-900 hover:delay-[0ms]"
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
    >
      <AnimatePresence>
        {hoveredIndex === index && (
          <motion.span
            className="absolute inset-0 rounded-lg bg-[#6366F1]/20"
            layoutId="hoverBackground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.15 } }}
            exit={{
              opacity: 0,
              transition: { duration: 0.15, delay: 0.2 },
            }}
          />
        )}
      </AnimatePresence>
      <span id={id} className="relative z-10">
        {label}
      </span>
    </Link>
  ))
}
