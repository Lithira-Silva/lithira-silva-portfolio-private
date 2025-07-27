import { useState, useEffect, useRef } from 'react';
import { 
  HiAcademicCap, 
  HiLocationMarker, 
  HiCalendar
} from 'react-icons/hi';

const Education = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  const education = [
    {
      id: 1,
      degree: "BSc (Hons) in Information Technology",
      specialization: "Software Engineering & Development",
      institution: "Sri Lanka Institute of Information Technology",
      shortInstitution: "SLIIT",
      duration: "2022 - Present",
      location: "Sri Lanka",
      status: "In Progress",
      progress: 75,
      level: "Undergraduate Program",
      logo: "/images/schools/sliit-logo.png" // Add your SLIIT logo here
    },
    {
      id: 2,
      degree: "G.C.E. Advanced Level",
      specialization: "Commerce Stream (English Medium)",
      institution: "D. S. Senanayake College, Colombo",
      shortInstitution: "D.S. Senanayake College",
      duration: "2022/2023",
      location: "Colombo, Sri Lanka",
      status: "Completed",
      progress: 100,
      level: "Advanced Level Education",
      logo: "/images/schools/ds-senanayake-logo.png" // Add your D.S. Senanayake logo here
    },
    {
      id: 3,
      degree: "G.C.E. Ordinary Level",
      specialization: "General Education",
      institution: "I-GATE College, Thalawathugoda",
      shortInstitution: "I-GATE College",
      duration: "2019",
      location: "Thalawathugoda, Sri Lanka",
      status: "Completed",
      progress: 100,
      level: "Secondary Education",
      logo: "/images/schools/igate-logo.png" // Add your I-GATE logo here
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setTimeout(() => {
              setVisibleItems(prev => [...prev, index]);
            }, index * 200);
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = sectionRef.current?.querySelectorAll('.education-card');
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="education" ref={sectionRef} className="relative py-20 overflow-hidden bg-black">
      <div className="relative z-10 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Clean Header */}
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-3 px-5 py-2 mb-6 border rounded-full bg-white/5 border-white/10 backdrop-blur-sm">
            <HiAcademicCap className="w-4 h-4 text-secondary" />
            <span className="font-sans text-sm font-medium tracking-wide text-white">Education</span>
          </div>
          
          <h2 className="mb-4 text-4xl font-bold tracking-tight text-white md:text-5xl font-heading">
            Academic Journey
          </h2>
          
          <p className="max-w-2xl mx-auto font-sans text-lg leading-relaxed text-gray-300">
            Building expertise through continuous learning and academic excellence in technology and business.
          </p>
        </div>

        {/* Education Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-secondary/50 via-secondary/30 to-transparent hidden md:block"></div>
          
          <div className="space-y-8">
            {education.map((edu, index) => {
              const isVisible = visibleItems.includes(index);
              
              return (
                <div
                  key={edu.id}
                  data-index={index}
                  className={`education-card transform transition-all duration-700 ease-out ${
                    isVisible 
                      ? 'translate-y-0 opacity-100' 
                      : 'translate-y-8 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="relative group">
                    {/* Timeline Dot */}
                    <div className="absolute left-0 top-8 w-16 h-16 hidden md:flex items-center justify-center">
                      <div className="w-4 h-4 bg-secondary rounded-full border-4 border-black shadow-lg group-hover:scale-125 transition-transform duration-300"></div>
                    </div>
                    
                    {/* Card */}
                    <div className="md:ml-20 bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 hover:bg-white/8 group-hover:shadow-xl group-hover:shadow-white/5">
                      {/* Progress Bar */}
                      <div className="absolute top-0 left-0 right-0 h-1 bg-gray-800 rounded-t-2xl overflow-hidden">
                        <div 
                          className="h-full bg-secondary transition-all duration-1000 ease-out"
                          style={{ width: isVisible ? `${edu.progress}%` : '0%' }}
                        ></div>
                      </div>

                      {/* Header */}
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                        <div className="flex items-start gap-4 flex-1">
                          {/* School Logo */}
                          <div className="flex-shrink-0">
                            <div className="w-16 h-16 bg-white/10 rounded-xl border border-white/20 p-2 group-hover:bg-white/15 transition-all duration-300 overflow-hidden">
                              <img
                                src={edu.logo}
                                alt={`${edu.shortInstitution} logo`}
                                className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                                onError={(e) => {
                                  // Fallback to academic cap icon if logo fails to load
                                  const target = e.target as HTMLImageElement;
                                  target.style.display = 'none';
                                  const fallback = target.nextElementSibling as HTMLElement;
                                  if (fallback) fallback.style.display = 'flex';
                                }}
                              />
                              <div className="w-full h-full items-center justify-center hidden">
                                <HiAcademicCap className="w-8 h-8 text-secondary" />
                              </div>
                            </div>
                          </div>
                          
                          {/* Education Details */}
                          <div className="flex-1">
                            <h3 className="text-2xl font-bold text-white mb-2 font-heading group-hover:text-gray-100 transition-colors duration-300">
                              {edu.degree}
                            </h3>
                            <p className="text-secondary font-medium text-sm font-sans mb-1">
                              {edu.specialization}
                            </p>
                            <p className="text-gray-300 font-medium font-sans">
                              {edu.institution}
                            </p>
                            <p className="text-gray-500 text-sm font-sans mt-1">
                              {edu.level}
                            </p>
                          </div>
                        </div>
                        
                        <div className="text-right">
                          <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary/10 border border-secondary/20 rounded-full mb-2">
                            <div className={`w-2 h-2 rounded-full ${
                              edu.status === 'In Progress' ? 'bg-secondary animate-pulse' : 'bg-green-400'
                            }`}></div>
                            <span className="text-xs font-medium text-white font-sans">
                              {edu.status}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Meta Information */}
                      <div className="flex flex-wrap gap-6 text-sm">
                        <div className="flex items-center gap-2 text-gray-400 font-sans">
                          <HiCalendar className="w-4 h-4 text-secondary" />
                          <span>{edu.duration}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-400 font-sans">
                          <HiLocationMarker className="w-4 h-4 text-secondary" />
                          <span>{edu.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
