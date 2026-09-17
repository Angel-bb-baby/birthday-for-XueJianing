import { useEffect, useRef, useState } from 'react'
import { asset } from '../utils/asset'
import styles from './MusicToggle.module.css'

export default function MusicToggle() {
  const audioRef = useRef(null)
  const [available, setAvailable] = useState(false)
  const [playing, setPlaying] = useState(false)

  useEffect(() => {
    const url = asset('music/birthday.mp3')
    let cancelled = false

    const isAudio = (response) => {
      const type = response.headers.get('content-type') || ''
      return response.ok && type.includes('audio')
    }

    fetch(url, { method: 'HEAD' })
      .then((response) => {
        if (!cancelled && isAudio(response)) setAvailable(true)
      })
      .catch(() => {
        fetch(url)
          .then((response) => {
            if (!cancelled && isAudio(response)) setAvailable(true)
          })
          .catch(() => {})
      })

    return () => {
      cancelled = true
    }
  }, [])

  useEffect(() => {
    if (!available) return undefined
    const audio = new Audio(asset('music/birthday.mp3'))
    audio.loop = true
    audio.preload = 'none'
    audioRef.current = audio

    const onEnded = () => setPlaying(false)
    audio.addEventListener('error', onEnded)

    return () => {
      audio.pause()
      audio.removeEventListener('error', onEnded)
      audioRef.current = null
    }
  }, [available])

  if (!available) return null

  const toggle = async () => {
    const audio = audioRef.current
    if (!audio) return

    try {
      if (playing) {
        audio.pause()
        setPlaying(false)
      } else {
        await audio.play()
        setPlaying(true)
      }
    } catch {
      setPlaying(false)
    }
  }

  return (
    <button
      type="button"
      className={`${styles.toggle} ${playing ? styles['is-on'] : ''}`}
      onClick={toggle}
      aria-pressed={playing}
      aria-label={playing ? 'Pause music' : 'Play music'}
    >
      <span className={styles.note}>♫</span>
      <span className={styles.label}>{playing ? 'on' : 'off'}</span>
    </button>
  )
}
