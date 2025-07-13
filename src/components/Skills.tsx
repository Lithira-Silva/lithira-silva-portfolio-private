import React from 'react'

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', level: 95, icon: '⚛️' },
        { name: 'TypeScript', level: 90, icon: '📘' },
        { name: 'Next.js', level: 88, icon: '▲' },
        { name: 'Tailwind CSS', level: 92, icon: '🎨' },
        { name: 'Vue.js', level: 85, icon: '💚' },
        { name: 'JavaScript', level: 95, icon: '🟨' },
      ],
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 90, icon: '🟢' },
        { name: 'Express.js', level: 88, icon: '🚀' },
        { name: 'Python', level: 85, icon: '🐍' },
        { name: 'PostgreSQL', level: 82, icon: '🐘' },
        { name: 'MongoDB', level: 80, icon: '🍃' },
        { name: 'GraphQL', level: 78, icon: '📊' },
      ],
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Git', level: 90, icon: '🔧' },
        { name: 'Docker', level: 75, icon: '🐳' },
        { name: 'AWS', level: 70, icon: '☁️' },
        { name: 'Figma', level: 85, icon: '🎨' },
        { name: 'Jest', level: 80, icon: '🧪' },
        { name: 'Linux', level: 75, icon: '🐧' },
      ],
    },
  ]

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
              Skills & Technologies
            </h2>
            <div className="w-20 h-1 bg-primary-500 mx-auto mb-4"></div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Here are the technologies and tools I work with to bring ideas to life
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={category.title}
                className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 text-center">
                  {category.title}
                </h3>
                
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name} className="skill-item">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-3">
                          <span className="text-2xl">{skill.icon}</span>
                          <span className="font-semibold text-gray-700 dark:text-gray-300">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-sm font-medium text-primary-500">
                          {skill.level}%
                        </span>
                      </div>
                      
                      {/* Progress Bar */}
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                        <div
                          className="bg-gradient-to-r from-primary-500 to-secondary-hover h-3 rounded-full transition-all duration-1000 ease-out"
                          style={{
                            width: `${skill.level}%`,
                            animationDelay: `${(categoryIndex * 6 + skillIndex) * 0.1}s`,
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-primary-50 to-primary-100 dark:from-gray-800 dark:to-gray-700 rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                Always Learning
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                The tech world is constantly evolving, and so am I. I'm always exploring new technologies, 
                frameworks, and best practices to stay at the forefront of web development.
              </p>
              
              {/* Current Learning */}
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                {['Rust', 'Web3', 'Machine Learning', 'DevOps'].map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-primary-100 dark:bg-gray-600 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium"
                  >
                    Currently exploring: {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
