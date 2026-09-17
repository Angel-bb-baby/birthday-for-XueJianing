import { useRef, useState } from 'react'
import { motion, useMotionValueEvent, useScroll, useTransform } from 'framer-motion'
import { usePrefersReducedMotion } from '../hooks/useMotionPrefs'
import styles from './GrowingWishes.module.css'

const STEM = 'M170 620 C 166 500, 186 430, 158 340 C 132 260, 196 210, 176 120 C 164 64, 180 28, 170 8'

const leaves = [
  { x: 118, y: 520, rot: -28, fill: '#AAB7A2' },
  { x: 214, y: 470, rot: 32, fill: '#BAC5B1' },
  { x: 108, y: 400, rot: -18, fill: '#AAB7A2' },
  { x: 228, y: 340, rot: 26, fill: '#D8B2AC' },
  { x: 112, y: 280, rot: -34, fill: '#BAC5B1' },
  { x: 220, y: 230, rot: 18, fill: '#D49A84' },
  { x: 124, y: 170, rot: -22, fill: '#AAB7A2' },
  { x: 210, y: 120, rot: 30, fill: '#D8B2AC' },
  { x: 148, y: 42, rot: -8, fill: '#E7D7A2' },
]

function GrowingLeaf({ progress, index, leaf, reduced, onActivate }) {
  const start = 0.16 + index * 0.075
  const opacity = useTransform(progress, [start, start + 0.12], [reduced ? 1 : 0, 1])
  const scale = useTransform(progress, [start, start + 0.14], [reduced ? 1 : 0.35, 1])

  return (
    <motion.g
      className={styles.leaf}
      style={{ opacity, scale }}
      onMouseEnter={onActivate}
      onClick={onActivate}
    >
      <g transform={`translate(${leaf.x} ${leaf.y}) rotate(${leaf.rot})`}>
        <circle r="22" fill="transparent" />
        <path
          d="M0 0 C -8 -22, -6 -40, 0 -52 C 8 -40, 8 -22, 0 0Z"
          fill={leaf.fill}
          fillOpacity="0.88"
          stroke="#7F9176"
          strokeWidth="0.8"
        />
        <path d="M0 0 C 0 -24 0 -40 0 -50" stroke="#7F9176" strokeWidth="0.6" />
      </g>
    </motion.g>
  )
}

export default function GrowingWishes({ data }) {
  const reduced = usePrefersReducedMotion()
  const ref = useRef(null)
  const [active, setActive] = useState(0)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  })
  const pathLength = useTransform(scrollYProgress, [0.02, 0.5], [reduced ? 1 : 0.06, 1])

  useMotionValueEvent(scrollYProgress, 'change', (value) => {
    const next = Math.min(
      data.wishes.length - 1,
      Math.max(0, Math.floor(value * data.wishes.length)),
    )
    setActive(next)
  })

  return (
    <section className={styles.section} ref={ref} aria-label="Growing wishes">
      <div className={styles.sticky}>
        <div className={styles.copy}>
          <h2 className={styles.title}>Things I hope keep growing with you.</h2>
          <p className={styles.hint}>a leaf for each wish</p>
          <ul className={styles.words}>
            {data.wishes.map((wish, index) => (
              <li key={wish.word}>
                <button
                  type="button"
                  className={`${styles.wordBtn} ${active === index ? styles.isOn : ''}`}
                  onClick={() => setActive(index)}
                >
                  {wish.word}
                </button>
              </li>
            ))}
          </ul>
          <div className={styles.tooltip} aria-live="polite">
            <span className={styles.word}>{data.wishes[active]?.word}</span>
            {data.wishes[active]?.line}
          </div>
        </div>

        <div className={styles.plantWrap}>
          <svg className={styles.svg} viewBox="0 0 340 640" aria-hidden="true">
            <motion.path d={STEM} className={styles.stem} style={{ pathLength }} />
            {data.wishes.map((wish, index) => (
              <GrowingLeaf
                key={wish.word}
                progress={scrollYProgress}
                index={index}
                leaf={leaves[index]}
                reduced={reduced}
                onActivate={() => setActive(index)}
              />
            ))}
            <circle cx="170" cy="16" r="6" fill="#E7D7A2" />
          </svg>
        </div>
      </div>
    </section>
  )
}
