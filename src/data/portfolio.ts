export interface Project {
  id: string
  title: string
  description: string
  image: string
  tags: string[]
  demoUrl?: string
  githubUrl?: string
  category: 'frontend' | 'fullstack' | 'backend' | 'mobile'
}

export interface Experience {
  id: string
  title: string
  company: string
  location: string
  startDate: string
  endDate?: string
  description: string[]
  technologies: string[]
}

export interface Education {
  id: string
  degree: string
  institution: string
  location: string
  startDate: string
  endDate: string
  description?: string
  gpa?: string
}

export interface Skill {
  name: string
  level: number
  category: 'frontend' | 'backend' | 'tools' | 'other'
}

// Portfolio Data
export const projects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution built with React, Node.js, and MongoDB. Features include user authentication, payment integration, and admin dashboard.',
    image: '/projects/ecommerce.jpg',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe', 'TypeScript'],
    demoUrl: 'https://demo.example.com',
    githubUrl: 'https://github.com/example/ecommerce',
    category: 'fullstack'
  },
  {
    id: '2',
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
    image: '/projects/taskapp.jpg',
    tags: ['React', 'Firebase', 'Material-UI', 'Socket.io'],
    demoUrl: 'https://taskapp.example.com',
    githubUrl: 'https://github.com/example/taskapp',
    category: 'frontend'
  },
  {
    id: '3',
    title: 'Weather Dashboard',
    description: 'A responsive weather dashboard that displays current weather conditions and forecasts using external APIs.',
    image: '/projects/weather.jpg',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'OpenWeather API'],
    demoUrl: 'https://weather.example.com',
    githubUrl: 'https://github.com/example/weather',
    category: 'frontend'
  }
]

export const experiences: Experience[] = [
  {
    id: '1',
    title: 'Senior Full Stack Developer',
    company: 'Tech Solutions Inc.',
    location: 'Remote',
    startDate: '2022-01',
    description: [
      'Led development of multiple web applications using React, Node.js, and cloud technologies',
      'Mentored junior developers and conducted code reviews',
      'Implemented CI/CD pipelines and improved deployment processes',
      'Collaborated with cross-functional teams to deliver high-quality software solutions'
    ],
    technologies: ['React', 'Node.js', 'TypeScript', 'AWS', 'Docker', 'PostgreSQL']
  },
  {
    id: '2',
    title: 'Frontend Developer',
    company: 'Digital Agency',
    location: 'New York, NY',
    startDate: '2020-06',
    endDate: '2021-12',
    description: [
      'Developed responsive web applications for various clients',
      'Implemented modern UI/UX designs using React and CSS frameworks',
      'Optimized application performance and improved user experience',
      'Worked closely with designers and backend developers'
    ],
    technologies: ['React', 'JavaScript', 'CSS3', 'SASS', 'Webpack', 'Git']
  }
]

export const education: Education[] = [
  {
    id: '1',
    degree: 'Bachelor of Science in Computer Science',
    institution: 'University of Technology',
    location: 'Colombo, Sri Lanka',
    startDate: '2016-09',
    endDate: '2020-05',
    description: 'Focused on software engineering, data structures, and algorithms',
    gpa: '3.8'
  }
]

export const skills: Skill[] = [
  // Frontend
  { name: 'React', level: 95, category: 'frontend' },
  { name: 'TypeScript', level: 90, category: 'frontend' },
  { name: 'Next.js', level: 85, category: 'frontend' },
  { name: 'Tailwind CSS', level: 90, category: 'frontend' },
  { name: 'JavaScript', level: 95, category: 'frontend' },
  { name: 'HTML/CSS', level: 95, category: 'frontend' },
  
  // Backend
  { name: 'Node.js', level: 85, category: 'backend' },
  { name: 'Express.js', level: 80, category: 'backend' },
  { name: 'Python', level: 75, category: 'backend' },
  { name: 'PostgreSQL', level: 80, category: 'backend' },
  { name: 'MongoDB', level: 75, category: 'backend' },
  { name: 'REST APIs', level: 90, category: 'backend' },
  
  // Tools
  { name: 'Git', level: 90, category: 'tools' },
  { name: 'Docker', level: 75, category: 'tools' },
  { name: 'AWS', level: 70, category: 'tools' },
  { name: 'Figma', level: 80, category: 'tools' },
  { name: 'VS Code', level: 95, category: 'tools' },
  { name: 'Webpack', level: 75, category: 'tools' }
]
