import { useEffect } from 'react'
import { motion } from 'framer-motion'
import styles from './Lightbox.module.css'

export default function Lightbox({ photo, onClose }) {
  useEffect(() => {
    const onKey = (event) => {
      if (event.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = previous
    }
  }, [onClose])

  if (!photo) return null

  return (
    <motion.div
      className={styles.overlay}
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <figure className={styles.figure} onClick={(event) => event.stopPropagation()}>
        <button type="button" className={styles.close} onClick={onClose} aria-label="Close photo">
          ×
        </button>
        {photo.failed ? (
          <div className={`${styles.placeholder} ${styles[`v${photo.variant % 6}`]}`} aria-hidden="true" />
        ) : (
          <img src={photo.src} alt={photo.caption} />
        )}
        <figcaption className={styles.caption}>
          <span>{photo.caption}</span>
          <span>{photo.date}</span>
        </figcaption>
      </figure>
    </motion.div>
  )
}
