import Button from '../components/Button';
import { HiCode, HiServer, HiColorSwatch, HiDocument, HiChat } from 'react-icons/hi';

const About = () => {
  const highlights = [
    {
      icon: <HiCode className="w-8 h-8 text-secondary group-hover:text-secondary-light transition-colors duration-300" />,
      title: 'Frontend Development',
      description: 'Creating responsive and interactive user interfaces with modern frameworks'
    },
    {
      icon: <HiServer className="w-8 h-8 text-secondary group-hover:text-secondary-light transition-colors duration-300" />,
      title: 'Backend Development',
      description: 'Building robust server-side applications and APIs'
    },
    {
      icon: <HiColorSwatch className="w-8 h-8 text-secondary group-hover:text-secondary-light transition-colors duration-300" />,
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-heading">About Me</h2>
              <p className="text-xl text-gray-300 mb-6 font-heading font-light">Aspiring Full-Stack Developer & IT Undergraduate</p>
            </div>
            
            <p className="text-lg text-gray-300 leading-relaxed font-sans">
              Aspiring Full-Stack Developer and current IT undergraduate at SLIIT, actively seeking internships in software 
              engineering, web and mobile application development, and cloud-based solutions. Skilled in Java, Python, C++, PHP, 
              JavaScript, and the MERN stack, with strong academic grounding in SDLC, OOP, responsive design, and server-side 
              scripting. Recognized for problem-solving, attention to detail, and database integration expertise. Eager to contribute to 
              real-world, collaborative projects in innovative technology environments.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {highlights.map((highlight, index) => (
                <div key={index} className="text-center p-6 hover:bg-white/10 transition-all duration-500 group rounded-lg border border-transparent hover:border-secondary/30 hover:shadow-xl hover:shadow-secondary/10 transform hover:scale-105 hover:-translate-y-2 relative overflow-hidden">
                  <div className="flex justify-center mb-3 group-hover:scale-125 transition-transform duration-500">{highlight.icon}</div>
                  <h3 className="text-white font-semibold mb-2 font-heading group-hover:text-secondary transition-colors duration-300">{highlight.title}</h3>
                  <p className="text-gray-400 text-sm font-sans group-hover:text-gray-300 transition-colors duration-300">{highlight.description}</p>
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button onClick={downloadResume}>
                <span className="flex items-center gap-2">
                  Download Resume
                  <HiDocument className="w-4 h-4 text-black" />
                </span>
              </Button>
              <Button variant="outline" onClick={scrollToContact}>
                <span className="flex items-center gap-2 group-hover:text-black transition-colors duration-300">
                  Let's Talk
                  <HiChat className="w-4 h-4 group-hover:text-black transition-colors duration-300" />
                </span>
              </Button>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative group">
              <img
                src="https://via.placeholder.com/280x280/666666/ffffff?text=Your+Photo"
                alt="Profile"
                className="w-72 h-72 rounded-2xl object-cover shadow-2xl border-4 border-white/20 transition-all duration-500 group-hover:scale-105 group-hover:shadow-3xl group-hover:shadow-white/20 group-hover:border-white/40"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
