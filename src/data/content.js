import sentinelAppImage from '../assets/images/sentinel.png'
import agroCareImage from '../assets/images/agrocare.png'
import virtualArtGalleryImage from '../assets/images/art.png'
import focusFlowImage from '../assets/images/FocusFlow.png'
import qrGeneratorImage from '../assets/images/qr-generator.svg'

export const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Work', href: '#work' },
  { label: 'Journey', href: '#journey' },
  { label: 'Contact', href: '#contact' },
]

export const SKILLS = [
  { name: 'React', level: 88 },
  { name: 'JavaScript', level: 90 },
  { name: 'Python', level: 85 },
  { name: 'php', level: 76 },
  { name: 'Java', level: 78 },
  { name: 'HTML', level: 95 },
  { name: 'CSS', level: 92 },
  { name: 'SQL', level: 80 },
  { name: 'PostgreSQL', level: 72 },
  { name: 'FastAPI', level: 75 },
  { name: 'bootstrap', level: 76 },
  { name: 'MySQL', level: 72 },
]

export const PROJECTS = [
  {
    name: 'Sentinel-app',
    image: sentinelAppImage,
    tags: ['Python', 'ML', 'FastAPI', 'React','PostgreSQL'],
    tag: 'Security · ML',
    desc: 'A platform that applies machine learning to detect and classify cyber threats in real time, surfacing risk signals before they become incidents.',
    features: [
      'Real-time anomaly detection pipeline',
      'Threat classification dashboard',
      'Alerting for high-risk network events',
      'Extensible model training workflow',
    ],
    tech: ['Python', 'ML', 'FastAPI', 'React','postres'],
    github: 'https://github.com/nishpoojary/sentinel-app',
    demo: '#',
  },
  {
    name: 'AgroCare',
    image: agroCareImage,
    tags: ['php', 'html', 'sql', 'css'],
    tag: 'Agri-Tech',
    desc: 'An agri-tech application helping farmers monitor crop health and get actionable recommendations, bridging traditional farming with modern data tools.',
    features: [
      'Crop health monitoring dashboard',
      'Weather-aware recommendations',
      'Farmer-friendly multilingual UI',
      'Historical yield tracking',
    ],
    tech: ['php', 'html', 'sql', 'css'],
    github: 'https://github.com/nishpoojary/AgroCare',
    demo: '#',
  },
  {
    name: 'Virtual-art-gallery',
    image: virtualArtGalleryImage,
    tags: ['php', 'html', 'sql', 'css','javascript'],
    tag: 'gallery',
    desc: 'A virtual art gallery platform that allows artists to showcase their work in an immersive online environment, complete with interactive exhibits and artist profiles.',
   features: [
  'Wishlist management',
  'Artwork comments and feedback',
  'Artwork categorization and filtering',
  'User profile management',
],
    tech: ['php', 'html', 'sql', 'css','javascript'],
    github: 'https://github.com/nishpoojary/Virtual-art-gallery',
    demo: '#',
  },
  {
    name: 'FocusFlow App',
    image: focusFlowImage,
    tags: ['React', 'Flask','Python', 'bootstrap', 'JWT Auth'],
    tag: 'Productivity',
    desc: 'A task and focus-management app designed around real productivity habits — not just to-do lists, but structured, trackable progress.',
    features: [
      'Smart task prioritization',
      'Focus session timers',
      'Progress analytics',
      'Cross-device sync',
    ],
    tech: ['React', 'Flask','Python', 'bootstrap', 'JWT Auth'],
    github: 'https://github.com/nishpoojary/FocusFlow-App',
    demo: '#',
  },
  
  {
    name: 'QR Generator',
    image: qrGeneratorImage,
    tags: ['Python', 'Utility'],
    tag: 'Utility Tool',
    desc: 'A lightweight, fast utility for generating and customizing QR codes in bulk — built for simplicity and speed.',
    features: [
      'Bulk QR generation',
      'Custom styling & logo embedding',
      'Export to PNG/SVG',
      'Simple drag-and-drop UI',
    ],
    tech: ['Python', 'Flask', 'JavaScript'],
    github: 'https://github.com/nishpoojary/QR-generator',
    demo: '#',
  },
]

export const TIMELINE = [
   {
    year: '2025 — 2027',
    title: 'Master of Computer Applications (MCA)',
    desc: 'Deepened into full-stack development, databases, and systems thinking, while specializing interest toward security and networks.',
  },
  {
    year: '2022 — 2025',
    title: 'Bachelor of Computer Applications (BCA)',
    desc: 'Built the foundation — programming fundamentals, data structures, and a first real taste of software engineering.',
  },
  
  {
    year: '2020 — 2022',
    title: 'pre-University (pcmb)',
    desc: 'Formal certification in cryptographic principles underpinning secure systems.',
  },
 
]

export const ACHIEVEMENTS = [
  {
    icon: '01',
    year: '2026',
    title: 'NPTEL Cryptography Certification',
    desc: 'Completed a rigorous certification covering cryptographic theory and applied security principles.',
  },
  {
    icon: '02',
    year: '2026',
    title: 'Cybersecurity Training',
    desc: 'Hands-on training in network security, threat modeling, and defensive practices.',
  },
  {
    icon: '03',
    year: '2025',
    title: 'InnovateHack Award',
    desc: 'Recognized for building a functional, well-scoped solution under hackathon time constraints.',
  },
  {
    icon: '04',
    year: '2024',
    title: 'Smart India Hackathon — Participant',
    desc: 'Competed nationally, collaborating on a real-world problem statement end-to-end.',
  },
]

export const ABOUT_STATS = [
  { value: 12, label: 'Core Skills' },
  { value: 5, label: 'Projects Shipped' },
  { value: 2, label: 'Hackathons' },
]
