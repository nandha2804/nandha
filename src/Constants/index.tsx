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
    name: "Property Hub",
    description:
      "The Property Hub is an innovative online platform designed to revolutionize the way individuals and businesses engage with the real estate market. It serves as a comprehensive hub for all property-related needs, offering a wide range of features and services to simplify the process of buying, selling, renting, and managing properties.",
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
        name: "django",
        color: "green-text-gradient",
      },
    ],
    image: propertyHub,
    source_code_link: "https://github.com/nandha2804",
  },
  {
    name: "Enquiry Hub",
    description:
      "The Enquiry Hub is an innovative solution aimed at enhancing customer inquiry management and support systems for businesses. It is designed to streamline the process of handling customer queries, improving response times, and ultimately enhancing customer satisfaction.",
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
        name: "fastapi",
        color: "green-text-gradient",
      },
    ],
    image: enquiryHub,
    source_code_link: "https://github.com/nandha2804",
  },
  {
    name: "E-Commerce",
    description:
      "Emporio is an e-commerce website development project aimed at creating an online fashion store that offers a wide range of trendy clothing, footwear, and accessories for men and women. The project aims to provide an intuitive and user-friendly platform for customers to browse, select, and purchase fashionable items from the comfort of their homes.",
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
        name: "django",
        color: "green-text-gradient",
      },
    ],
    image: eCommerce,
    source_code_link:
      "https://github.com/nandha2804",
  },
  {
    name: "PortFolio-React",
    description:
      "Portfolio website with track of my career journey, projects, open-source contribution and much more.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
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
    name: "Quest Tracker",
    description:
      "The Quest Tracker is a web application that helps users keep track of their tasks and goals. It is designed to be user-friendly and customizable, with the ability to create, edit, and delete tasks. The application also allows users to track their progress and view completed tasks.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "django",
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
    name: "Hotel Reservation",
    description:
      "The Hotel Reservation System is a web application that allows customers to book and manage hotel reservations online. Customers can search for available hotels and rooms, view hotel amenities and details, and make online reservations. The application also includes a backend system for hotel administrators to manage hotel information, room availability, and reservations.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "django",
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
  {
    name: "Math Flash Cards",
    description:
      "The Math Flash Cards is a web application that helps students practice and improve their math skills. The application generates random math problems based on the user's chosen difficulty level and provides instant feedback on whether the user's answers are correct or incorrect. The application also includes a leaderboard that displays the top scores of all users.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "tkinter",
        color: "green-text-gradient",
      },
      {
        name: "canva",
        color: "pink-text-gradient",
      },
    ],
    image: math,
    source_code_link: "https://github.com/nandha2804",
  },
  {
    name: "PortFolio-Angular",
    description:
      "Portfolio website with track of my career journey, projects, open-source contribution and much more.",
    tags: [
      {
        name: "angular",
        color: "blue-text-gradient",
      },
      {
        name: "bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: portfolioAngular,
    source_code_link: "https://github.com/nandha2804",
  },
  {
    name: "The Treasure Hunt",
    description:
      "The Treasure Hunt is an endless runner game developed in Unity where the player controls a character running through an infinite environment, collecting coins and avoiding obstacles. The game includes power-ups and upgrades that the player can collect to improve their score and increase their chances of survival.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "tkinter",
        color: "green-text-gradient",
      },
      {
        name: "canva",
        color: "pink-text-gradient",
      },
    ],
    image: treasureHunt,
    source_code_link: "https://github.com/nandha2804",
  },
];

export { services, technologies, experiences, projects };
