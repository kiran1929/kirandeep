export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  features: string[];
  githubUrl?: string;
  liveUrl?: string;
  visualType: 'internscope' | 'wish-wall' | 'team-portfolio' | 'hand-gesture' | 'ai-assistant';
}

export const projects: Project[] = [
  {
    id: 'internscope-ai',
    title: 'InternScope AI',
    category: 'Full-Stack & AI',
    description: 'Co-built an AI-driven internship discovery platform that monitors 86+ tech career pages, scores resume match, and sends alerts before applications close.',
    technologies: ['Next.js', 'Prisma', 'PostgreSQL', 'Trigger.dev', 'Clerk', 'Vercel'],
    features: [
      'Internship listings aggregated from Greenhouse, Lever, Ashby, SmartRecruiters, and Workday',
      'Automated twice-daily sync pipelines with Trigger.dev',
      'Clerk authentication on a Next.js / Prisma / Neon Postgres stack',
      'AI resume match-scoring with ATS keyword suggestions',
      'AI mock-interview module with STAR-format feedback',
      'Application tracking dashboard',
      'Pitched for the Razorpay Buildathon'
    ],
    githubUrl: 'https://github.com/kiran1929/internscope-ai',
    liveUrl: 'https://internscope-ai.vercel.app/',
    visualType: 'internscope'
  },
  {
    id: 'garuda-wish-wall',
    title: 'Garuda Wish Wall',
    category: 'Full-Stack Development',
    description: 'A social platform where users can securely post, manage, and explore anonymous wishes, with JWT authentication, REST APIs, and a responsive MERN stack UI.',
    technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'JWT', 'REST API'],
    features: [
      'JWT Authentication & Authorization',
      'RESTful APIs with Express.js',
      'MongoDB Integration & Mongoose Schema design',
      'Full CRUD operations for wish posts',
      'Secure user session management',
      'Dynamic real-time content updates',
      'Responsive React interface deployed on Vercel'
    ],
    githubUrl: 'https://github.com/kiran1929/garuda-wish-wall-latest',
    liveUrl: 'https://garuda-wish-wall-latest.vercel.app/',
    visualType: 'wish-wall'
  },
  {
    id: 'team-portfolio',
    title: 'DevForge Team Portfolio',
    category: 'Frontend Development',
    description: 'Team website for DevForge, a six-developer student collective showcasing members, projects, and contact — with dark/light theme and a fully responsive layout.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Git', 'Vercel'],
    features: [
      'Multi-page layout: Home, About, Team, Projects, Contact',
      'Dark and light theme toggle',
      'Team member profiles and project showcase filters',
      'Responsive navigation for mobile and desktop',
      'Contact form with GitHub and LinkedIn links'
    ],
    githubUrl: 'https://github.com/kiran1929/Team-portfolio',
    liveUrl: 'https://team-portfolio-ebon-omega.vercel.app/',
    visualType: 'team-portfolio'
  },
  {
    id: 'hand-gesture-recognition',
    title: 'Hand Gesture Recognition',
    category: 'Computer Vision & AI',
    description: 'A real-time computer vision application that recognizes multiple hand gestures from webcam input using OpenCV and MediaPipe landmark detection.',
    technologies: ['Python', 'OpenCV', 'MediaPipe', 'NumPy'],
    features: [
      'High-fidelity hand landmark detection (21 points)',
      'Custom gesture recognition logic & action mapping',
      'Real-time webcam feed processing with low latency',
      'Optimized frame handling for smooth recognition',
      'Explored gesture-based HCI and automation patterns'
    ],
    visualType: 'hand-gesture'
  },
  {
    id: 'ai-assistant',
    title: 'AI Assistant',
    category: 'AI & Automation',
    description: 'Voice-enabled desktop assistant that executes voice and text commands for speech recognition, text-to-speech, web automation, app launching, and search.',
    technologies: ['Python', 'Speech Recognition', 'Java', 'C++'],
    features: [
      'Voice command processing (Speech-to-Text)',
      'Speech synthesis response (Text-to-Speech)',
      'Web browser automation & quick searches',
      'Local system application launching',
      'Modular Java/C++ architecture for future AI features'
    ],
    githubUrl: 'https://github.com/kiran1929/voice-assistant',
    visualType: 'ai-assistant'
  }
];
