import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { emailjsConfig, validateEmailjsConfig } from '../config/emailjs'
import Button from '../components/Button'
import { 
  HiMail, 
  HiPhone, 
  HiLocationMarker, 
  HiBriefcase,
  HiPaperAirplane
} from 'react-icons/hi'
import { 
  FaGithub, 
  FaTwitter, 
  FaLinkedin, 
  FaInstagram 
} from 'react-icons/fa'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    
    // Validate EmailJS configuration
    if (!validateEmailjsConfig()) {
      setSubmitStatus('error')
      setIsSubmitting(false)
      return
    }
    
    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: emailjsConfig.recipientEmail
      }
      
      await emailjs.send(
        emailjsConfig.serviceId, 
        emailjsConfig.templateId, 
        templateParams, 
        emailjsConfig.publicKey
      )
      
      setSubmitStatus('success')
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      console.error('Failed to send email:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const contactInfo = [
    {
      icon: <HiMail className="w-6 h-6 transition-colors duration-300 text-secondary group-hover/item:text-secondary-light" />,
      label: "Email",
      value: "llithira3@gmail.com",
      link: "mailto:llithira3@gmail.com"
    },
    {
      icon: <HiPhone className="w-6 h-6 transition-colors duration-300 text-secondary group-hover/item:text-secondary-light" />,
      label: "Phone",
      value: "+94 70 209 3945",
      link: "tel:+94702093945"
    },
    {
      icon: <HiLocationMarker className="w-6 h-6 transition-colors duration-300 text-secondary group-hover/item:text-secondary-light" />,
      label: "Location",
      value: "Colombo, Sri Lanka",
      link: "https://maps.google.com/?q=Colombo,+Sri+Lanka"
    },
    {
      icon: <HiBriefcase className="w-6 h-6 transition-colors duration-300 text-secondary group-hover/item:text-secondary-light" />,
      label: "LinkedIn",
      value: "/in/lithirasilva",
      link: "https://linkedin.com/in/lithirasilva"
    }
  ]

  return (
    <section id="contact" className="relative py-20 overflow-hidden bg-black">
      <div className="container relative z-10 px-6 mx-auto">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl font-heading">
            Let's Work <span className="text-white">Together</span>
          </h2>
          <p className="max-w-2xl mx-auto font-sans text-lg leading-relaxed text-gray-300 transition-colors duration-300 hover:text-gray-200">
            Ready to bring your ideas to life? Get in touch and let's create something amazing together.
          </p>
        </div>

        <div className="grid max-w-6xl gap-12 mx-auto lg:grid-cols-2">
          {/* Contact Form */}
          <div className="p-8 transition-all duration-500 border group bg-white/5 backdrop-blur-sm rounded-2xl border-white/10 hover:border-white/20 hover:bg-white/8 hover:shadow-xl hover:shadow-white/10">
            <h3 className="mb-6 text-2xl font-bold text-white transition-colors duration-300 group-hover:text-gray-200 font-heading">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {submitStatus === 'success' && (
                <div className="relative p-6 bg-gradient-to-r from-green-500/10 via-green-400/10 to-emerald-500/10 border border-green-400/30 rounded-2xl font-sans backdrop-blur-sm overflow-hidden animate-in slide-in-from-top-2 duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-emerald-500/5 animate-pulse"></div>
                  <div className="relative flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center animate-bounce">
                        <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-green-300 font-semibold text-lg mb-1">Message Sent Successfully!</h4>
                      <p className="text-green-200/80 text-sm leading-relaxed">
                        Thank you for reaching out! I've received your message and will respond as soon as possible.
                      </p>
                    </div>
                  </div>
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 via-emerald-400 to-green-500 rounded-t-2xl"></div>
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="relative p-6 bg-gradient-to-r from-red-500/10 via-red-400/10 to-rose-500/10 border border-red-400/30 rounded-2xl font-sans backdrop-blur-sm overflow-hidden animate-in slide-in-from-top-2 duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-rose-500/5 animate-pulse"></div>
                  <div className="relative flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 bg-red-500/20 rounded-full flex items-center justify-center animate-pulse">
                        <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                        </svg>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-red-300 font-semibold text-lg mb-2">Message Failed to Send</h4>
                      <p className="text-red-200/80 text-sm leading-relaxed mb-3">
                        We encountered an issue sending your message. Please try again or reach out directly.
                      </p>
                      <div className="flex items-center space-x-3">
                        <a 
                          href="mailto:llithira3@gmail.com" 
                          className="inline-flex items-center space-x-2 px-4 py-2 bg-red-500/20 hover:bg-red-500/30 border border-red-400/40 hover:border-red-400/60 rounded-lg text-red-200 hover:text-red-100 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-red-500/20"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                          <span className="text-sm font-medium">Email Direct</span>
                        </a>
                        <button 
                          onClick={() => setSubmitStatus('idle')} 
                          className="inline-flex items-center space-x-2 px-4 py-2 bg-gray-500/20 hover:bg-gray-500/30 border border-gray-400/40 hover:border-gray-400/60 rounded-lg text-gray-200 hover:text-gray-100 transition-all duration-300 transform hover:scale-105"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                          </svg>
                          <span className="text-sm font-medium">Try Again</span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-400 via-rose-400 to-red-500 rounded-t-2xl"></div>
                </div>
              )}
              
              <div>
                <label htmlFor="name" className="block mb-2 font-sans font-medium text-gray-300">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 font-sans text-white placeholder-gray-400 transition-all duration-300 border rounded-lg bg-gray-800/60 border-gray-600/40 focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/30 hover:bg-gray-800/80 hover:border-secondary/40 backdrop-blur-sm disabled:opacity-50 disabled:cursor-not-allowed focus:scale-[1.02] focus:shadow-lg focus:shadow-secondary/10"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-2 font-sans font-medium text-gray-300">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 font-sans text-white placeholder-gray-400 transition-all duration-300 border rounded-lg bg-gray-800/60 border-gray-600/40 focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/30 hover:bg-gray-800/80 hover:border-secondary/40 backdrop-blur-sm disabled:opacity-50 disabled:cursor-not-allowed focus:scale-[1.02] focus:shadow-lg focus:shadow-secondary/10"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-2 font-sans font-medium text-gray-300">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 font-sans text-white placeholder-gray-400 transition-all duration-300 border rounded-lg resize-none bg-gray-800/60 border-gray-600/40 focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/30 hover:bg-gray-800/80 hover:border-secondary/40 backdrop-blur-sm disabled:opacity-50 disabled:cursor-not-allowed focus:scale-[1.02] focus:shadow-lg focus:shadow-secondary/10"
                  placeholder="Tell me about your project, goals, or how we can work together..."
                />
              </div>

              <Button
                type="submit"
                variant="primary"
                size="large"
                className={`w-full transition-all duration-300 transform ${isSubmitting ? 'scale-95' : 'hover:scale-105'} ${isSubmitting ? 'cursor-not-allowed' : ''}`}
                disabled={isSubmitting}
              >
                <span className="flex items-center justify-center gap-3">
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin"></div>
                      <span className="font-medium">Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <HiPaperAirplane className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                      <span className="font-medium">Send Message</span>
                    </>
                  )}
                </span>
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="p-8 transition-all duration-500 border group bg-white/5 backdrop-blur-sm rounded-2xl border-white/10 hover:border-white/20 hover:bg-white/8 hover:shadow-xl hover:shadow-white/10">
              <h3 className="mb-6 text-2xl font-bold text-white transition-colors duration-300 group-hover:text-gray-200 font-heading">Get in Touch</h3>
              
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    target={info.link.startsWith('http') ? '_blank' : undefined}
                    rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-center p-4 transition-all duration-300 transform border rounded-lg bg-white/5 border-white/10 hover:bg-white/10 hover:border-secondary/30 group/item hover:scale-105 hover:shadow-lg hover:shadow-amber/10"
                  >
                    <div className="flex-shrink-0 mr-4 transition-all duration-500 group-hover/item:scale-125 group-hover/item:rotate-12">
                      {info.icon}
                    </div>
                    <div>
                      <p className="font-sans text-sm text-gray-400 transition-colors duration-300 group-hover/item:text-gray-300">{info.label}</p>
                      <p className="font-sans font-medium text-white transition-colors group-hover/item:text-gray-200">
                        {info.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="p-8 transition-all duration-500 border group bg-gray-800/60 backdrop-blur-sm rounded-2xl border-gray-600/30 hover:border-secondary/40 hover:bg-gray-800/80 hover:shadow-xl hover:shadow-amber/10">
              <h3 className="mb-6 text-xl font-bold text-white transition-colors duration-300 group-hover:text-secondary font-heading">Follow Me</h3>
              
              <div className="flex space-x-4">
                {[
                  { name: 'GitHub', icon: <FaGithub className="w-5 h-5" />, link: 'https://github.com/lithirasilva' },
                  { name: 'Twitter', icon: <FaTwitter className="w-5 h-5" />, link: 'https://twitter.com/lithirasilva' },
                  { name: 'LinkedIn', icon: <FaLinkedin className="w-5 h-5" />, link: 'https://linkedin.com/in/lithirasilva' },
                  { name: 'Instagram', icon: <FaInstagram className="w-5 h-5" />, link: 'https://instagram.com/lithirasilva' }
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 transition-all duration-500 transform border rounded-lg bg-gray-700/50 text-secondary hover:bg-secondary hover:text-black hover:shadow-lg hover:shadow-amber/30 border-secondary/15 hover:border-secondary hover:scale-110"
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
