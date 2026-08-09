export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  features: string[];
  githubUrl: string; // Placeholder
  liveUrl?: string; // Placeholder
  visualType: 'wish-wall' | 'pay' | 'hand-gesture' | 'ai-assistant';
}

export const projects: Project[] = [
  {
    id: 'garuda-wish-wall',
    title: 'Garuda Wish Wall',
    category: 'Full-Stack Development',
    description: 'Developed a full-stack social platform where users can securely post, manage, and explore anonymous wishes, focusing on user privacy and interactive design.',
    technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'JWT', 'REST API'],
    features: [
      'JWT Authentication & Authorization',
      'RESTful APIs with Express.js',
      'MongoDB Integration & Mongoose Schema design',
      'Full CRUD operations for wish posts',
      'Secure user session management',
      'Dynamic real-time content updates',
      'Responsive React interface with smooth feedback'
    ],
    githubUrl: 'PROJECT_GITHUB_URL',
    liveUrl: 'PROJECT_LIVE_URL',
    visualType: 'wish-wall'
  },
  {
    id: 'garuda-pay',
    title: 'Garuda Pay',
    category: 'Backend & Fintech',
    description: 'Developed a digital payment platform supporting wallet management, secure transactions, and money transfers between users.',
    technologies: ['Node.js', 'Express.js', 'MongoDB', 'JavaScript', 'REST API'],
    features: [
      'Wallet balance management & system ledger',
      'Transaction validation & atomic debit/credit operations',
      'Secure fund transfer APIs between verified wallets',
      'Receipt generation & history tracking',
      'Authentication APIs & session tokens',
      'Detailed transaction history query options',
      'User account settings & onboarding workflow'
    ],
    githubUrl: 'PROJECT_GITHUB_URL',
    visualType: 'pay'
  },
  {
    id: 'hand-gesture-recognition',
    title: 'Hand Gesture Recognition',
    category: 'Computer Vision & AI',
    description: 'Built a real-time computer vision application capable of recognizing multiple hand gestures and tracking hand landmarks in real-time.',
    technologies: ['Python', 'OpenCV', 'MediaPipe', 'NumPy'],
    features: [
      'High-fidelity hand landmark detection (21 points)',
      'Custom gesture recognition logic & action mapping',
      'Real-time webcam feed processing with low latency',
      'Optimized frame handling and multi-threading options',
      'Immersive human-computer interaction'
    ],
    githubUrl: 'PROJECT_GITHUB_URL',
    visualType: 'hand-gesture'
  },
  {
    id: 'ai-assistant',
    title: 'AI Assistant',
    category: 'AI & Automation',
    description: 'Developed a local desktop AI assistant capable of executing voice and text-based commands for productivity and system automation.',
    technologies: ['Python', 'Speech Recognition', 'Java', 'C++', 'OS Integration'],
    features: [
      'Voice command processing (Speech-to-Text)',
      'Speech synthesis response (Text-to-Speech)',
      'Web browser automation & quick searches',
      'Local system application launching',
      'Productivity command scripting',
      'Modular architecture for easy tool registration'
    ],
    githubUrl: 'PROJECT_GITHUB_URL',
    visualType: 'ai-assistant'
  }
];
