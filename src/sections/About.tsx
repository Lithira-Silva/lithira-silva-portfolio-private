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
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-heading">About Me</h2>
          <p className="text-xl text-contrast-soft mb-12 font-heading font-light opacity-90">Passionate Developer Creating Digital Solutions</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <p className="text-lg text-contrast-soft leading-relaxed font-sans opacity-90">
              I'm a passionate full-stack developer with expertise in modern web technologies. 
              I love creating beautiful, functional, and user-friendly applications that solve real-world problems.
              My journey in development has been driven by curiosity and a constant desire to learn and improve.
            </p>
            
            <p className="text-lg text-contrast-soft leading-relaxed font-sans opacity-90">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
              or sharing knowledge with the developer community. I believe in writing clean, maintainable code
              and creating exceptional user experiences.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {highlights.map((highlight, index) => (
                <div key={index} className="text-center p-6 bg-white/5 border border-white/20 rounded-lg hover:bg-white/10 transition-all duration-500 group hover:border-secondary/40 hover:shadow-xl hover:shadow-secondary/20 transform hover:scale-105 hover:-translate-y-2 relative overflow-hidden">
                  <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">{highlight.icon}</div>
                  <h3 className="text-white font-semibold mb-2 font-heading group-hover:text-secondary transition-colors duration-300">{highlight.title}</h3>
                  <p className="text-gray-400 text-sm font-sans group-hover:text-gray-300 transition-colors duration-300">{highlight.description}</p>
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/10 via-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button onClick={downloadResume}>
                <span className="flex items-center gap-2">
                  <HiDocument className="w-4 h-4" />
                  Download Resume
                </span>
              </Button>
              <Button variant="outline" onClick={scrollToContact}>
                <span className="flex items-center gap-2">
                  <HiChat className="w-4 h-4" />
                  Let's Talk
                </span>
              </Button>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative group">
              <div className="w-80 h-80 rounded-full overflow-hidden shadow-2xl border-4 border-secondary/50 transition-all duration-500 group-hover:scale-105 group-hover:shadow-secondary/30 group-hover:border-secondary/70">
                <img
                  src="/images/profile/pro%20pic.jpg"
                  alt="Lithira Silva - Profile Photo"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    // Fallback to placeholder if image fails to load
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const fallback = target.nextElementSibling as HTMLElement;
                    if (fallback) fallback.style.display = 'flex';
                  }}
                />
                <div className="w-full h-full bg-gradient-to-br from-primary-100 to-primary-200 dark:from-gray-700 dark:to-gray-600 items-center justify-center hidden">
                  <span className="text-gray-500 dark:text-gray-400 text-lg font-sans">Profile Photo</span>
                </div>
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-secondary/20 to-secondary-hover/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
