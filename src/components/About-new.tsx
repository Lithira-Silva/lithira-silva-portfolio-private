import React from 'react'

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-transparent relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
              About Me
            </h2>
            <div className="w-20 h-1 bg-primary-500 mx-auto mb-4"></div>
            <p className="text-xl text-primary-500 font-semibold">Passionate Full Stack Developer</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Content - Order 1 on desktop, 2 on mobile */}
            <div className="space-y-6 order-2 md:order-1">
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed text-center md:text-left">
                I'm a dedicated full stack developer with a passion for creating exceptional digital experiences. 
                With expertise in modern web technologies, I love turning complex problems into simple, 
                beautiful, and intuitive solutions.
              </p>

              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed text-center md:text-left">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source 
                projects, or sharing knowledge with the developer community. I believe in continuous learning 
                and staying up-to-date with the latest industry trends.
              </p>

              {/* Download CV Button */}
              <div className="flex justify-center md:justify-start">
                <a
                  href="/cv.pdf"
                  download
                  className="inline-flex items-center px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
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
                <div className="w-72 h-72 rounded-full overflow-hidden shadow-2xl border-4 border-secondary/50 transition-transform duration-500 hover:scale-105 hover:shadow-secondary/30">
                  <div className="w-full h-full bg-gradient-to-br from-primary-100 to-primary-200 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center">
                    <div className="text-6xl font-bold text-primary-500">LS</div>
                  </div>
                </div>
                {/* Glowing effect on hover */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-secondary/20 to-secondary-hover/20 blur-xl opacity-0 hover:opacity-100 transition-opacity duration-500 -z-10"></div>
              </div>
            </div>
          </div>

          {/* Highlights Section */}
          <div className="mt-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gray-900/80 backdrop-blur-lg p-6 rounded-lg shadow-2xl text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-secondary/20 border border-white/10 hover:border-secondary/30">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-lg font-semibold text-white mb-2">3+ Years Experience</h3>
                <p className="text-gray-400 text-sm">Building modern web applications with cutting-edge technologies</p>
              </div>
              
              <div className="bg-gray-900/80 backdrop-blur-lg p-6 rounded-lg shadow-2xl text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-secondary/20 border border-white/10 hover:border-secondary/30">
                <div className="text-4xl mb-4">💼</div>
                <h3 className="text-lg font-semibold text-white mb-2">50+ Projects</h3>
                <p className="text-gray-400 text-sm">Successfully delivered projects ranging from startups to enterprise</p>
              </div>
              
              <div className="bg-gray-900/80 backdrop-blur-lg p-6 rounded-lg shadow-2xl text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-secondary/20 border border-white/10 hover:border-secondary/30">
                <div className="text-4xl mb-4">⭐</div>
                <h3 className="text-lg font-semibold text-white mb-2">100% Satisfaction</h3>
                <p className="text-gray-400 text-sm">Committed to delivering exceptional quality and client satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
