import React from 'react'

const About: React.FC = () => {
  return (
    <section id="about" className="relative py-24 bg-transparent">
      <div className="container px-6 mx-auto">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-4xl font-bold text-gray-800 md:text-5xl dark:text-white">
              About Me
            </h2>
            <div className="w-20 h-1 mx-auto mb-4 bg-primary-500"></div>
            <p className="text-xl font-semibold text-primary-500">Passionate Full Stack Developer</p>
          </div>

          <div className="grid items-center grid-cols-1 gap-12 md:grid-cols-2 lg:gap-16">
            {/* Content - Order 1 on desktop, 2 on mobile */}
            <div className="order-2 space-y-6 md:order-1">
              <p className="text-lg leading-relaxed text-center text-gray-600 dark:text-gray-300 md:text-left">
                I'm a dedicated full stack developer with a passion for creating exceptional digital experiences. 
                With expertise in modern web technologies, I love turning complex problems into simple, 
                beautiful, and intuitive solutions.
              </p>

              <p className="text-lg leading-relaxed text-center text-gray-600 dark:text-gray-300 md:text-left">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source 
                projects, or sharing knowledge with the developer community. I believe in continuous learning 
                and staying up-to-date with the latest industry trends.
              </p>

              {/* Download CV Button */}
              <div className="flex justify-center md:justify-start">
                <a
                  href="/cv.pdf"
                  download
                  className="inline-flex items-center px-6 py-3 font-semibold text-white transition-all duration-300 transform rounded-lg shadow-lg bg-primary-500 hover:bg-primary-600 hover:scale-105 hover:shadow-xl"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download CV
                </a>
              </div>
            </div>

            {/* Profile Image - Order 2 on desktop, 1 on mobile */}
            <div className="flex justify-center order-1 md:order-2">
              <div className="relative">
                <div className="overflow-hidden transition-transform duration-500 border-4 rounded-full shadow-2xl w-72 h-72 border-secondary/50 hover:scale-105 hover:shadow-secondary/30">
                  <div className="flex items-center justify-center w-full h-full bg-gradient-to-br from-primary-100 to-primary-200 dark:from-gray-700 dark:to-gray-600">
                    <div className="text-6xl font-bold text-primary-500">LS</div>
                  </div>
                </div>
                {/* Glowing effect on hover */}
                <div className="absolute inset-0 transition-opacity duration-500 rounded-full opacity-0 bg-gradient-to-r from-secondary/20 to-secondary-hover/20 blur-xl hover:opacity-100 -z-10"></div>
              </div>
            </div>
          </div>

          {/* Highlights Section */}
          <div className="mt-16">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="p-6 text-center transition-all duration-300 border rounded-lg shadow-2xl bg-gray-900/80 backdrop-blur-lg hover:-translate-y-2 hover:shadow-secondary/20 border-white/10 hover:border-secondary/30">
                <div className="mb-4 text-4xl">🚀</div>
                <h3 className="mb-2 text-lg font-semibold text-white">3+ Years Experience</h3>
                <p className="text-sm text-gray-400">Building modern web applications with cutting-edge technologies</p>
              </div>
              
              <div className="p-6 text-center transition-all duration-300 border rounded-lg shadow-2xl bg-gray-900/80 backdrop-blur-lg hover:-translate-y-2 hover:shadow-secondary/20 border-white/10 hover:border-secondary/30">
                <div className="mb-4 text-4xl">💼</div>
                <h3 className="mb-2 text-lg font-semibold text-white">50+ Projects</h3>
                <p className="text-sm text-gray-400">Successfully delivered projects ranging from startups to enterprise</p>
              </div>
              
              <div className="p-6 text-center transition-all duration-300 border rounded-lg shadow-2xl bg-gray-900/80 backdrop-blur-lg hover:-translate-y-2 hover:shadow-secondary/20 border-white/10 hover:border-secondary/30">
                <div className="mb-4 text-4xl">⭐</div>
                <h3 className="mb-2 text-lg font-semibold text-white">100% Satisfaction</h3>
                <p className="text-sm text-gray-400">Committed to delivering exceptional quality and client satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
