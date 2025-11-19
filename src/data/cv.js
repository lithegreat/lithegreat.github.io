export const cvData = {
  ui: {
    nav: {
      home: 'Home',
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
    },
    hero: {
      greeting: "Hello, I'm",
      btnProject: 'View Projects',
      btnContact: 'Contact Me',
    },
    about: {
      title: 'About Me',
      education: 'Education',
      experience: 'Experience',
    },
    skills: {
      title: 'Technical Skills',
    },
    projects: {
      title: 'Featured Projects',
    },
    footer: {
      contact: 'Contact',
      connect: 'Connect',
      rights: 'All Rights Reserved.',
    },
  },
  name: 'Hengsheng Li',
  initials: 'H',
  title: 'M.Sc. Electrical Engineering & IT',
  description:
    'Graduate Student at TUM | Working Student at Infineon Technologies. Passionate about Embedded Systems, Hardware Design, and Software Engineering.',
  email: 'muzimichaed@gmail.com',
  location: 'Munich, Germany',
  socials: {
    linkedin: 'https://www.linkedin.com/in/hengsheng-li/',
    github: 'https://github.com/lithegreat',
  },
  education: [
    {
      date: '04.2025 – Present',
      degree: 'M.Sc. Electrical Engineering & IT',
      institution: 'Technical University of Munich (TUM)',
    },
    {
      date: '10.2021 – 03.2025',
      degree: 'B.Sc. Electrical Engineering & IT',
      institution: 'Technical University of Munich (TUM)',
      gpa: 'GPA: 2.1/1.0',
    },
  ],
  experience: [
    {
      date: 'June 2025 - Present',
      role: 'Working Student - Hardware Development',
      company: 'Infineon Technologies AG',
      description: 'Improving workflows for hardware CI/CD using Python, Git, and Jenkins.',
    },
  ],
  skills: [
    {
      category: 'Programming Languages',
      items: ['Python', 'C', 'C++'],
      icon: 'fas fa-code',
    },
    {
      category: 'Tools & Technologies',
      items: ['Git', 'Bash', 'Linux', 'CI/CD', 'Unit Testing'],
      icon: 'fas fa-tools',
    },
    {
      category: 'Hardware Knowledge',
      items: ['Digital Design', 'VHDL', 'RISC-V'],
      icon: 'fas fa-microchip',
    },
    {
      category: 'Languages',
      items: ['English (Fluent)', 'German (C1)', 'Chinese (Native)'],
      icon: 'fas fa-language',
    },
  ],
  projects: [
    {
      title: 'Evaluation of OpenASIP Custom Operations in CoreDSL Ecosystem',
      type: 'Bachelor Thesis',
      tags: ['C', 'Python', 'Linux', 'RISC-V'],
      points: [
        'Extended a RISC-V instruction set by implementing custom operations in C and Python on Linux systems',
        'Automated data extraction and analysis workflows using Python and Bash scripting',
        'Gained hands-on experience with embedded processor simulation and benchmarking',
      ],
    },
    {
      title: 'Asynchronous Transfer Mode Implementation',
      type: 'VHDL Lab',
      tags: ['VHDL', 'Hardware Design'],
      points: [
        'Developed and simulated ATM components, ensuring proper data transmission through asynchronous communication',
        'Synthesized the VHDL models into gate-level netlists, validating functionality in hardware environments',
      ],
    },
    {
      title: 'Embedded System Design for Machine Learning',
      type: 'Embedded ML Project',
      tags: ['TensorFlow', 'MicroTVM', 'ESP-IDF', 'Python', 'C++'],
      points: [
        'Trained a lightweight keyword spotting (KWS) neural network using TensorFlow/Keras',
        'Quantized and deployed the model using MicroTVM and ESP-IDF on embedded devices',
        'Implemented ROM/RAM/MACs estimation tools and model evaluation metrics in Python',
      ],
    },
    {
      title: 'Multidimensional IMU Data Analysis and Visualization',
      type: 'Research Internship',
      tags: ['Python', 'Data Analysis', 'Matplotlib'],
      points: [
        'Processed and analyzed high-dimensional IMU sensor data using Python and scientific libraries',
        'Developed custom data visualization tools to study motion patterns and sensor relationships',
      ],
    },
    {
      title: 'Geometric Library Maintenance',
      type: 'Software Engineering Praktikum',
      tags: ['C++', 'CI/CD', 'GitLab'],
      points: [
        'Refactored a C++ geometric computation library and integrated automated unit testing',
        'Set up CI/CD pipelines using GitLab to ensure code quality and continuous integration',
      ],
    },
    {
      title: 'Music Video Generation Automation',
      type: 'Personal Project',
      tags: ['Python', 'AI Models', 'Automation'],
      points: [
        'Developed a Python-based automation tool by integrating open-source AI models',
        'Focused on automating media processing tasks and improving operational efficiency',
      ],
    },
  ],
}
