import { motion } from 'framer-motion'
import useMagnetic from '../hooks/useMagnetic.js'
import { useCursor } from '../hooks/CursorContext.jsx'

/**
 * Wraps any element (button, link, card) with magnetic pull toward the
 * cursor and drives the custom cursor's "hover" state. Pass `as="a"` etc.
 * via the `tag` prop, and pass through any other props (href, onClick...).
 */
export default function Magnetic({ children, tag = 'div', strength = 0.3, cursorVariant = 'hover', className = '', ...rest }) {
  const { ref, style, handlers } = useMagnetic(strength)
  const { setHover, setView, resetCursor } = useCursor()
  const MotionTag = motion[tag] || motion.div

  const onEnter = () => (cursorVariant === 'view' ? setView() : setHover())
  const onLeave = () => {
    resetCursor()
    handlers.onMouseLeave()
  }

  return (
    <MotionTag
      ref={ref}
      style={style}
      className={className}
      onMouseMove={handlers.onMouseMove}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      {...rest}
    >
      {children}
    </MotionTag>
  )
}
