import { useState, useEffect, useRef } from 'react';
import { 
  HiAcademicCap, 
  HiLocationMarker, 
  HiTrendingUp,
  HiFire,
  HiLightningBolt,
  HiCalendar
} from 'react-icons/hi';

const Education = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  const education = [
    {
      id: 1,
      degree: "BSc (Hons) in Information Technology",
      shortTitle: "IT DEGREE",
      specialization: "Software Engineering & Development",
      institution: "SLIIT",
      fullInstitution: "Sri Lanka Institute of Information Technology",
      level: "Undergraduate Program",
      duration: "2022 - Present",
      location: "Sri Lanka",
      status: "In Progress",
      progress: 75,
      highlights: ["Software Engineering", "Web Development", "Database Systems", "Mobile Apps"],
      icon: HiTrendingUp,
      accentColor: "blue",
      type: "university"
    },
    {
      id: 2,
      degree: "G.C.E. Advanced Level",
      shortTitle: "A/L COMMERCE",
      specialization: "Commerce Stream (English Medium)",
      institution: "D.S. Senanayake College",
      fullInstitution: "D. S. Senanayake College, Colombo",
      level: "Advanced Level Education",
      duration: "2022/2023",
      location: "Colombo, Sri Lanka",
      status: "Completed",
      progress: 100,
      highlights: ["Accounting", "Economics", "ICT", "Business Studies"],
      icon: HiFire,
      accentColor: "green",
      type: "advanced"
    },
    {
      id: 3,
      degree: "G.C.E. Ordinary Level",
      shortTitle: "O/L FOUNDATION",
      specialization: "General Education",
      institution: "I-GATE College",
      fullInstitution: "I-GATE College, Thalawathugoda",
      level: "Secondary Education",
      duration: "2019",
      location: "Thalawathugoda, Sri Lanka",
      status: "Completed",
      progress: 100,
      highlights: ["Mathematics", "Science", "English", "ICT"],
      icon: HiLightningBolt,
      accentColor: "orange",
      type: "ordinary"
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
            }, index * 300);
          }
        });
      },
      { threshold: 0.2 }
    );

    const cards = sectionRef.current?.querySelectorAll('.education-card');
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const getAccentClasses = (color: string) => {
    const colorMap = {
      blue: {
        icon: 'bg-secondary',
        text: 'text-secondary',
        border: 'border-secondary/30',
        bg: 'bg-secondary/10',
        hover: 'hover:border-secondary',
        progress: 'bg-secondary'
      },
      green: {
        icon: 'bg-secondary',
        text: 'text-secondary',
        border: 'border-secondary/30',
        bg: 'bg-secondary/10',
        hover: 'hover:border-secondary',
        progress: 'bg-secondary'
      },
      orange: {
        icon: 'bg-secondary',
        text: 'text-secondary',
        border: 'border-secondary/30',
        bg: 'bg-secondary/10',
        hover: 'hover:border-secondary',
        progress: 'bg-secondary'
      }
    };
    return colorMap[color as keyof typeof colorMap];
  };

  return (
    <section id="education" ref={sectionRef} className="relative py-20 overflow-hidden bg-black">
      <div className="relative z-10 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Professional Header */}
        <div className="mb-20 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 mb-8 border rounded-full bg-white/10 border-white/20 backdrop-blur-sm">
            <HiAcademicCap className="w-5 h-5 text-white" />
            <span className="font-sans text-sm font-semibold tracking-wide text-white uppercase">Academic Background</span>
          </div>
          
          <h2 className="mb-6 text-5xl font-bold tracking-tight text-white md:text-6xl font-heading">
            Education
          </h2>
          
          <p className="max-w-3xl mx-auto font-sans text-lg leading-relaxed text-gray-300">
            Building a strong foundation through comprehensive academic excellence and 
            continuous learning in technology and business domains.
          </p>
        </div>

        {/* Education Cards */}
        <div className="grid grid-cols-1 gap-8 mb-16 lg:grid-cols-3">
          {education.map((edu, index) => {
            const isVisible = visibleItems.includes(index);
            const IconComponent = edu.icon;
            const colors = getAccentClasses(edu.accentColor);
            
            return (
              <div
                key={edu.id}
                data-index={index}
                className={`education-card transform transition-all duration-700 ${
                  isVisible 
                    ? 'translate-y-0 opacity-100 scale-100' 
                    : 'translate-y-10 opacity-0 scale-95'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Main Card */}
                <div className={`relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20 ${colors.hover} transition-all duration-500 hover:bg-white/10 hover:scale-[1.02] hover:-translate-y-2 hover:shadow-2xl hover:shadow-white/10 group`}>
                  
                  {/* Progress Bar */}
                  <div className="absolute top-0 left-0 right-0 h-1 overflow-hidden bg-gray-800 rounded-t-2xl">
                    <div 
                      className={`h-full ${colors.progress} transition-all duration-1500 ease-out group-hover:shadow-lg group-hover:shadow-white/30`}
                      style={{ width: isVisible ? `${edu.progress}%` : '0%' }}
                    ></div>
                  </div>

                  {/* Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-14 h-14 ${colors.icon} rounded-xl flex items-center justify-center group-hover:scale-125 group-hover:rotate-6 transition-all duration-500`}>
                      <IconComponent className="text-black w-7 h-7" />
                    </div>
                    <div className="text-right">
                      <div className={`text-xs font-bold ${colors.text} tracking-wider`}>
                        {edu.shortTitle}
                      </div>
                      <div className="text-xs text-gray-500">{edu.duration}</div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="mb-6">
                    <h3 className="mb-2 text-xl font-bold text-white transition-colors duration-300 group-hover:text-gray-100 font-heading">
                      {edu.degree}
                    </h3>
                    <p className={`${colors.text} font-medium mb-2 text-sm font-sans`}>{edu.specialization}</p>
                    <p className="font-sans font-medium text-gray-300">{edu.institution}</p>
                    <p className="mt-1 font-sans text-xs text-gray-500">{edu.level}</p>
                  </div>

                  {/* Meta Information */}
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2 font-sans text-gray-400">
                      <HiCalendar className="w-3 h-3" />
                      <span>{edu.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 font-sans text-gray-400">
                      <HiLocationMarker className="w-3 h-3" />
                      <span>{edu.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Education;
