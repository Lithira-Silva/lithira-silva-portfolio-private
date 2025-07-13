import { projects } from '../data/portfolio';
import { HiCode, HiExternalLink } from 'react-icons/hi';

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-heading">Featured Projects</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto font-sans hover:text-gray-200 transition-colors duration-300">
            Here are some of my recent projects that showcase my skills and passion for development. 
            Each project represents a unique challenge and learning opportunity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="group relative bg-white/5 border border-white/20 rounded-lg overflow-hidden hover:bg-white/10 transition-all duration-500 transform hover:scale-105 hover:-translate-y-4 hover:shadow-2xl hover:shadow-secondary/20 hover:border-secondary/40"
            >
              <div className="h-48 bg-gray-800 flex items-center justify-center relative overflow-hidden">
                {project.image ? (
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                ) : (
                  <span className="text-gray-400 font-sans group-hover:text-secondary transition-colors duration-300">{project.title}</span>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>              
              <div className="p-6 relative">
                <h3 className="text-xl font-semibold text-white mb-3 font-heading group-hover:text-secondary transition-colors duration-300">{project.title}</h3>
                <p className="text-gray-300 mb-4 font-sans leading-relaxed group-hover:text-gray-200 transition-colors duration-300">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tech: string, techIndex: number) => (
                    <span 
                      key={techIndex} 
                      className="px-3 py-1 bg-surface-200/50 text-accent text-sm rounded-full font-sans hover:bg-secondary/20 hover:text-secondary transition-all duration-300 cursor-default border border-surface-300/30 hover:border-secondary/40"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  {project.githubUrl && (
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 border border-secondary/45 text-secondary rounded-lg hover:bg-secondary hover:text-black transition-all duration-300 font-sans group/link shimmer-effect wave-effect"
                    >
                      <HiCode className="w-4 h-4 group-hover/link:scale-110 group-hover/link:text-black transition-all duration-300" />
                      Code
                    </a>
                  )}
                  {project.demoUrl && (
                    <a 
                      href={project.demoUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-secondary to-secondary-hover text-black rounded-lg hover:from-secondary-hover hover:to-secondary-active transition-all duration-300 font-sans shadow-lg shadow-secondary/30 group/link magnetic-hover wave-effect"
                    >
                      <HiExternalLink className="w-4 h-4 group-hover/link:scale-110 text-black transition-all duration-300" />
                      Live Demo
                    </a>
                  )}
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/10 via-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
