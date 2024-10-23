import portfolio from "../assets/projects/project-3.jpg";
import crud from "../assets/projects/crud.jpg"
import stickyNotes from "../assets/projects/stickyNotes.jpg"
import weatherApp from "../assets/projects/weatherAPP.jpg"

export const HERO_CONTENT = `I am a passionate full-stack developer with a strong focus on building efficient, user-centric web applications. With expertise in front-end technologies like React.js, and solid back-end experience in Node.js, MySQL, and MongoDB, I specialize in creating scalable, high-performance solutions. My development approach prioritizes clean code, seamless user experiences, and robust architecture. I’m continuously learning and refining my skills to stay on top of the latest trends, aiming to contribute innovative, tech-driven solutions that enhance both user engagement and business growth.`;

export const ABOUT_TEXT = `Hello! I'm Sai Krishna, a passionate full-stack developer with a keen interest in technology and farming. I hold a degree in Computer Science, which has provided me with a solid foundation in programming and software development.

Beyond coding, I enjoy reading books, which fuels my creativity and broadens my knowledge. I also love playing badminton, as it keeps me active and helps me unwind. As I continue to grow in my career, I'm focused on mastering new skills and contributing to innovative projects that make a difference.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    title: "Sticky Notes Web Application",
    image: stickyNotes,
    description:
      "A simple and intuitive tool for creating, organizing, and managing personal notes efficiently.",
    technologies: ["HTML", "CSS", "React", "AppWrite"],
  },
  {
    title: "Weather Forecasting App",
    image: weatherApp,
    description:
      "Provides real-time weather updates and forecasts by seamlessly integrating external APIs for accurate data.",
    technologies: ["HTML", "CSS", "Javascript"],
  },
  {
    title: "Portfolio Website",
    image: portfolio,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "tailwind"],
  },
  {
    title: "Simple CRUD App Backend",
    image: crud,
    description:
      "A basic backend application that enables Create, Read, Update, and Delete operations using Node.js and database integration.",
    technologies: ["Node.js", "Express", "MongoDB"],
  },
];

export const CONTACT = {
  address: "Hyderabad ",
  phoneNo: " Telangana ",
  email: "saikrishnaask191@gmail.com",
};
