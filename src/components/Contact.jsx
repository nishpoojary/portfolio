import { useState } from 'react'
import { FiMail, FiGithub, FiLinkedin } from 'react-icons/fi'
import Reveal from './Reveal.jsx'
import Magnetic from './Magnetic.jsx'

const CONTACT_LINKS = [
  { 
    label: 'Email', 
    value: 'nishpoojary97@gmail.com', 
    href: 'mailto:nishpoojary97@gmail.com', 
    icon: FiMail 
  },
  { label: 'Github', value: 'github.com/nishmitha-n', href: 'https://github.com/nishpoojary', icon: FiGithub },
  { label: 'LinkedIn', value: 'in/nishmitha-n', href: 'https://linkedin.com/in/nishpoojari', icon: FiLinkedin },
]

function validate(field, value) {
  if (field === 'name') return value.trim().length < 2 ? 'Please enter your name.' : ''
  if (field === 'email') return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? '' : 'Please enter a valid email address.'
  if (field === 'message') return value.trim().length < 6 ? 'Message is a little short.' : ''
  return ''
}

export default function Contact() {
  const [values, setValues] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (field) => (e) => {
    const v = e.target.value
    setValues((s) => ({ ...s, [field]: v }))
    setErrors((s) => ({ ...s, [field]: validate(field, v) }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const nextErrors = {
      name: validate('name', values.name),
      email: validate('email', values.email),
      message: validate('message', values.message),
    }
    setErrors(nextErrors)

    if (Object.values(nextErrors).some(Boolean)) {
      setStatus('Please fix the fields above.')
      return
    }

    setIsSubmitting(true)
    setStatus('Sending…')

    try {
      const response = await fetch('https://formspree.io/f/xgawlpon', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(values),
      })

      if (response.ok) {
        setStatus(`Thanks, ${values.name.split(' ')[0]} — your message has been sent. I'll reply at ${values.email} soon.`)
        setValues({ name: '', email: '', message: '' })
      } else {
        setStatus('Oops! There was a problem sending your message. Please try again.')
      }
    } catch (error) {
      setStatus('Network error. Please check your connection and try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="section" id="contact">
      <div className="container contact-grid">
        <div>
          <Reveal className="eyebrow">07 / Contact</Reveal>
          <Reveal type="up" delay={0.05} as="h2" className="contact-big">
            Let's build something worth shipping.
          </Reveal>

          <Reveal type="up" delay={0.1} className="contact-links">
            {CONTACT_LINKS.map(({ label, href, icon: Icon }) => (
              <Magnetic
                key={label}
                tag="a"
                href={href}
                target="_blank"
                rel="noreferrer"
                className="contact-social"
                aria-label={label}
                strength={0.15}
              >
                <Icon />
              </Magnetic>
            ))}
          </Reveal>
        </div>

        <Reveal type="up" delay={0.15} as="form" className="contact-form" onSubmit={handleSubmit} noValidate>
          <Field
            id="inputName"
            name="name"
            label="Your Name"
            type="text"
            value={values.name}
            onChange={handleChange('name')}
            error={errors.name}
          />
          <Field
            id="inputEmail"
            name="email"
            label="Your Email"
            type="email"
            value={values.email}
            onChange={handleChange('email')}
            error={errors.email}
          />
          <Field
            id="inputMessage"
            name="message"
            label="Your Message"
            as="textarea"
            rows={4}
            value={values.message}
            onChange={handleChange('message')}
            error={errors.message}
          />

          <Magnetic tag="button" type="submit" disabled={isSubmitting} className="btn btn-primary submit-btn">
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </Magnetic>
          <div className="form-status">{status}</div>
        </Reveal>
      </div>
    </section>
  )
}

function Field({ id, name, label, error, as = 'input', ...rest }) {
  const Tag = as
  return (
    <div className={`field ${error ? 'invalid' : ''}`}>
      <Tag id={id} name={name} placeholder=" " {...rest} />
      <label htmlFor={id}>{label}</label>
      <div className="field-line" />
      <small>{error}</small>
    </div>
  )
}