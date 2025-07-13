import { useState } from 'react'
import Button from '../components/Button'
import { 
  HiMail, 
  HiPhone, 
  HiLocationMarker, 
  HiBriefcase,
  HiCode,
  HiChat,
  HiPhotograph,
  HiPaperAirplane
} from 'react-icons/hi'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    // Reset form
    setFormData({ name: '', email: '', message: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const contactInfo = [
    {
      icon: <HiMail className="w-6 h-6 text-secondary group-hover/item:text-secondary-light transition-colors duration-300" />,
      label: "Email",
      value: "lithira.silva@portfolio.dev",
      link: "mailto:lithira.silva@portfolio.dev"
    },
    {
      icon: <HiPhone className="w-6 h-6 text-secondary group-hover/item:text-secondary-light transition-colors duration-300" />,
      label: "Phone",
      value: "+1 (555) 123-4567",
      link: "tel:+15551234567"
    },
    {
      icon: <HiLocationMarker className="w-6 h-6 text-secondary group-hover/item:text-secondary-light transition-colors duration-300" />,
      label: "Location",
      value: "San Francisco, CA",
      link: "https://maps.google.com/?q=San+Francisco,+CA"
    },
    {
      icon: <HiBriefcase className="w-6 h-6 text-secondary group-hover/item:text-secondary-light transition-colors duration-300" />,
      label: "LinkedIn",
      value: "/in/lithirasilva",
      link: "https://linkedin.com/in/lithirasilva"
    }
  ]

  return (
    <section id="contact" className="py-20 bg-black relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-heading">
            Let's Work <span className="text-white">Together</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto hover:text-gray-200 transition-colors duration-300 font-sans leading-relaxed">
            Ready to bring your ideas to life? Get in touch and let's create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 hover:bg-white/8 hover:shadow-xl hover:shadow-white/10">
            <h3 className="text-2xl font-bold text-white mb-6 group-hover:text-gray-200 transition-colors duration-300 font-heading">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2 font-medium font-sans">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800/60 border border-gray-600/40 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/30 transition-all duration-300 hover:bg-gray-800/80 hover:border-secondary/40 backdrop-blur-sm font-sans"
                  placeholder="Lithira Silva"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2 font-medium font-sans">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800/60 border border-gray-600/40 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/30 transition-all duration-300 hover:bg-gray-800/80 hover:border-secondary/40 backdrop-blur-sm font-sans"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2 font-medium font-sans">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-800/60 border border-gray-600/40 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/30 transition-all duration-300 resize-none hover:bg-gray-800/80 hover:border-secondary/40 backdrop-blur-sm font-sans"
                  placeholder="Tell me about your project..."
                />
              </div>

              <Button
                type="submit"
                variant="primary"
                size="large"
                className="w-full"
              >
                <span className="flex items-center gap-2">
                  <HiPaperAirplane className="w-5 h-5" />
                  Send Message
                </span>
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 hover:bg-white/8 hover:shadow-xl hover:shadow-white/10">
              <h3 className="text-2xl font-bold text-white mb-6 group-hover:text-gray-200 transition-colors duration-300 font-heading">Get in Touch</h3>
              
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    target={info.link.startsWith('http') ? '_blank' : undefined}
                    rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-center p-4 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 hover:border-secondary/30 transition-all duration-300 group/item transform hover:scale-105 hover:shadow-lg hover:shadow-amber/10"
                  >
                    <div className="flex-shrink-0 mr-4 group-hover/item:scale-125 group-hover/item:rotate-12 transition-all duration-500">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm group-hover/item:text-gray-300 transition-colors duration-300 font-sans">{info.label}</p>
                      <p className="text-white font-medium group-hover/item:text-gray-200 transition-colors font-sans">
                        {info.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="group bg-gray-800/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-600/30 hover:border-secondary/40 transition-all duration-500 hover:bg-gray-800/80 hover:shadow-xl hover:shadow-amber/10">
              <h3 className="text-xl font-bold text-white mb-6 group-hover:text-secondary transition-colors duration-300 font-heading">Follow Me</h3>
              
              <div className="flex space-x-4">
                {[
                  { name: 'GitHub', icon: <HiCode className="w-5 h-5" />, link: 'https://github.com/lithirasilva' },
                  { name: 'Twitter', icon: <HiChat className="w-5 h-5" />, link: 'https://twitter.com/lithirasilva' },
                  { name: 'LinkedIn', icon: <HiBriefcase className="w-5 h-5" />, link: 'https://linkedin.com/in/lithirasilva' },
                  { name: 'Instagram', icon: <HiPhotograph className="w-5 h-5" />, link: 'https://instagram.com/lithirasilva' }
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gray-700/50 rounded-lg flex items-center justify-center text-secondary hover:bg-secondary hover:text-black transition-all duration-500 hover:shadow-lg hover:shadow-amber/30 border border-secondary/15 hover:border-secondary hover:scale-110 transform"
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
