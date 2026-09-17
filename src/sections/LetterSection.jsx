import { motion } from 'framer-motion'
import { Leaf, PressedFlower } from '../components/Decor'
import { usePrefersReducedMotion } from '../hooks/useMotionPrefs'
import styles from './LetterSection.module.css'

export default function LetterSection({ data }) {
  const reduced = usePrefersReducedMotion()

  return (
    <section className={styles.section} id="note" aria-label="A little note">
      <div className={styles.layout}>
        <p className={styles.kicker}>look here</p>
        <motion.div
          className={styles.paperWrap}
          initial={reduced ? false : { opacity: 0, y: 36, rotate: -4 }}
          whileInView={{ opacity: 1, y: 0, rotate: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 1.05, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className={styles.shadow} />
          <article className={styles.paper}>
            <div className={styles.stamp}>for you</div>
            <h2 className={styles.title}>{data.letter.title}</h2>
            <p className={styles.meta}>{data.letter.dateLabel}</p>
            <p className={styles.body}>{data.letter.body}</p>
          </article>
          <PressedFlower className={styles.pressed} />
          <Leaf className={styles.leaf} />
        </motion.div>
        <span className={styles.note}>keep growing →</span>
      </div>
    </section>
  )
}
