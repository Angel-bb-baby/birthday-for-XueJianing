import { motion } from 'framer-motion'
import { EndingMark } from '../components/Decor'
import { usePrefersReducedMotion } from '../hooks/useMotionPrefs'
import styles from './EndingSection.module.css'

export default function EndingSection({ data }) {
  const reduced = usePrefersReducedMotion()

  return (
    <section className={styles.section} aria-label="Ending">
      <motion.div
        className={styles.inner}
        initial={reduced ? false : { opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.55 }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
      >
        <h2 className={styles.line}>{data.ending.line}</h2>
        <p className={styles.sign}>
          Happy Birthday,
          <span className={styles.name}>{data.name}</span>
          <span className={styles.date}>{data.date}</span>
        </p>
        <EndingMark className={styles.mark} />
        <p className={styles.from}>made with love by {data.from}</p>
      </motion.div>
    </section>
  )
}
