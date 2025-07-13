import { skills } from '../data/portfolio';

const Skills = () => {
  const categoryTitles = {
    frontend: 'Frontend Development',
    backend: 'Backend Development',
    tools: 'Tools & Technologies',
    other: 'Other Skills'
  };

  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  return (
    <section id="skills" className="py-20 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-heading">Skills & Technologies</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto font-sans leading-relaxed">
            Here are the technologies and tools I work with to bring ideas to life. 
            I'm always learning and expanding my skillset to stay current with industry trends.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skillsByCategory).map(([category, categorySkills]) => (
            <div key={category} className="bg-white/5 border border-white/20 rounded-lg p-6 hover:bg-white/10 transition-all duration-300 hover:border-secondary/40 hover:shadow-xl hover:shadow-secondary/20">
              <div className="flex items-center gap-3 mb-6">
                <h3 className="text-xl font-heading font-semibold text-white">
                  {categoryTitles[category as keyof typeof categoryTitles]}
                </h3>
              </div>
              
              <div className="space-y-4">
                {categorySkills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 font-sans font-medium">{skill.name}</span>
                      <span className="text-secondary font-sans text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-secondary to-secondary-hover h-2 rounded-full transition-all duration-700 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
