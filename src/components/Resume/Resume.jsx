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

  const handleDownloadTXT = () => {
    // Create a simple text-based resume for download
    const resumeText = `
DHAMODHARAN B
React / Full Stack Developer

Email: dhamodharan13072003@gmail.com
Phone: +91-8608183354
LinkedIn: linkedin.com/in/dhamo-dev
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
    element.setAttribute('download', 'Dhamodharan_B_Resume.txt');
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const handleDownloadHTML = () => {
    const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dhamodharan B - Resume</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #333;
            background-color: #f5f5f5;
        }
        .container {
            max-width: 900px;
            margin: 20px auto;
            background: white;
            padding: 40px;
            box-shadow: 0 0 20px rgba(0,0,0,0.1);
            border-radius: 8px;
        }
        header {
            text-align: center;
            border-bottom: 3px solid #3b82f6;
            padding-bottom: 20px;
            margin-bottom: 30px;
        }
        h1 {
            font-size: 32px;
            color: #1f2937;
            margin-bottom: 5px;
        }
        .role {
            font-size: 18px;
            color: #3b82f6;
            font-weight: 600;
        }
        .contact-info {
            display: flex;
            justify-content: center;
            gap: 20px;
            flex-wrap: wrap;
            font-size: 13px;
            color: #666;
            margin-top: 10px;
        }
        .section {
            margin-bottom: 25px;
        }
        .section-title {
            font-size: 16px;
            font-weight: 700;
            color: #1f2937;
            border-bottom: 2px solid #ddd;
            padding-bottom: 8px;
            margin-bottom: 15px;
            text-transform: uppercase;
            letter-spacing: 1px;
        }
        .entry {
            margin-bottom: 18px;
        }
        .entry-header {
            display: flex;
            justify-content: space-between;
            margin-bottom: 5px;
        }
        .entry-title {
            font-weight: 600;
            color: #1f2937;
            font-size: 15px;
        }
        .entry-company {
            color: #3b82f6;
            font-weight: 500;
            font-size: 14px;
        }
        .entry-date {
            color: #999;
            font-size: 13px;
        }
        .entry-description {
            color: #666;
            font-size: 13px;
            font-style: italic;
            margin-bottom: 8px;
        }
        ul {
            margin-left: 20px;
            color: #555;
            font-size: 13px;
        }
        li {
            margin-bottom: 5px;
        }
        .skills-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 15px;
        }
        .skill-category {
            background: #f9fafb;
            padding: 12px;
            border-left: 3px solid #3b82f6;
            border-radius: 4px;
        }
        .skill-category h4 {
            color: #3b82f6;
            font-size: 13px;
            font-weight: 600;
            margin-bottom: 8px;
        }
        .skill-items {
            font-size: 12px;
            color: #666;
            line-height: 1.6;
        }
        @media print {
            body { background: white; }
            .container { box-shadow: none; margin: 0; padding: 20px; }
        }
    </style>
</head>
<body>
    <div class="container">
        <header>
            <h1>DHAMODHARAN B</h1>
            <p class="role">React / Full Stack Developer</p>
            <div class="contact-info">
                <span>📧 dhamodharan13072003@gmail.com</span>
                <span>📱 +91-8608183354</span>
                <span>💼 linkedin.com/in/dhamo-dev</span>
                <span>🐙 github.com/dharanG143</span>
                <span>📍 Tiruchirapalli, India</span>
            </div>
        </header>

        <div class="section">
            <h2 class="section-title">Professional Summary</h2>
            <p>Junior Full Stack Developer with hands-on experience in React.js, Node.js, and MySQL. Currently working at LCS Solution on real-time applications including Employee Management System. Skilled in API integration, frontend development, and backend services.</p>
        </div>

        <div class="section">
            <h2 class="section-title">Experience</h2>
            
            <div class="entry">
                <div class="entry-header">
                    <div>
                        <div class="entry-title">React Developer</div>
                        <div class="entry-company">LCS Solution</div>
                    </div>
                    <div class="entry-date">Jan 2026 – Present</div>
                </div>
                <p class="entry-description">Developing real-time web applications with React.js and Node.js</p>
                <ul>
                    <li>Developed responsive UI using React.js</li>
                    <li>Built REST APIs using Node.js and Express.js</li>
                    <li>Worked on Employee Management System modules</li>
                    <li>Handled MySQL database operations</li>
                    <li>Fixed bugs and improved application performance</li>
                </ul>
            </div>

            <div class="entry">
                <div class="entry-header">
                    <div>
                        <div class="entry-title">React Intern</div>
                        <div class="entry-company">LCS Solution</div>
                    </div>
                    <div class="entry-date">Dec 2025 – Jan 2026</div>
                </div>
                <ul>
                    <li>Built UI components using React.js</li>
                    <li>Learned API integration using Axios</li>
                    <li>Worked on real-time project features</li>
                </ul>
            </div>
        </div>

        <div class="section">
            <h2 class="section-title">Projects</h2>
            
            <div class="entry">
                <div class="entry-title">Employee Management System (Full Stack)</div>
                <p class="entry-description">React.js, Node.js, Express.js, MySQL</p>
                <ul>
                    <li>Real-time web application for managing employee data</li>
                    <li>Implemented complete CRUD operations</li>
                    <li>REST API integration and synchronization</li>
                </ul>
            </div>

            <div class="entry">
                <div class="entry-title">Smart Parking System (Frontend)</div>
                <p class="entry-description">React.js, CSS, JavaScript, Axios</p>
                <ul>
                    <li>Interactive parking management system</li>
                    <li>Real-time slot updates and visualization</li>
                    <li>Responsive mobile-friendly design</li>
                </ul>
            </div>

            <div class="entry">
                <div class="entry-title">Electricity Billing System (Java Project)</div>
                <p class="entry-description">Java, MySQL, Desktop Application</p>
                <ul>
                    <li>Customer management and billing operations</li>
                    <li>Bill generation and payment tracking</li>
                </ul>
            </div>
        </div>

        <div class="section">
            <h2 class="section-title">Skills</h2>
            <div class="skills-grid">
                <div class="skill-category">
                    <h4>Frontend</h4>
                    <div class="skill-items">HTML, CSS, JavaScript, React.js, Tailwind CSS</div>
                </div>
                <div class="skill-category">
                    <h4>Backend</h4>
                    <div class="skill-items">Node.js, Express.js, REST APIs</div>
                </div>
                <div class="skill-category">
                    <h4>Database & Tools</h4>
                    <div class="skill-items">MySQL, Git, GitHub, Axios, VS Code, Postman</div>
                </div>
                <div class="skill-category">
                    <h4>Soft Skills</h4>
                    <div class="skill-items">Problem Solving, Teamwork, Communication</div>
                </div>
            </div>
        </div>

        <div class="section">
            <h2 class="section-title">Education</h2>
            <div class="entry">
                <div class="entry-header">
                    <div>
                        <div class="entry-title">Bachelor of Science in Electronics</div>
                        <div class="entry-company">Bharathidasan University</div>
                    </div>
                    <div class="entry-date">2021 – 2024</div>
                </div>
                <p>CGPA: 75%</p>
            </div>
        </div>
    </div>
</body>
</html>`;

    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/html;charset=utf-8,' + encodeURIComponent(htmlContent));
    element.setAttribute('download', 'Dhamodharan_B_Resume.html');
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <section id="resume" className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-dark dark:via-darker dark:to-dark py-20 relative overflow-hidden">
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
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-12">
            <h2 className="section-title">Resume</h2>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              <motion.button
                whileHover={{ scale: 1.05 }}
                onClick={handleDownloadTXT}
                className="flex items-center gap-2 px-3 sm:px-4 py-2 text-sm sm:text-base rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 hover:shadow-lg hover:shadow-blue-500/50 transition-all"
              >
                <FaDownload size={16} />
                <span className="hidden sm:inline">Download</span> TXT
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                onClick={handleDownloadHTML}
                className="flex items-center gap-2 px-3 sm:px-4 py-2 text-sm sm:text-base rounded-lg bg-gradient-to-r from-purple-500 to-pink-600 hover:shadow-lg hover:shadow-purple-500/50 transition-all"
              >
                <FaDownload size={16} />
                <span className="hidden sm:inline">Download</span> HTML
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                onClick={handlePrint}
                className="flex items-center gap-2 px-3 sm:px-4 py-2 text-sm sm:text-base rounded-lg glass-effect hover:bg-white/10 transition-all"
              >
                <FaPrint size={16} />
                <span className="hidden sm:inline">Print</span>
              </motion.button>
            </div>
          </motion.div>

          {/* Resume Content */}
          <motion.div
            variants={itemVariants}
            className="p-8 rounded-xl glass-effect border border-gray-200 dark:border-white/10 space-y-8 print:bg-white print:text-black print:border-0"
          >
            {/* Contact Info */}
            <motion.div variants={itemVariants} className="text-center border-b border-gray-200 dark:border-white/10 pb-8 print:border-black">
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2 print:text-black">DHAMODHARAN B</h1>
              <h2 className="text-xl text-blue-400 mb-4 print:text-blue-600">React / Full Stack Developer</h2>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600 dark:text-gray-300 print:text-black">
                <span>📧 dhamodharan13072003@gmail.com</span>
                <span>📱 +91-8608183354</span>
                <span>💼 linkedin.com/in/dhamo-dev</span>
                <span>🐙 github.com/dharanG143</span>
                <span>📍 Tiruchirapalli, India</span>
              </div>
            </motion.div>

            {/* Summary */}
            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-bold text-blue-600 dark:text-blue-300 mb-3 print:text-blue-700">SUMMARY</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed print:text-black">
                Junior Full Stack Developer with hands-on experience in React.js, Node.js, and MySQL. Currently working at LCS Solution on real-time applications including Employee Management System. Skilled in API integration, frontend development, and backend services.
              </p>
            </motion.div>

            {/* Experience */}
            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-bold text-blue-600 dark:text-blue-300 mb-4 print:text-blue-700">EXPERIENCE</h3>
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
                  <div key={idx} className="border-l-2 border-blue-600 dark:border-blue-400 pl-4">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="font-bold text-gray-900 dark:text-white print:text-black">{exp.title}</h4>
                        <p className="text-blue-600 dark:text-blue-400 print:text-blue-600">{exp.company}</p>
                      </div>
                      <span className="text-sm text-gray-600 dark:text-gray-400 print:text-black">{exp.duration}</span>
                    </div>
                    <ul className="text-gray-600 dark:text-gray-300 text-sm space-y-1 print:text-black">
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
              <h3 className="text-xl font-bold text-blue-600 dark:text-blue-300 mb-4 print:text-blue-700">PROJECTS</h3>
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
                  <div key={idx} className="border-b border-gray-200 dark:border-white/10 pb-4 last:border-0 print:border-black print:last:border-0">>
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white print:text-black">{proj.title}</h4>
                      <p className="text-blue-400 text-sm mb-2 print:text-blue-600">Technologies: {proj.tech}</p>
                      <ul className="text-gray-600 dark:text-gray-300 text-sm space-y-1 print:text-black">
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
              <h3 className="text-xl font-bold text-blue-600 dark:text-blue-300 mb-4 print:text-blue-700">SKILLS</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { category: 'Frontend', skills: 'HTML, CSS, JavaScript, React.js, Tailwind CSS' },
                  { category: 'Backend', skills: 'Node.js, Express.js, REST APIs' },
                  { category: 'Database & Tools', skills: 'MySQL, Git & GitHub, Axios, VS Code, Postman' },
                  { category: 'Soft Skills', skills: 'Problem Solving, Team Collaboration, Communication' }
                ].map((skillGroup, idx) => (
                  <div key={idx}>
                    <h4 className="font-bold text-blue-400 mb-2 print:text-blue-600">{skillGroup.category}</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm print:text-black">{skillGroup.skills}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Education */}
            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-bold text-blue-600 dark:text-blue-300 mb-4 print:text-blue-700">EDUCATION</h3>
              <div className="border-l-2 border-blue-400 pl-4">
                <h4 className="font-bold text-gray-900 dark:text-white print:text-black">Bachelor of Science in Electronics</h4>
                <p className="text-blue-400 print:text-blue-600">Bharathidasan University</p>
                <div className="flex justify-between text-sm text-gray-600 dark:text-gray-300 print:text-black mt-1">
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
