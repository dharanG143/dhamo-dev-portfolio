// Portfolio data
export const portfolioData = {
  name: "Dhamodharan B",
  role: "React / Full Stack Developer",
  email: "dhamodharan13072003@gmail.com",
  phone: "+91-8608183354",
  location: "Tiruchirapalli, India",

  bio: "Junior Full Stack Developer with hands-on experience in React.js, Node.js, and MySQL. Currently working at LCS Solution on real-time applications. Passionate about building responsive web applications and improving user experience through clean UI and efficient backend integration.",

  socialLinks: [
    { 
      name: "GitHub", 
      url: "https://github.com/dharanG143", 
      icon: "FaGithub" 
    },
    { 
      name: "LinkedIn", 
      url: "https://www.linkedin.com/in/dhamo143", 
      icon: "FaLinkedin" 
    },
    { 
      name: "Email", 
      url: "mailto:dhamodharan13072003@gmail.com", 
      icon: "FaEnvelope" 
    },
  ],

  skills: [
    { 
      category: "Frontend", 
      items: ["React.js", "JavaScript", "HTML", "CSS", "Tailwind CSS"] 
    },
    { 
      category: "Backend", 
      items: ["Node.js", "Express.js", "MySQL"] 
    },
    { 
      category: "Tools", 
      items: ["Git", "GitHub", "VS Code", "Postman"] 
    },
    { 
      category: "Soft Skills", 
      items: ["Problem Solving", "Team Collaboration", "Communication"] 
    },
  ],

  experience: [
    {
      id: 1,
      title: "React Developer",
      company: "LCS Solution",
      duration: "Jan 2026 - Present",
      description: "Working on real-time web applications including Employee Management System using React.js, Node.js, and MySQL.",
      highlights: [
        "Developed responsive UI using React.js",
        "Integrated REST APIs using Axios",
        "Handled backend APIs using Node.js and Express.js",
        "Worked with MySQL database (CRUD operations)",
        "Fixed bugs and improved UI performance",
        "Collaborated using Git version control",
        "Project scheduled for live deployment"
      ],
    },
    {
      id: 2,
      title: "React Intern",
      company: "LCS Solution",
      duration: "Dec 2025 - Jan 2026",
      description: "Completed React internship after training and worked on frontend modules.",
      highlights: [
        "Built UI components using React.js",
        "Learned API integration using Axios",
        "Worked on real-time project features",
        "Improved debugging and coding skills"
      ],
    },
  ],

  projects: [
    {
      id: 1,
      title: "Employee Management System",
      type: "Full Stack",
      description: "A real-time web application for managing employee data, salary, and records. Built using React.js frontend, Node.js backend, and MySQL database.",
      image: "https://via.placeholder.com/400x250?text=Employee+Management",
      technologies: ["React.js", "Node.js", "Express.js", "MySQL", "Axios"],
      features: [
        "Employee CRUD operations",
        "Salary and record management",
        "API integration with frontend",
        "Responsive UI design"
      ],
      liveLink: "#", 
      githubLink: "https://github.com/dharanG143", 
    },
    {
      id: 2,
      title: "Smart Parking System",
      type: "Frontend",
      description: "Frontend application for parking slot management with real-time UI updates and API integration.",
      image: "https://via.placeholder.com/400x250?text=Smart+Parking",
      technologies: ["React.js", "CSS", "Axios"],
      features: [
        "Parking slot UI display",
        "Real-time updates from API",
        "Responsive design"
      ],
      liveLink: "#",
      githubLink: "https://github.com/dharanG143",
    },
    {
      id: 3,
      title: "Electricity Billing System",
      type: "Java Project",
      description: "Desktop application developed using Java for managing electricity billing operations.",
      image: "https://via.placeholder.com/400x250?text=Electricity+Billing",
      technologies: ["Java", "MySQL"],
      features: [
        "Customer management",
        "Bill generation",
        "Payment tracking"
      ],
      liveLink: "#",
      githubLink: "#",
    },
  ],

  aboutText: `I am a passionate Full Stack Developer with practical experience in building real-time web applications. 

Currently working at LCS Solution, I have hands-on experience in React.js, Node.js, and MySQL through live projects. I focus on building clean UI, integrating APIs, and improving performance.

I am continuously learning new technologies and aiming to grow into a professional Full Stack Developer working on scalable applications.`,

  education: [
    {
      id: 1,
      degree: "Bachelor of Science in Electronics",
      school: "Bharathidasan University",
      duration: "2021 – 2024",
      gpa: "75%",
      description: "Completed Bachelor's degree in Electronics with strong foundation in programming and technical concepts."
    }
  ],

  resumeLink: "#resume",
};

export const navigationLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Resume", href: "#resume" },
  { name: "Contact", href: "#contact" },
];
