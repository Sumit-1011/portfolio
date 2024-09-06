// import project1 from "../assets/projects/project-1.jpg";
// import project2 from "../assets/projects/project-2.jpg";
// import project3 from "../assets/projects/project-3.jpg";
// import project4 from "../assets/projects/project-4.jpg";
import aboutimg from "../aboutimg.png";

export const HERO_CONTENT = `I am a Final-year Computer Science student at Birla Institute of Technology, Mesra. With a strong foundation in software development, data structures, and
algorithms. Experienced in building scalable solutions through internships and projects. Solved 600+ DSA
problems on various platforms, demonstrating strong problem-solving abilities. Seeking a Software Engineer role
to contribute to impactful projects and advance my skills in Full Stack Development.`;

export const ABOUT_TEXT = `I am a Final-year Computer Science student at Birla Institute of Technology, Mesra. With a strong foundation in software development, data structures, and
algorithms. Experienced in building scalable solutions through internships and projects. Solved 600+ DSA
problems on various platforms, demonstrating strong problem-solving abilities. Seeking a Software Engineer role
to contribute to impactful projects and advance my skills in Full Stack Development.`;

export const EXPERIENCES = [
  {
    year: " May 2024 - July 2024",
    role: "Web Developer Intern",
    company: "Ekaant",
    description: `Built a Chrome extension as a core product of company's offering which featured popup reminders and mood tracking for users during work sessions, integrating relax sessions to promote focus and well-being. Additionally, developed a responsive website using React and Tailwind CSS to effectively showcase the company’s progress and service offerings.`,
    technologies: ["Javascript", "React.js", "Tailwind CSS", "Firebase"],
  },
  // {
  //   year: "2022 - 2023",
  //   role: "Frontend Developer",
  //   company: "Adobe",
  //   description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
  //   technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  // },
];

export const PROJECTS = [
  {
    title: "CampusXchange",
    image: aboutimg,
    description:
      "An online marketplace for college students where they can seamlessly buy, sell, and exchange products with fellow students on their campus.",
    technologies: [
      "React",
      "Node.js",
      "MongoDB",
      "Express",
      "Redis",
      "Tailwind CSS",
    ],
  },
  {
    title: "NetFlix-GPT",
    image: aboutimg,
    description:
      "A web application that helps users discover movies based on their demand with the help of Chat-GPT API",
    technologies: ["React", "TailWind CSS", "Redux", "Firebase"],
  },
  {
    title: "Todo-List Extension",
    image: aboutimg,
    description:
      "Developed a browser extension for task management using MERN stack.",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
  },
];

export const CONTACT = {
  address: "Saguna More, Danapur, Patna",
  phoneNo: "+12 4555 666 00",
  email: "worksumit1011@gmail.com",
};
