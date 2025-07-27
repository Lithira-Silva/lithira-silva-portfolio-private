import Button from '../components/Button';
import { HiCode, HiServer, HiColorSwatch, HiDocument, HiChat } from 'react-icons/hi';

const About = () => {
  const highlights = [
    {
      icon: <HiCode className="w-8 h-8 transition-colors duration-300 text-secondary group-hover:text-secondary-light" />,
      title: 'Frontend Development',
      description: 'Creating responsive and interactive user interfaces with modern frameworks'
    },
    {
      icon: <HiServer className="w-8 h-8 transition-colors duration-300 text-secondary group-hover:text-secondary-light" />,
      title: 'Backend Development',
      description: 'Building robust server-side applications and APIs'
    },
    {
      icon: <HiColorSwatch className="w-8 h-8 transition-colors duration-300 text-secondary group-hover:text-secondary-light" />,
      title: 'UI/UX Design',
      description: 'Designing user-centered experiences with attention to detail'
    }
  ];

  const downloadResume = () => {
    // Replace with your actual resume file path
    const resumeUrl = '/resume.pdf';
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Lithira-Silva-Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="py-20 bg-black">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <div>
              <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl font-heading">About Me</h2>
              <p className="mb-6 text-xl font-light text-gray-300 font-heading">Aspiring Full-Stack Developer & IT Undergraduate</p>
            </div>
            
            <p className="font-sans text-lg leading-relaxed text-gray-300">
              Aspiring Full-Stack Developer and current IT undergraduate at SLIIT, actively seeking internships in software 
              engineering, web and mobile application development, and cloud-based solutions. Skilled in Java, Python, C++, PHP, 
              JavaScript, and the MERN stack, with strong academic grounding in SDLC, OOP, responsive design, and server-side 
              scripting. Recognized for problem-solving, attention to detail, and database integration expertise. Eager to contribute to 
              real-world, collaborative projects in innovative technology environments.
            </p>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {highlights.map((highlight, index) => (
                <div key={index} className="relative p-6 overflow-hidden text-center transition-all duration-300 transform border border-white/10 rounded-xl hover:bg-white/5 group hover:border-secondary/40 hover:shadow-lg hover:shadow-secondary/20 hover:scale-[1.02] backdrop-blur-sm">
                  <div className="flex justify-center mb-4 transition-all duration-300 group-hover:scale-110 group-hover:text-secondary-light">{highlight.icon}</div>
                  <h3 className="mb-3 font-semibold text-white transition-colors duration-300 font-heading group-hover:text-secondary">{highlight.title}</h3>
                  <p className="font-sans text-sm leading-relaxed text-gray-400 transition-colors duration-300 group-hover:text-gray-300">{highlight.description}</p>
                  <div className="absolute inset-0 transition-opacity duration-300 opacity-0 rounded-xl bg-gradient-to-br from-secondary/10 via-secondary/5 to-transparent group-hover:opacity-100"></div>
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-secondary/20 to-secondary/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm"></div>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Button 
                onClick={downloadResume}
                className="transition-all duration-300 group hover:shadow-lg hover:shadow-secondary/20"
              >
                <span className="flex items-center gap-3">
                  <span className="font-medium">Download Resume</span>
                  <HiDocument className="w-4 h-4 text-black transition-transform duration-300 group-hover:translate-x-0.5" />
                </span>
              </Button>
              <Button 
                variant="outline" 
                onClick={scrollToContact}
                className="transition-all duration-300 group hover:shadow-lg hover:shadow-secondary/20"
              >
                <span className="flex items-center gap-3 transition-colors duration-300 group-hover:text-black">
                  <span className="font-medium">Let's Talk</span>
                  <HiChat className="w-4 h-4 transition-all duration-300 group-hover:text-black group-hover:scale-110" />
                </span>
              </Button>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative group">
              <img
                src="https://via.placeholder.com/280x280/666666/ffffff?text=Your+Photo"
                alt="Profile"
                className="object-cover transition-all duration-500 border-4 shadow-xl w-72 h-72 rounded-2xl border-white/20 group-hover:scale-[1.03] group-hover:shadow-2xl group-hover:shadow-white/10 group-hover:border-white/30"
              />
              <div className="absolute inset-0 transition-opacity duration-500 opacity-0 rounded-2xl bg-gradient-to-t from-black/20 via-transparent to-transparent group-hover:opacity-100"></div>
              <div className="absolute transition-all duration-500 opacity-0 -inset-1 bg-gradient-to-r from-secondary/30 to-secondary/10 rounded-2xl group-hover:opacity-100 -z-10 blur-md"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
