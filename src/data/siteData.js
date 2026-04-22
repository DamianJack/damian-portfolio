import {
  SiCplusplus,
  SiDocker,
  SiGooglemaps,
  SiJavascript,
  SiJenkins,
  SiKubernetes,
  SiLinux,
  SiMysql,
  SiOpenai,
  SiOpenjdk,
  SiOpencv,
  SiPython,
  SiTensorflow,
} from 'react-icons/si';
import { FaAws, FaGithub, FaLinkedin, FaPhone } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';

export const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
];

export const hero = {
  pretitle: 'AI & ML Engineer',
  title: 'Hi, I’m Damian. I build intelligent, data-driven software systems.',
  description:
    '',
  primaryLabel: 'See Projects',
  secondaryLabel: 'Let’s Chat',
  featured: {
    title: 'Current Focus',
    description:
      'Bridging AI research and real-world applications with scalable engineering and cloud optimization.',
  },
};

export const about = {
  heading: 'About Me',
  description:
    'Artificial Intelligence Master’s student with practical experience in machine learning, deep learning, and data-driven modeling, backed by 3 years of software development and automation experience. I am Damian, currently based in Würzburg, Germany, and pursuing my Master’s in Artificial Intelligence at THWS. I am passionate about building intelligent systems that are practical, reliable, and human-centered. I enjoy turning research ideas into deployable software and continuously improving my craft through real-world problem solving.',
  strengths: [
    { label: 'Who I am', text: 'AI-focused software engineer with a product mindset.' },
    { label: 'What I value', text: 'Clean implementation, collaboration, and meaningful outcomes.' },
    { label: 'Where I am', text: 'Würzburg, Germany.' },
    { label: 'What I seek', text: 'AI/ML roles where research meets real-world impact.' },
  ],
  quickFacts:
    'Languages: English (C1) · German (A2) · Tamil (Native)',
};

export const experienceItems = [
  {
    type: 'education',
    role: 'Master’s in Artificial Intelligence',
    org: 'Technische Hochschule Wurzburg-Schweinfurt, Germany',
    period: 'March 2026 - Present',
    points: [
      'Focused on machine learning, deep learning, and data-driven system design.',
      'Applying academic research in practical AI engineering workflows.',
    ],
  },
  {
    type: 'professional',
    role: 'Software Development Engineer',
    org: 'Broadridge Financial Solutions, Bangalore, India',
    period: 'July 2023 - March 2026',
    points: [
      'Integrated SAML for secure authentication and single sign-on capabilities.',
      'Implemented time-series forecasting for transfer log frequency and report arrival prediction.',
      'Automated workflows using Python, C++ and scripting, improving operational efficiency.',
      'Optimized AWS infrastructure and reduced storage cost by 68%.',
    ],
  },
  {
    type: 'professional',
    role: 'Software Development Engineer Intern',
    org: 'Broadridge Financial Solutions, Bangalore, India',
    period: 'January 2023 - June 2023',
    points: [
      'Developed Splunk dashboards for real-time log analysis and system monitoring.',
      'Integrated external APIs to extend product functionality.',
      'Contributed to reliability improvements in enterprise workflow systems.',
    ],
  },
  {
    type: 'education',
    role: 'B.E. Computer Science and Engineering',
    org: 'Amrita University, Coimbatore, India',
    period: 'July 2019 - May 2023',
    points: [
      'Built strong foundations in software engineering, data structures, and system design.',
      'Completed applied projects in AI, full-stack development, and automation.',
    ],
  },
];

export const projectItems = [
  {
    title: 'Prediction and Forecasting Transfer Logs',
    description:
      'Predicted report arrival and transfer-log frequencies for NDM and cloud transfers using time-series forecasting methods.',
    tags: ['Python', 'Time Series', 'Forecasting', 'ARIMA', 'LSTM'],
  },
  {
    title: 'Digitisation of Handwritten Documents',
    description:
      'Converted handwritten documents into digital form using segmentation, neural networks, and deep learning techniques.',
    tags: ['Computer Vision', 'Deep Learning', 'Neural Networks', 'Segmentation', 'OCR'],
  },
  {
    title: 'Department Library Automation',
    description:
      'Built an advanced e-library system using the MEAN stack with Agile methodology and integrated automation features.',
    tags: ['MEAN Stack', 'Agile', 'Automation', 'MongoDB', 'Express', 'Angular', 'Node.js'],
  },
  {
    title: 'Emotion and Gender Prediction',
    description:
      'Developed a Keras/TensorFlow audio model to classify emotion and gender from speech data using CNN.',
    tags: ['Keras', 'TensorFlow', 'Audio AI', 'CNN'],
  },
  {
    title: 'SAML/SSO Authentication Integration',
    description:
      'Integrated SAML/SSO authentication for secure single sign-on capabilities across the enterprise.',
    tags: ['SAML', 'SSO', 'Authentication', 'Integration', 'Java', 'Single-Sign-On'],
  },
  
];

export const skills = [
  { title: 'Front-End', items: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Vue', 'Tailwind', 'SASS'] },
  { title: 'Back-End', items: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'GraphQL'] },
  { title: 'DevOps', items: ['Docker', 'GitHub Actions', 'CI/CD', 'AWS', 'Vercel'] },
  { title: 'Design', items: ['Figma', 'Adobe XD', 'a11y', 'Responsive UI'] },
];

export const skillNodes = [
  {
    id: 'python-root',
    label: 'Python',
    x: '62%',
    y: '54%',
    icon: SiPython,
    level: 94,
    description: 'Primary language for automation, AI experimentation, and backend scripting.',
    details: 'Used in workflow automation, time-series forecasting, and model prototyping.',
  },
  {
    id: 'sql',
    label: 'SQL',
    x: '46%',
    y: '63%',
    icon: SiMysql,
    level: 84,
    description: 'Data querying, relational modeling, and analytics support.',
    details: 'Supports reporting, log analysis workflows, and data-driven modeling.',
  },
  {
    id: 'aws',
    label: 'AWS',
    x: '72%',
    y: '69%',
    icon: FaAws,
    level: 82,
    description: 'Cloud deployment, storage optimization, and scalable infra setup.',
    details: 'Applied cost optimization and scalable infrastructure patterns in production.',
  },
  {
    id: 'java',
    label: 'Java',
    x: '39%',
    y: '49%',
    icon: SiOpenjdk,
    level: 80,
    description: 'Enterprise software development and integration tasks.',
    details: 'Used in professional product development and service integration.',
  },
  {
    id: 'cpp',
    label: 'C/C++',
    x: '35%',
    y: '78%',
    icon: SiCplusplus,
    level: 78,
    description: 'Performance-focused programming and automation workflows.',
    details: 'Used alongside Python and scripts to automate engineering workflows.',
  },
  {
    id: 'js',
    label: 'JavaScript',
    x: '69%',
    y: '38%',
    icon: SiJavascript,
    level: 79,
    description: 'Web app logic and API integration for product features.',
    details: 'Used in full-stack development and UI feature delivery.',
  },
  {
    id: 'llm',
    label: 'LLMs',
    x: '55%',
    y: '27%',
    icon: SiOpenai,
    level: 76,
    description: 'Prompt design, GenAI workflows, and retrieval-driven systems.',
    details: 'Worked with LLM and RAG concepts for applied AI solutions.',
  },
  {
    id: 'dl',
    label: 'Deep Learning',
    x: '68%',
    y: '21%',
    icon: SiTensorflow,
    level: 82,
    description: 'Neural network modeling using modern DL toolchains.',
    details: 'Built audio emotion/gender prediction models using Keras and TensorFlow.',
  },
  {
    id: 'cv',
    label: 'Computer Vision',
    x: '82%',
    y: '17%',
    icon: SiOpencv,
    level: 74,
    description: 'Visual ML pipelines and document understanding tasks.',
    details: 'Used in handwritten document digitization with segmentation and deep learning.',
  },
  {
    id: 'docker',
    label: 'Docker',
    x: '61%',
    y: '82%',
    icon: SiDocker,
    level: 72,
    description: 'Containerized development and runtime portability.',
    details: 'Supports reproducible builds and service packaging.',
  },
  {
    id: 'k8s',
    label: 'Kubernetes',
    x: '76%',
    y: '88%',
    icon: SiKubernetes,
    level: 68,
    description: 'Container orchestration fundamentals and deployment patterns.',
    details: 'Used for scaling and orchestration in modern infrastructure stacks.',
  },
  {
    id: 'cicd',
    label: 'CI/CD',
    x: '48%',
    y: '87%',
    icon: SiJenkins,
    level: 73,
    description: 'Automated build/test/deploy pipeline workflows.',
    details: 'Includes Jenkins and automation pipelines for release consistency.',
  },
  {
    id: 'linux',
    label: 'Linux',
    x: '42%',
    y: '32%',
    icon: SiLinux,
    level: 77,
    description: 'Shell-based development environment and operational tooling.',
    details: 'Daily usage for automation, scripting, and deployment tasks.',
  },
];

export const skillEdges = [
  { from: 'python-root', to: 'java' },
  { from: 'python-root', to: 'sql' },
  { from: 'python-root', to: 'cpp' },
  { from: 'python-root', to: 'js' },
  { from: 'python-root', to: 'llm' },
  { from: 'python-root', to: 'linux' },
  { from: 'llm', to: 'dl' },
  { from: 'dl', to: 'cv' },
  { from: 'linux', to: 'docker' },
  { from: 'docker', to: 'k8s' },
  { from: 'docker', to: 'cicd' },
  { from: 'cicd', to: 'aws' },
];

export const contact = {
  heading: "Let's Connect",
  description:
    'Currently pursuing M.Sc. in Artificial Intelligence at THWS, Germany and open to opportunities in AI research, ML engineering, and innovative software solutions.',
  primaryChannels: [
    {
      label: 'Phone',
      value: '+49 15510 660189',
      href: 'tel:+4915510660189',
      icon: FaPhone,
    },
    {
      label: 'Location',
      value: 'Würzburg, Germany',
      href: 'https://maps.google.com/?q=Schlorstrasse+2,+Wurzburg,+Germany',
    },
  ],
  socialChannels: [
    {
      label: 'Email',
      href: 'mailto:damiannj12de@gmail.com',
      icon: MdEmail,
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/damian-jeyakumar',
      icon: FaLinkedin,
    },
    {
      label: 'GitHub',
      href: 'https://github.com/DamianJack',
      icon: FaGithub,
    },
  ],
};

export const footerText = '© 2026 Damian Nithish. All rights reserved.';


