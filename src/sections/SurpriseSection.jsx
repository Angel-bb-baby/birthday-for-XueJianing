import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { BloomFlower } from '../components/Decor'
import { usePrefersReducedMotion } from '../hooks/useMotionPrefs'
import styles from './SurpriseSection.module.css'

const petals = [
  { dx: '-70px', dy: '90px' },
  { dx: '80px', dy: '70px' },
  { dx: '10px', dy: '-80px' },
  { dx: '-100px', dy: '20px' },
  { dx: '110px', dy: '10px' },
  { dx: '40px', dy: '110px' },
]

export default function SurpriseSection({ data }) {
  const reduced = usePrefersReducedMotion()
  const [open, setOpen] = useState(false)
  const [burst, setBurst] = useState(0)

  const bloom = () => {
    setOpen(true)
    setBurst((value) => value + 1)
  }

  return (
    <section className={styles.section} aria-label="A small surprise">
      <div className={styles.inner}>
        <AnimatePresence mode="wait">
          {!open ? (
            <motion.button
              key="seed"
              type="button"
              className={styles.button}
              onClick={bloom}
              initial={reduced ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              {data.surprise.button}
            </motion.button>
          ) : (
            <motion.div
              key={`bloom-${burst}`}
              className={`${styles.bloom} ${styles['is-open']}`}
              initial={reduced ? false : { opacity: 0, scale: 0.72 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.05, ease: [0.22, 1, 0.36, 1] }}
            >
              {petals.map((petal, index) => (
                <span
                  key={`${burst}-${index}`}
                  className={styles.petal}
                  style={{ '--dx': petal.dx, '--dy': petal.dy }}
                />
              ))}
              <BloomFlower className={styles.flower} />
              <h2 className={styles.title}>Happy Birthday, {data.name}</h2>
              <p className={styles.thanks}>{data.surprise.message}</p>
              <button type="button" className={styles.again} onClick={bloom}>
                once more
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
