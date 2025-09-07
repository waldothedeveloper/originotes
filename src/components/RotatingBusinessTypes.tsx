'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const businessTypes = [
  'a personal injury lawyer',
  'a family law attorney',
  'a criminal defense lawyer',
  'a corporate lawyer',
  'an employment attorney',
  'a real estate lawyer',
  'an immigration attorney',
  'a tax lawyer',
  'a bankruptcy attorney',
  'an estate planning lawyer',
  'a business litigation attorney',
  'a medical malpractice lawyer',
  'an intellectual property attorney',
  'a divorce lawyer',
  'a workers compensation attorney',
  'a DUI defense lawyer',
  'a contract lawyer',
  'a securities attorney',
  'a labor law attorney',
  'a civil rights lawyer',
  'an environmental lawyer',
  'a construction law attorney',
  'a product liability lawyer',
  'an appellate attorney',
  'a mergers & acquisitions lawyer',
  'a trademark attorney',
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
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="inline-block font-semibold text-neutral-950"
          >
            {businessTypes[currentIndex]}?
          </motion.span>
        </AnimatePresence>{' '}
        {/* <br /> */}
        {/* We&apos;ve got you covered. */}
      </p>
    </div>
  )
}
