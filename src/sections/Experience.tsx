import React from 'react'
import { experiences } from '../data/portfolio'

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Experience
            </h2>
            <div className="w-20 h-1 bg-secondary mx-auto mb-4"></div>
            <p className="text-xl text-gray-300">
              My professional journey and achievements
            </p>
          </div>

          {/* Experience Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-secondary"></div>

            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className={`relative mb-12 md:mb-16 ${
                  index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 bg-secondary rounded-full border-4 border-black z-10"></div>

                {/* Content Card */}
                <div className="ml-12 md:ml-0 bg-gray-900 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-800">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {exp.title}
                    </h3>
                    <p className="text-lg text-secondary font-semibold mb-1">
                      {exp.company}
                    </p>
                    <p className="text-gray-300 mb-2">
                      {exp.location}
                    </p>
                    <p className="text-sm text-gray-400">
                      {exp.startDate} - {exp.endDate || 'Present'}
                    </p>
                  </div>

                  {/* Description */}
                  <ul className="space-y-2 mb-4">
                    {exp.description.map((item, i) => (
                      <li
                        key={i}
                        className="text-gray-300 flex items-start"
                      >
                        <span className="text-secondary mr-2 mt-1.5 w-2 h-2 bg-secondary rounded-full flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gray-800 text-secondary text-sm rounded-full border border-secondary/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
