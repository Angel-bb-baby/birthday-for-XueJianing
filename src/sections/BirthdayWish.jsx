import { motion } from 'framer-motion'
import { Flower } from '../components/Decor'
import { usePrefersReducedMotion } from '../hooks/useMotionPrefs'
import styles from './BirthdayWish.module.css'

export default function BirthdayWish({ data }) {
  const reduced = usePrefersReducedMotion()
  const wish = data.birthdayWish

  return (
    <section className={styles.section} aria-label="Birthday wishes">
      <Flower className={styles.mark} />
      <div className={styles.inner}>
        <motion.h2
          className={styles.opener}
          initial={reduced ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          {wish.opener}
        </motion.h2>
        {wish.lines.map((line, index) => (
          <motion.p
            key={line}
            className={styles.line}
            initial={reduced ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.85, delay: reduced ? 0 : 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            {line}
          </motion.p>
        ))}
        <motion.p
          className={styles.closer}
          initial={reduced ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          {wish.closer}
        </motion.p>
      </div>
    </section>
  )
}
