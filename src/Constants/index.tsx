import {
  frontend,
  aiml,
  backend,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  Angular,
  github,
  aws,
  django,
  mysql,
  postgresql,
  git,
  figma,
  python,
  shiash,
  intellecto,
  infox,
  active,
  portfolioAngular,
  portfolioReact,
  questTracler,
  treasureHunt,
  math,
  hotel,
  propertyHub,
  enquiryHub,
  eCommerce,
  docker,
  angular,
} from "../Assets";

export const navLinks = [
  {
    id: "about",
    title: "< About />",
  },
  {
    id: "work",
    title: "< Work />",
  },
  {
    id: "projects",
    title: "< Projects />",
  },
  {
    id: "contact",
    title: "< Contact />",
  },
];
export const footerLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Python Developer",
    icon: python,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "AI/ML Engineer",
    icon: aiml,
  },
  {
    title: "Web Developer",
    icon: frontend,
  },
];

const technologies = [
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Django",
    icon: django,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "angular",
    icon: angular,
  },

  {
    name: "MySql",
    icon: mysql,
  },
  {
    name: "postgresql",
    icon: postgresql,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "GitHub",
    icon: github,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Trainee Software Developer",
    company_name: "Grid R&D (Bangalore) Private Limited",
    icon: active,
    iconBg: "#ffff",
    date: "{ OCT 2024 - Present }",
    points: [
      "Developed and enhanced the Job Portal application using Python, Django, and React implementing key features and optimizations.",
      "Integrated automated email notifications for new user registrations, job applications, profile- matched job alerts, and employer - jobseeker inbox messages.",
      "Resolved critical bugs in the Skills and Hiring Industry fields to ensure data accuracy and system stability.",
      "Empowered employers with the ability to view applicant details directly on their dashboards for streamlined hiring.",
      "Optimized the job - matching algorithm by implementing Doc2Vec for intelligent keyword extraction and semantic analysis of resumes and job descriptions.",
      "Enhanced the admin dashboard, providing comprehensive insights into employer and candidate activities.",
      "Developed new RESTful APIs for skills management and AI - driven job - matching scores.",
      "Optimized the database schema, improving query efficiency and system performance.",
      "Revamped the frontend UI with Tailwind CSS, ensuring a modern, responsive, and user - friendly experience.",
      "Redesigned the frontend UI using React and Tailwind CSS, improving visual aesthetics and usability.",
      "Collaborated with the team to debug, optimize, and enhance backend API functionality."

    ],
  },
  // {
  //   title: "Software Engineer",
  //   company_name: "Intellecto Global Services",
  //   icon: intellecto,
  //   iconBg: "#ffff",
  //   date: "{ November 2022 - June 2023 }",
  //   points: [
  //     "Built RESTful APIs that served data to the JavaScript front-end, based on dynamically chosen user inputs that handled over 5000 concurrent users.",
  //     "Partnered with a developer to implement RESTful APIs in Django, enabling analytics team to increase reporting speed by 14%.",
  //     "Developed scalable and responsive web applications using React, Redux, and Tailwind-CSS.",
  //     "Designed and implemented user interfaces using HTML, CSS, and Material-UI.",
  //     "Utilized Git for version control and collaborated with team members on various projects.",
  //   ],
  // },
  // {
  //   title: "Full Stack Developer - Intern",
  //   company_name: "Shiash Info Solutions Private Limited",
  //   icon: shiash,
  //   iconBg: "#ffff",
  //   date: "{ July 2022 - September 2022 }",
  //   points: [
  //     "Developed full-stack web applications which processed, analyzed, and rendered data visually.",
  //     "Planned, wrote, and debugged web applications and software's with complete accuracy.",
  //     "Design and develop user interfaces using HTML, CSS, and JavaScript framework Angular.",
  //     "Test and debug code using tools such as Postman and Chrome DevTools.",
  //   ],
  // },
  // {
  //   title: "Game Developer - Intern",
  //   company_name: "Infox Technology",
  //   icon: infox,
  //   iconBg: "#ffff",
  //   date: "{ December 2021 - March 2022 }",
  //   points: [
  //     "Work on a team of game developers to develop and improve existing games using Unity game engine.",
  //     "Write clean, efficient, and well-documented code using C# programming language.",
  //     "Participate in game design discussions and contribute ideas for game mechanics and features.",
  //     "Collaborate with artists, designers, and other developers to ensure that the game meets the vision and goals of the project.",
  //   ],
  // },
];

const projects = [
  {
    name: "Web Application Firewall🔐🌐",
    description:
      "A WAF or web application firewall helps protect web applications by filtering and monitoring HTTP traffic between a web application and the Internet. It typically protects web applications from attacks such as cross-site forgery, cross-site-scripting (XSS), file inclusion, and SQL injection, among others.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "mui",
        color: "pink-text-gradient",
      },
      {
        name: "Flask",
        color: "green-text-gradient",
      },
    ],
    image: propertyHub,
    source_code_link: "https://github.com/nandha2804",
  },
  {
    name: "Medical Diagnosis System🏥",
    description:
      "A'Medical Diagnosis System' project aims to develop a utilizes patient data like symptoms, medical history,test results to analyze and suggest potential diagnoses, assisting healthcare professionals in faster and more accurate, often leveraging machine learning algorithms to identify patterns within large datasets.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "mui",
        color: "pink-text-gradient",
      },
      {
        name: "fastapi",
        color: "green-text-gradient",
      },
    ],
    image: enquiryHub,
    source_code_link: "https://github.com/nandha2804",
  },
  {
    name: "Amiso🧼",
    description:
      "This is a professional cleaning service website with a modern,The site uses a responsive grid layout that shows content in single column on mobile and three columns on larger screens, ensuring good user experience across all devices.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mui",
        color: "pink-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
    ],
    image: eCommerce,
    source_code_link:
      "https://github.com/nandha2804",
  },
  {
    name: "Speech Emotion Recognition🎙️😊",
    description:
      "Speech Emotion Recognition (SER) is a technology that uses artificial intelligence to identify human emotions from spoken words, analyzing vocal cues like pitch, tone, and volume to classify emotions like happiness, sadness, anger, or fear.",
    tags: [
      {
        name: "Flask",
        color: "blue-text-gradient",
      },
      {
        name: "Python",
        color: "pink-text-gradient",
      },
      {
        name: "framer-motion",
        color: "green-text-gradient",
      },
    ],
    image: portfolioReact,
    source_code_link: "https://github.com/nandha2804",
  },

  {
    name: "InstiGo Android Application📱",
    description:
      "InstiGo Android Application is a mobile app designed to streamline student and faculty interactions within an institute. It provides features like attendance tracking, event updates, academic resources, and communication tools. Users can access schedules, submit assignments, and receive notifications for important announcements.",
    tags: [
      {
        name: "Androin",
        color: "blue-text-gradient",
      },
      {
        name: "Java",
        color: "green-text-gradient",
      },
      {
        name: "mysql",
        color: "pink-text-gradient",
      },
    ],
    image: questTracler,
    source_code_link: "https://github.com/nandha2804",
  },

  {
    name: "Vehicle Parking Management System🚗",
    description:
      "A Vehicle Parking Management System is designed to efficiently manage parking spaces, track vehicle entries and exits, and enhance security. It automates the parking process using QR codes, RFID. The system includes features like real-time parking availability, user authentication, payment processing, and reporting.",
    tags: [
      {
        name: "PHP",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "green-text-gradient",
      },
      {
        name: "mysql",
        color: "pink-text-gradient",
      },
    ],
    image: hotel,
    source_code_link:
      "https://github.com/nandha2804",
  },
  // {
  //   name: "Math Flash Cards",
  //   description:
  //     "The Math Flash Cards is a web application that helps students practice and improve their math skills. The application generates random math problems based on the user's chosen difficulty level and provides instant feedback on whether the user's answers are correct or incorrect. The application also includes a leaderboard that displays the top scores of all users.",
  //   tags: [
  //     {
  //       name: "python",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "tkinter",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "canva",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: math,
  //   source_code_link: "https://github.com/nandha2804",
  // },
  // {
  //   name: "PortFolio-Angular",
  //   description:
  //     "Portfolio website with track of my career journey, projects, open-source contribution and much more.",
  //   tags: [
  //     {
  //       name: "angular",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "bootstrap",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: portfolioAngular,
  //   source_code_link: "https://github.com/nandha2804",
  // },
  // {
  //   name: "The Treasure Hunt",
  //   description:
  //     "The Treasure Hunt is an endless runner game developed in Unity where the player controls a character running through an infinite environment, collecting coins and avoiding obstacles. The game includes power-ups and upgrades that the player can collect to improve their score and increase their chances of survival.",
  //   tags: [
  //     {
  //       name: "python",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "tkinter",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "canva",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: treasureHunt,
  //   source_code_link: "https://github.com/nandha2804",
  // },
];

export { services, technologies, experiences, projects };
