import { motion } from 'framer-motion'
import { Squiggle } from '../components/Decor'
import { usePrefersReducedMotion } from '../hooks/useMotionPrefs'
import styles from './MemoryWords.module.css'

const places = [
  { top: '6%', left: '4%' },
  { top: '18%', left: '48%' },
  { top: '8%', left: '74%' },
  { top: '38%', left: '18%' },
  { top: '42%', left: '62%' },
  { top: '58%', left: '2%' },
  { top: '68%', left: '36%' },
  { top: '54%', left: '78%' },
  { top: '84%', left: '58%' },
]

export default function MemoryWords({ data }) {
  const reduced = usePrefersReducedMotion()

  return (
    <section className={styles.section} aria-label="Things that remind me of you">
      <div className={styles.inner}>
        <header className={styles.header}>
          <motion.h2
            className={styles.title}
            initial={reduced ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            Things that remind me of you.
          </motion.h2>
        </header>

        <div className={styles.field}>
          <Squiggle className={styles.scribble} />
          {data.memories.map((item, index) => {
            const place = places[index] || places[0]
            return (
              <motion.button
                type="button"
                key={item.word}
                className={`${styles.chip} ${styles[item.size]} ${styles[item.tone]}`}
                style={{
                  top: place.top,
                  left: place.left,
                  '--rot': `${item.rotate}deg`,
                }}
                data-cursor="hover"
                initial={reduced ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.8, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className={styles.word}>{item.word}</span>
                <span className={styles.note}>{item.note}</span>
              </motion.button>
            )
          })}
        </div>
      </div>
    </section>
  )
}
