import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Lightbox from '../components/Lightbox'
import { Flower, Leaf, SmallFlower, Tape } from '../components/Decor'
import { asset } from '../utils/asset'
import { usePrefersReducedMotion } from '../hooks/useMotionPrefs'
import styles from './PhotoGallery.module.css'

function PolaroidArt({ variant }) {
  const motifs = [Flower, Leaf, SmallFlower, Flower, Leaf, SmallFlower]
  const Motif = motifs[variant % motifs.length]
  return (
    <div className={`${styles.ph} ${styles[`v${variant % 6}`]}`}>
      <Motif className={styles.motif} />
    </div>
  )
}

function PhotoCard({ photo, index, onOpen, reduced }) {
  const src = asset(photo.src)
  const [failed, setFailed] = useState(true)
  const [checked, setChecked] = useState(false)

  useEffect(() => {
    let cancelled = false

    fetch(src, { method: 'HEAD' })
      .then((response) => {
        if (cancelled) return
        const type = response.headers.get('content-type') || ''
        setFailed(!(response.ok && type.startsWith('image/')))
        setChecked(true)
      })
      .catch(() => {
        if (cancelled) return
        setFailed(true)
        setChecked(true)
      })

    return () => {
      cancelled = true
    }
  }, [src])

  return (
    <motion.button
      type="button"
      className={styles.card}
      style={{ '--rot': `${photo.rotate}deg` }}
      onClick={() => onOpen({ ...photo, src, failed })}
      initial={reduced ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.85, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
    >
      <Tape className={styles.tape} />
      <div className={styles.frame}>
        {checked && !failed ? (
          <img src={src} alt={photo.caption} loading="lazy" onError={() => setFailed(true)} />
        ) : (
          <PolaroidArt variant={photo.variant} />
        )}
      </div>
      <div className={styles.caption}>
        <span>{photo.caption}</span>
        <span>{photo.date}</span>
      </div>
      {photo.note ? <p className={styles.note}>{photo.note}</p> : null}
    </motion.button>
  )
}

export default function PhotoGallery({ data }) {
  const reduced = usePrefersReducedMotion()
  const [active, setActive] = useState(null)

  return (
    <section className={styles.section} aria-label="Photo memories">
      <div className={styles.inner}>
        <header className={styles.header}>
          <h2 className={styles.title}>Kept in light.</h2>
          <p className={styles.aside}>a few days I still return to</p>
        </header>
        <div className={styles.wall}>
          {data.photos.map((photo, index) => (
            <PhotoCard
              key={photo.src}
              photo={photo}
              index={index}
              reduced={reduced}
              onOpen={setActive}
            />
          ))}
        </div>
      </div>
      <AnimatePresence>
        {active ? <Lightbox photo={active} onClose={() => setActive(null)} /> : null}
      </AnimatePresence>
    </section>
  )
}
