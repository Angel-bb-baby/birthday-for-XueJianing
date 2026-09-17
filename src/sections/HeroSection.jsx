import { motion } from 'framer-motion'
import { Cloud, Blob, HeroPlant, Sun } from '../components/Decor'
import { usePrefersReducedMotion } from '../hooks/useMotionPrefs'
import styles from './HeroSection.module.css'

const ease = [0.22, 1, 0.36, 1]

export default function HeroSection({ data }) {
  const reduced = usePrefersReducedMotion()
  const fade = (delay) =>
    reduced
      ? {}
      : {
          initial: { opacity: 0, y: 22 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.95, delay, ease },
        }

  return (
    <section className={styles.hero} aria-label="Opening">
      <div className={styles.stage}>
        <Sun className={styles.sun} />
        <Cloud className={styles.cloud} />
        <Blob className={styles.blob} fill="#BAC5B1" />
        <div className={styles.dust} />
        <div className={styles.dust} />
        <div className={styles.dust} />
        <div className={styles.dust} />

        <p className={styles.date}>{data.date}</p>

        <motion.p className={styles.kicker} {...fade(0.1)}>
          {data.hero.subtitle}
        </motion.p>

        <div className={styles.copy}>
          <motion.h1 className={styles.line} {...fade(0.28)}>
            Today feels
          </motion.h1>
          <motion.h1 className={styles.line} {...fade(0.46)}>
            a little more
          </motion.h1>
          <motion.h1 className={`${styles.line} ${styles.alive}`} {...fade(0.64)}>
            alive.
          </motion.h1>
        </div>

        <motion.p className={styles.second} {...fade(1.05)}>
          {data.hero.lineTwo}
        </motion.p>

        <motion.p className={styles.birthday} {...fade(1.35)}>
          Happy Birthday, <span className={styles.name}>{data.name}</span>.
        </motion.p>

        <div className={styles.plant}>
          <HeroPlant />
        </div>

        <a className={styles.scroll} href="#note">
          keep scrolling
          <span className={styles.arrow}>↓</span>
        </a>
      </div>
    </section>
  )
}
