import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { SmallFlower } from '../components/Decor'
import { usePrefersReducedMotion } from '../hooks/useMotionPrefs'
import styles from './TimelineSection.module.css'

const PATH = 'M90 40 C 220 90, 310 70, 360 160 S 120 250, 140 340 S 430 430, 380 530 S 80 620, 160 740'

export default function TimelineSection({ data }) {
  const reduced = usePrefersReducedMotion()
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.65'],
  })
  const pathLength = useTransform(scrollYProgress, [0, 1], [reduced ? 1 : 0, 1])

  return (
    <section className={styles.section} aria-label="Our little timeline">
      <div className={styles.inner} ref={ref}>
        <h2 className={styles.title}>Somewhere along the way…</h2>
        <p className={styles.aside}>a vine of days we kept</p>

        <div className={styles.scene}>
          <svg className={styles.svg} viewBox="0 0 520 780" fill="none" aria-hidden="true">
            <motion.path
              d={PATH}
              className={styles.path}
              style={{ pathLength }}
              strokeDasharray="1 1"
            />
            <g opacity="0.85">
              <circle cx="90" cy="40" r="5" fill="#E7D7A2" />
              <circle cx="360" cy="160" r="5" fill="#D8B2AC" />
              <circle cx="140" cy="340" r="5" fill="#AAB7A2" />
              <circle cx="380" cy="530" r="5" fill="#D49A84" />
            </g>
          </svg>

          {data.timeline.map((item) => (
            <motion.article
              key={item.year}
              className={styles.node}
              initial={reduced ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <SmallFlower className={styles.dot} />
              <p className={styles.year}>{item.year}</p>
              <p className={styles.label}>{item.title}</p>
              <p className={styles.detail}>{item.detail}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
