import { createContext, useContext, useState, useCallback } from 'react'

const CursorContext = createContext(null)

export function CursorProvider({ children }) {
  const [variant, setVariant] = useState('default') // default | hover | view

  const setHover = useCallback(() => setVariant('hover'), [])
  const setView = useCallback(() => setVariant('view'), [])
  const resetCursor = useCallback(() => setVariant('default'), [])

  return (
    <CursorContext.Provider value={{ variant, setHover, setView, resetCursor }}>
      {children}
    </CursorContext.Provider>
  )
}

export function useCursor() {
  const ctx = useContext(CursorContext)
  if (!ctx) throw new Error('useCursor must be used within a CursorProvider')
  return ctx
}
