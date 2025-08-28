'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const businessTypes = [
  'a plumber',
  'an HVAC contractor',
  'a landscaper',
  'a roofer',
  'a pool service',
  'an electrician',
  'a painter',
  'a handyman',
  'a carpenter',
  'a flooring installer',
  'a garage door technician',
  'a pest control service',
  'a cleaning service',
  'a window washer',
  'a tree trimming service',
  'a fencing contractor',
  'a concrete contractor',
  'a general contractor',
  'a moving company',
  'a junk removal service',
  'a pressure washing service',
  'a gutter installer',
  'a siding contractor',
  'a locksmith',
  'a tile installer',
  'a countertop fabricator',
  'a cabinet maker',
  'a solar panel installer',
  'a home inspector',
]

export function RotatingBusinessTypes() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % businessTypes.length)
    }, 2500)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="my-4">
      <p className="text-lg text-neutral-700">
        Are you{' '}
        <AnimatePresence mode="wait">
          <motion.span
            key={currentIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="font-semibold text-neutral-950 inline-block"
          >
            {businessTypes[currentIndex]}?
          </motion.span>
        </AnimatePresence>{' '}
        <br />
        We&apos;ve got you covered.
      </p>
    </div>
  )
}
