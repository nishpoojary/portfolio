import { FiArrowUp } from 'react-icons/fi'
import Magnetic from './Magnetic.jsx'

export default function Footer() {
  return (
    <footer>
      <div className="container footer-row">
        <p>© 2026 NISHMITHA N — DESIGNED &amp; BUILT WITH ❤️</p>
        <Magnetic tag="a" href="#top" className="footer-back" aria-label="Back to top">
          <FiArrowUp size={15} />
        </Magnetic>
      </div>
    </footer>
  )
}
