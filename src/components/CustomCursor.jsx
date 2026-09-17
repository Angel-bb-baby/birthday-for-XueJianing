import { useEffect, useRef, useState } from 'react'
import { useIsCoarsePointer, usePrefersReducedMotion } from '../hooks/useMotionPrefs'
import styles from './CustomCursor.module.css'

export default function CustomCursor() {
  const coarse = useIsCoarsePointer()
  const reduced = usePrefersReducedMotion()
  const ref = useRef(null)
  const pos = useRef({ x: 0, y: 0, cx: 0, cy: 0 })
  const hoverRef = useRef(false)
  const [hover, setHover] = useState(false)

  useEffect(() => {
    if (coarse) {
      document.body.classList.remove('has-custom-cursor')
      return undefined
    }

    document.body.classList.add('has-custom-cursor')
    const node = ref.current
    let frame = 0

    const onMove = (event) => {
      pos.current.x = event.clientX
      pos.current.y = event.clientY
      const mx = (event.clientX / window.innerWidth) * 100
      const my = (event.clientY / window.innerHeight) * 100
      document.documentElement.style.setProperty('--mx', mx.toFixed(2))
      document.documentElement.style.setProperty('--my', my.toFixed(2))

      const interactive = event.target?.closest?.('a, button, [data-cursor="hover"]')
      const next = Boolean(interactive)
      hoverRef.current = next
      setHover((prev) => (prev === next ? prev : next))
    }

    const loop = () => {
      const current = pos.current
      const ease = reduced ? 1 : 0.2
      current.cx += (current.x - current.cx) * ease
      current.cy += (current.y - current.cy) * ease
      if (node) {
        const scale = hoverRef.current ? 1.85 : 1
        node.style.transform = `translate3d(${current.cx}px, ${current.cy}px, 0) scale(${scale})`
      }
      frame = requestAnimationFrame(loop)
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    frame = requestAnimationFrame(loop)

    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('mousemove', onMove)
      document.body.classList.remove('has-custom-cursor')
    }
  }, [coarse, reduced])

  if (coarse) return null

  return <div ref={ref} className={`${styles.cursor} ${hover ? styles['is-hover'] : ''}`} />
}
