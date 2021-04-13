import { RiComputerLine } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import { AiOutlineAntDesign, AiOutlineApi } from "react-icons/ai";
import { MdDeveloperMode } from "react-icons/md";
import { IProject, Service, Skill } from "./types";

import { BsCircleFill } from "react-icons/bs";

export const services: Service[] = [
  {
    Icon: RiComputerLine,
    title: "Frontend Development",
    about:
      "Building ultra fast and responsive SPA using modern frontend frameworks such as <b>React</b>, <b>Vue.js</b> and <b>Angular</b>.",
  },
  {
    Icon: FaServer,
    title: "Backend  Development",
    about:
      "Creating server end applications with relational/non-relation data base using <b>Express.js</b>, <b>Nest.js</b>, <b>Flask</b> and <b>Django</b>.",
  },
  {
    Icon: AiOutlineApi,
    title: "API Development",
    about:
      "Developing robust RESTful API using <b>Django-rest-api</b>  & <b>Node API</b>.",
  },
  {
    Icon: MdDeveloperMode,
    title: "Competitive Coder",
    about: "A daily problem solver in <b>HackerRank</b> and <b>Leet Code</b>.",
  },
  {
    Icon: AiOutlineAntDesign,
    title: "DevOps Engineer",
    about:
      "Deploying production application on cloud platforms such as <b>Heroku</b>, <b>AWS</b> and <b>Vercel</b>.",
  },
  {
    Icon: RiComputerLine,
    title: "TypeScript/Go Enthusiast ",
    about:
      "Embracing the future of web development!",
  },
];

export const languages: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "JavaScript",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "TypeScript",
    level: "75",
  },
  {
    Icon: BsCircleFill,
    name: "Python",
    level: "45",
  },
  {
    Icon: BsCircleFill,
    name: "React",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "Express.js",
    level: "75",
  },
  {
    Icon: BsCircleFill,
    name: "Django",
    level: "30",
  },
  
];

export const tools: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "Jenkins",
    level: "50",
  },
  {
    Icon: BsCircleFill,
    name: "AWS",
    level: "65",
  },
  {
    Icon: BsCircleFill,
    name: "MongoDB",
    level: "45",
  },
  {
    Icon: BsCircleFill,
    name: "PostgreSQL",
    level: "60",
  },
];

export const projects: IProject[] = [
  { 
    name: "Peak Everest E-commerce",
    description:"A full E-commerce solution for small business. This application includes features such as dynamic updating shopping cart, data base for customer information and transaction records and management dashboard for administration.",
    image_path: "/images/peak_everr_rest.png",
    deployed_url: "https://peak-everest-furniture.herokuapp.com/",
    github_url: "https://github.com/Dragontalker/peak-everest-furniture",
    category: ["react", "mongo", "node"],
    key_techs: ["React", "Node.js", "Experss.js", "MongoDB", "Heroku", "RESTful API"]
  },
  {
    name: "Note Taker",
    image_path: "/images/note_taker.png",
    deployed_url: "https://dragontalker-note-taker.herokuapp.com/",
    github_url: "https://github.com/Dragontalker/express-note-taker",
    category: ["node"],
    description:
      "This project builds a web application called Note Taker that can be used to write and save notes. This application will use an Express.js back end and will save and retrieve note data from a JSON file.",
    key_techs: ["Node.js", "Express.js", "Bootstrap5", "HTML5", "CSS3", "JavaScript", "RESTful API"],
  },

  {
    name: "Fitness Tracker",
    image_path: "/images/fitness_tracker.png",
    deployed_url: "https://dragontalker-fitness-tracker.herokuapp.com/",
    github_url: "https://github.com/Dragontalker/mongodb-fitness-tracker",
    category: ["node", "mongo"],
    description:
      "A fitness tracker application that is built with MongoDB, Node.js, and Express.js.",
    key_techs: [
      "JavaScript",
      "MongoDB",
      "Node.js",
      "Express.js",
      "RESTful API",
      "Bootstrap5",
    ],
  },

  {
    name: "Employee Directory",
    image_path: "/images/employee_directory.png",
    deployed_url: "https://dragontalker.github.io/react-employee-directory/",
    github_url: "https://github.com/Dragontalker/react-employee-directory",
    category: ["react"],
    description:
      "A dynamic rendered employee management system that is built with React, React Hooks and React Tables.",
    key_techs: ["React", "React Hooks", "React Tables"],
  },

  {
    name: "Budget Tracker",
    image_path: "/images/budget_tracker.png",
    deployed_url: "https://dragontalker-budget-tracker.herokuapp.com/",
    github_url: "https://github.com/Dragontalker/pwa-budget-tracker",
    category: ["mongo", "node"],
    description:
      "A PWA (progressive web application) budget tracker that is built with Service Worker, IndexDB and MongoDB.",
    key_techs: ["Service Worker", "Progressive Web App", "IndexDB", "Node.js", "Express.js", "MongoDB"],
  },

  {
    name: "Google Books Search",
    image_path: "/images/google_book_search.png",
    deployed_url: "https://dragontalker-library.herokuapp.com/",
    github_url: "https://github.com/Dragontalker/mern-google-books-search",
    category: ["react", "node", "mongo"],
    description:
      "A personal library application that is built with MERN (React, Express.js, Node.js, MongoDB), and Google Books API.",
    key_techs: ["React", "Node.js", "Express.js", "MongoDB", "Bootstrap5", "RESTful API"],
  },
  {
    name: "Flux-IM",
    image_path: "/images/flux_im.png",
    deployed_url: "https://flux-im.herokuapp.com/",
    github_url: "https://github.com/Dragontalker/mysql-socketio-chat-room",
    category: ["node"],
    description:
      'A light-weighted web application brings you into the conversion with interesting people. Jump in now!',
    key_techs: [
      "Socket.io",
      "jQuery",
      "Node.js",
      "Express.js",
      "MySQL",
      "RESTful API",
    ],
  }
];
