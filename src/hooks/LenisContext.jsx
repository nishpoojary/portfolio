import { createContext, useContext } from 'react'
import useLenis from './useLenis.js'

const LenisContext = createContext(null)

export function LenisProvider({ children }) {
  const lenisRef = useLenis()
  return <LenisContext.Provider value={lenisRef}>{children}</LenisContext.Provider>
}

export function useLenisInstance() {
  return useContext(LenisContext)
}
