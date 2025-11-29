import { useState, useEffect } from 'react'
import emailjs from '@emailjs/browser'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState('')
  
  useEffect(() => {
    emailjs.init('SGvwjx4RlL3DcquHm')
  }, [])

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')

    try {
      const result = await emailjs.send(
        'service_747bz2u',
        'template_mopaok5',
        {
          your_name: formData.name,
          your_email: formData.email,
          your_message: formData.message,
          from_name: formData.name,
          from_email: formData.email,
          name: formData.name,
          email: formData.email,
          to_name: 'Richmond Asiedu'
        },
        'SGvwjx4RlL3DcquHm'
      )

      console.log('Success:', result)
      setIsSubmitted(true)
      setFormData({ name: '', email: '', message: '' })
      setTimeout(() => setIsSubmitted(false), 5000)
    } catch (error) {
      console.error('Error:', error)
      setError(`Error: ${error.text || error.message}`)
    } finally {
      setIsSubmitting(false)
    }
  }

  const socialLinks = [
    { name: 'LinkedIn', icon: 'fab fa-linkedin', url: 'https://www.linkedin.com/in/richmondasiedu' },
    { name: 'Instagram', icon: 'fab fa-instagram', url: 'https://instagram.com/loner7194' },
    { name: 'tiktok', icon: 'fab fa-tiktok', url: 'https://www.tiktok.com/@qweku.skippa?_t=ZM-8wnjARhTsCG&_r=1' },
    { name: 'GitHub', icon: 'fab fa-github', url: 'https://github.com/richie-asiedu' }
  ]

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <div className="contact-header">
          <h2 className="contact-title">
            <span className="title-accent">Let's</span> Connect
          </h2>
          <p className="contact-subtitle">
            Ready to bring your ideas to life? I'd love to hear from you!
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-card">
              <div className="info-icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div className="info-content">
                <h3>Location</h3>
                <p>Labadi, Accra</p>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <div className="info-content">
                <h3>Email</h3>
                <p>richieasiedu19@gmail.com</p>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <i className="fas fa-phone"></i>
              </div>
              <div className="info-content">
                <h3>Phone</h3>
                <p>+233 532700248</p>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <i className="fas fa-clock"></i>
              </div>
              <div className="info-content">
                <h3>Available</h3>
                <p>Active 24hrs</p>
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <div className="input-wrapper">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="form-input"
                  />
                  <label className="form-label">Your Name</label>
                  <div className="input-line"></div>
                </div>
              </div>

              <div className="form-group">
                <div className="input-wrapper">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="form-input"
                  />
                  <label className="form-label">Your Email</label>
                  <div className="input-line"></div>
                </div>
              </div>

              <div className="form-group">
                <div className="input-wrapper">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="form-textarea"
                    rows="5"
                  ></textarea>
                  <label className="form-label">Your Message</label>
                  <div className="input-line"></div>
                </div>
              </div>

              <button 
                type="submit" 
                className={`submit-btn ${isSubmitting ? 'submitting' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="spinner"></span>
                    Sending...
                  </>
                ) : (
                  <>
                    <i className="fas fa-paper-plane"></i>
                    Send Message
                  </>
                )}
              </button>
            </form>

            {error && (
              <div className="error-message">
                <i className="fas fa-exclamation-circle"></i>
                <p>{error}</p>
              </div>
            )}

            {isSubmitted && (
              <div className="success-message">
                <i className="fas fa-check-circle"></i>
                <p>Message sent successfully! I'll get back to you soon.</p>
              </div>
            )}
          </div>
        </div>

        <div className="social-links">
          <h3>Follow Me</h3>
          <div className="social-icons">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label={social.name}
              >
                <i className={social.icon}></i>
              </a>
            ))}
          </div>
        </div>

        <div className="floating-elements">
          <div className="floating-circle circle-1"></div>
          <div className="floating-circle circle-2"></div>
          <div className="floating-circle circle-3"></div>
          <div className="floating-square square-1"></div>
          <div className="floating-square square-2"></div>
        </div>
      </div>
    </section>
  )
}

export default Contact