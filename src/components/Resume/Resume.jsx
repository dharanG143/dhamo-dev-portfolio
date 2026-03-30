import React from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaPrint } from 'react-icons/fa';

export const Resume = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    // Create a simple text-based resume for download
    const resumeText = `
DHAMODHARAN B
React / Full Stack Developer

Email: dhamodharan13072003@gmail.com
Phone: +91-8608183354
LinkedIn: linkedin.com/in/dhamo143
GitHub: github.com/dharanG143
Location: Tiruchirapalli, India

SUMMARY
Junior Full Stack Developer with hands-on experience in React.js, Node.js, and MySQL. Currently working at LCS Solution on real-time applications including Employee Management System. Skilled in API integration, frontend development, and backend services.

EXPERIENCE

React Developer
LCS Solution | Jan 2026 – Present | Tiruchirapalli
• Developed responsive UI using React.js
• Built REST APIs using Node.js and Express.js
• Handled MySQL database operations (CRUD operations)
• Worked on Employee Management System modules
• Integrated APIs using Axios for frontend-backend communication
• Used Git for version control and collaboration
• Fixed bugs and improved application performance
• Project scheduled for live deployment

React Intern
LCS Solution | Dec 2025 – Jan 2026 | Tiruchirapalli
• Built UI components using React.js
• Learned API integration using Axios
• Worked on real-time project features
• Improved debugging and coding skills

PROJECTS

Employee Management System (Full Stack)
• Technologies: React.js, Node.js, Express.js, MySQL, Axios
• Developed real-time web application for managing employee data
• Implemented CRUD operations and REST APIs
• Managed employee and salary modules
• Built responsive UI design
• GitHub: github.com/dharanG143

Smart Parking System (Frontend)
• Technologies: React.js, CSS, Axios
• Built interactive UI using React.js
• Designed parking slot interface
• Integrated APIs for real-time data updates
• Responsive design for all devices
• GitHub: github.com/dharanG143

Electricity Billing System (Java Project)
• Technologies: Java, MySQL
• Desktop application for billing operations
• Features: Customer management, bill generation, payment tracking
• Database integration with MySQL

SKILLS

Frontend Development
• HTML, CSS, JavaScript
• React.js
• Tailwind CSS
• Framer Motion (Animations)

Backend Development
• Node.js
• Express.js
• REST APIs

Database & Tools
• MySQL
• Git & GitHub
• Axios (HTTP Client)
• VS Code
• Postman

Soft Skills
• Problem Solving
• Team Collaboration
• Communication
• Time Management

EDUCATION

Bachelor of Science in Electronics
Bharathidasan University
2021 – 2024 | 75% GPA

CERTIFICATIONS & ACHIEVEMENTS
• React.js & JavaScript proficiency
• Full Stack Development training at LCS Solution
• Git & Version Control experience
• API Integration expertise
    `;

    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(resumeText));
    element.setAttribute('download', 'Dhamodharan_Resume.txt');
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-dark via-darker to-dark py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-blue-600/10 rounded-full blur-3xl top-20 right-0"></div>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Header with Download/Print Buttons */}
          <motion.div variants={itemVariants} className="flex justify-between items-center mb-12">
            <h2 className="section-title">Resume</h2>
            <div className="flex gap-3">
              <motion.button
                whileHover={{ scale: 1.05 }}
                onClick={handleDownload}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 hover:shadow-lg hover:shadow-blue-500/50 transition-all"
              >
                <FaDownload size={16} />
                Download
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                onClick={handlePrint}
                className="flex items-center gap-2 px-4 py-2 rounded-lg glass-effect hover:bg-white/10 transition-all"
              >
                <FaPrint size={16} />
                Print
              </motion.button>
            </div>
          </motion.div>

          {/* Resume Content */}
          <motion.div
            variants={itemVariants}
            className="p-8 rounded-xl glass-effect border border-white/10 space-y-8 print:bg-white print:text-black print:border-0"
          >
            {/* Contact Info */}
            <motion.div variants={itemVariants} className="text-center border-b border-white/10 pb-8 print:border-black">
              <h1 className="text-4xl font-bold text-white mb-2 print:text-black">DHAMODHARAN B</h1>
              <h2 className="text-xl text-blue-400 mb-4 print:text-blue-600">React / Full Stack Developer</h2>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-300 print:text-black">
                <span>📧 dhamodharan13072003@gmail.com</span>
                <span>📱 +91-8608183354</span>
                <span>💼 linkedin.com/in/dhamo-dev</span>
                <span>🐙 github.com/dharanG143</span>
                <span>📍 Tiruchirapalli, India</span>
              </div>
            </motion.div>

            {/* Summary */}
            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-bold text-blue-300 mb-3 print:text-blue-700">SUMMARY</h3>
              <p className="text-gray-300 leading-relaxed print:text-black">
                Junior Full Stack Developer with hands-on experience in React.js, Node.js, and MySQL. Currently working at LCS Solution on real-time applications including Employee Management System. Skilled in API integration, frontend development, and backend services.
              </p>
            </motion.div>

            {/* Experience */}
            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-bold text-blue-300 mb-4 print:text-blue-700">EXPERIENCE</h3>
              <div className="space-y-6">
                {[
                  {
                    title: 'React Developer',
                    company: 'LCS Solution',
                    location: 'Tiruchirapalli',
                    duration: 'Jan 2026 – Present',
                    highlights: [
                      'Developed responsive UI using React.js',
                      'Built REST APIs using Node.js and Express.js',
                      'Handled MySQL database operations (CRUD operations)',
                      'Worked on Employee Management System modules',
                      'Integrated APIs using Axios for frontend-backend communication',
                      'Used Git for version control and collaboration',
                      'Fixed bugs and improved application performance',
                      'Project scheduled for live deployment'
                    ]
                  },
                  {
                    title: 'React Intern',
                    company: 'LCS Solution',
                    location: 'Tiruchirapalli',
                    duration: 'Dec 2025 – Jan 2026',
                    highlights: [
                      'Built UI components using React.js',
                      'Learned API integration using Axios',
                      'Worked on real-time project features',
                      'Improved debugging and coding skills'
                    ]
                  }
                ].map((exp, idx) => (
                  <div key={idx} className="border-l-2 border-blue-400 pl-4">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="font-bold text-white print:text-black">{exp.title}</h4>
                        <p className="text-blue-400 print:text-blue-600">{exp.company}</p>
                      </div>
                      <span className="text-sm text-gray-400 print:text-black">{exp.duration}</span>
                    </div>
                    <ul className="text-gray-300 text-sm space-y-1 print:text-black">
                      {exp.highlights.map((highlight, i) => (
                        <li key={i}>• {highlight}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Projects */}
            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-bold text-blue-300 mb-4 print:text-blue-700">PROJECTS</h3>
              <div className="space-y-6">
                {[
                  {
                    title: 'Employee Management System (Full Stack)',
                    tech: 'React.js, Node.js, Express.js, MySQL, Axios',
                    highlights: [
                      'Developed real-time web application for managing employee data',
                      'Implemented CRUD operations and REST APIs',
                      'Managed employee and salary modules',
                      'Built responsive UI design'
                    ]
                  },
                  {
                    title: 'Smart Parking System (Frontend)',
                    tech: 'React.js, CSS, Axios',
                    highlights: [
                      'Built interactive UI using React.js',
                      'Designed parking slot interface',
                      'Integrated APIs for real-time data updates',
                      'Responsive design for all devices'
                    ]
                  }
                ].map((proj, idx) => (
                  <div key={idx} className="border-b border-white/10 pb-4 last:border-0 print:border-black print:last:border-0">
                    <div>
                      <h4 className="font-bold text-white print:text-black">{proj.title}</h4>
                      <p className="text-blue-400 text-sm mb-2 print:text-blue-600">Technologies: {proj.tech}</p>
                      <ul className="text-gray-300 text-sm space-y-1 print:text-black">
                        {proj.highlights.map((highlight, i) => (
                          <li key={i}>• {highlight}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Skills */}
            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-bold text-blue-300 mb-4 print:text-blue-700">SKILLS</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { category: 'Frontend', skills: 'HTML, CSS, JavaScript, React.js, Tailwind CSS' },
                  { category: 'Backend', skills: 'Node.js, Express.js, REST APIs' },
                  { category: 'Database & Tools', skills: 'MySQL, Git & GitHub, Axios, VS Code, Postman' },
                  { category: 'Soft Skills', skills: 'Problem Solving, Team Collaboration, Communication' }
                ].map((skillGroup, idx) => (
                  <div key={idx}>
                    <h4 className="font-bold text-blue-400 mb-2 print:text-blue-600">{skillGroup.category}</h4>
                    <p className="text-gray-300 text-sm print:text-black">{skillGroup.skills}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Education */}
            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-bold text-blue-300 mb-4 print:text-blue-700">EDUCATION</h3>
              <div className="border-l-2 border-blue-400 pl-4">
                <h4 className="font-bold text-white print:text-black">Bachelor of Science in Electronics</h4>
                <p className="text-blue-400 print:text-blue-600">Bharathidasan University</p>
                <div className="flex justify-between text-sm text-gray-300 print:text-black mt-1">
                  <span>2021 – 2024</span>
                  <span>GPA: 75%</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Print Styles */}
      <style>{`
        @media print {
          body {
            background: white;
            color: black;
          }
          .print\\:bg-white {
            background: white !important;
          }
          .print\\:text-black {
            color: black !important;
          }
          .print\\:text-blue-700 {
            color: #1e40af !important;
          }
          .print\\:text-blue-600 {
            color: #2563eb !important;
          }
          .print\\:border-0 {
            border: 0 !important;
          }
          .print\\:border-black {
            border-color: black !important;
          }
          .print\\:last\\:border-0:last-child {
            border: 0 !important;
          }
          button {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
};
