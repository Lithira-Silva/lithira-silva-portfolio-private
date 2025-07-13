import React, { useState } from 'react'

interface Project {
  id: number
  title: string
  description: string
  longDescription: string
  technologies: string[]
  image: string
  liveUrl: string
  githubUrl: string
  category: string
}

const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with modern design and seamless user experience.',
      longDescription: 'A complete e-commerce platform built with React, Node.js, and PostgreSQL. Features include user authentication, product catalog, shopping cart, payment integration, and admin dashboard.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Tailwind CSS'],
      image: '/api/placeholder/600/400',
      liveUrl: 'https://example-ecommerce.com',
      githubUrl: 'https://github.com/lithirasilva/ecommerce',
      category: 'fullstack',
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates and team features.',
      longDescription: 'A comprehensive task management solution with drag-and-drop functionality, real-time collaboration, file attachments, and progress tracking. Built for teams of any size.',
      technologies: ['Vue.js', 'Express.js', 'MongoDB', 'Socket.io', 'Vuetify'],
      image: '/api/placeholder/600/400',
      liveUrl: 'https://example-tasks.com',
      githubUrl: 'https://github.com/lithirasilva/task-manager',
      category: 'fullstack',
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A beautiful weather dashboard with detailed forecasts and interactive maps.',
      longDescription: 'An intuitive weather application providing current conditions, 7-day forecasts, weather maps, and alerts. Features location-based services and responsive design.',
      technologies: ['React', 'TypeScript', 'Weather API', 'Chart.js', 'Styled Components'],
      image: '/api/placeholder/600/400',
      liveUrl: 'https://example-weather.com',
      githubUrl: 'https://github.com/lithirasilva/weather-app',
      category: 'frontend',
    },
    {
      id: 4,
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website showcasing projects and skills.',
      longDescription: 'A personal portfolio website built with the latest web technologies. Features smooth animations, dark mode, responsive design, and optimized performance.',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      image: '/api/placeholder/600/400',
      liveUrl: 'https://lithirasilva.com',
      githubUrl: 'https://github.com/lithirasilva/portfolio',
      category: 'frontend',
    },
    {
      id: 5,
      title: 'API Gateway Service',
      description: 'A microservices API gateway with authentication and rate limiting.',
      longDescription: 'A robust API gateway service handling authentication, rate limiting, request routing, and monitoring for microservices architecture. Built with scalability in mind.',
      technologies: ['Node.js', 'Express.js', 'Redis', 'JWT', 'Docker'],
      image: '/api/placeholder/600/400',
      liveUrl: '',
      githubUrl: 'https://github.com/lithirasilva/api-gateway',
      category: 'backend',
    },
    {
      id: 6,
      title: 'Chat Application',
      description: 'Real-time chat application with rooms, file sharing, and emoji support.',
      longDescription: 'A feature-rich chat application supporting real-time messaging, chat rooms, file sharing, emoji reactions, and user presence indicators. Built for scalability and performance.',
      technologies: ['React', 'Socket.io', 'Node.js', 'MongoDB', 'Cloudinary'],
      image: '/api/placeholder/600/400',
      liveUrl: 'https://example-chat.com',
      githubUrl: 'https://github.com/lithirasilva/chat-app',
      category: 'fullstack',
    },
  ]

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
  ]

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory)

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
              Featured Projects
            </h2>
            <div className="w-20 h-1 bg-primary-500 mx-auto mb-4"></div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Here are some of my recent projects that showcase my skills and creativity
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-primary-500 text-white shadow-lg'
                    : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-gray-600'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white dark:bg-gray-700 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden"
              >
                {/* Project Image */}
                <div className="aspect-video bg-gradient-to-br from-primary-100 to-primary-200 dark:from-gray-600 dark:to-gray-500 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center text-4xl font-bold text-primary-500">
                    {project.title.charAt(0)}
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary-100 dark:bg-gray-600 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-3 py-1 bg-gray-100 dark:bg-gray-600 text-gray-600 dark:text-gray-300 rounded-full text-sm">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-primary-500 hover:bg-primary-600 text-white text-center py-2 rounded-lg font-semibold transition-colors duration-200"
                      >
                        Live Demo
                      </a>
                    )}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white text-center py-2 rounded-lg font-semibold transition-all duration-200"
                    >
                      GitHub
                    </a>
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="px-4 py-2 bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-500 rounded-lg transition-colors duration-200"
                    >
                      Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Project Detail Modal */}
          {selectedProject && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
              <div className="bg-white dark:bg-gray-800 rounded-xl max-w-2xl w-full max-h-90vh overflow-y-auto">
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                      {selectedProject.title}
                    </h3>
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {selectedProject.longDescription}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-primary-100 dark:bg-gray-600 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3">
                    {selectedProject.liveUrl && (
                      <a
                        href={selectedProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-primary-500 hover:bg-primary-600 text-white text-center py-3 rounded-lg font-semibold transition-colors duration-200"
                      >
                        View Live Demo
                      </a>
                    )}
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white text-center py-3 rounded-lg font-semibold transition-all duration-200"
                    >
                      View Source Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Projects
