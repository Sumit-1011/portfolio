// import project1 from "../assets/projects/project-1.jpg";
// import project2 from "../assets/projects/project-2.jpg";
// import project3 from "../assets/projects/project-3.jpg";
// import project4 from "../assets/projects/project-4.jpg";
import about_sumit from "/about_sumit.png";
import netfliximg from "/netfliximg.png";
import campusxchange from "/campusxchange.png";
import task_manager from "/task_manager.gif";

export const HERO_CONTENT = `I am a 2025 Computer Science graduate from Birla Institute of Technology, Mesra, with a strong academic foundation in algorithms, data structures, and software engineering principles. Having solved over 600 problems across multiple coding platforms, I have developed a deep understanding of algorithmic optimization and computational thinking. My academic projects focused on efficient system design and backend performance analysis, reflecting my passion for building technically robust solutions. I am eager to apply my problem-solving mindset and solid computer science fundamentals to develop high-quality software and contribute to engineering teams that value clean, scalable code.`;

export const ABOUT_TEXT = `My internship experience spans companies like Synapse HealthTech, Kristalball, and Ekaant, where I worked on projects involving AI-driven healthcare analytics, secure cloud infrastructures, and frontend performance optimization. I have hands-on expertise in React, FastAPI, AWS, and Docker, with a focus on designing modular, cloud-native applications. Combining full-stack development with strong backend optimization skills, I aim to engineer reliable, production-grade systems that create measurable impact and enhance user experience.`;

export const EXPERIENCES = [
  {
    year: "July 2025 – Present",
    role: "Full Stack AI-ML Intern",
    logo: "https://synapsehealthtech.com/wp-content/uploads/elementor/thumbs/High-res-Gradient-logo-qnki82f90cxl0xu3kv9m8d5biynp9f5t7nkqnohmgw.png",
    company: "Synapse HealthTech, Dubai, UAE — Remote",
    description: `Designed and deployed an AI-powered dental radiograph analysis system on AWS ECS with Application Load Balancer (ALB), Dockerized FastAPI, and custom deep learning image-comparison models to automate disease detection, reducing dentist review time by 70%. Built a scalable data marketplace using React, FastAPI, and PostgreSQL with RESTful API architecture, integrated AWS S3 for distributed storage, and implemented OTP-based authentication via AWS SES. Optimized data upload pipeline with AWS S3 presigned URLs for direct browser-to-cloud uploads, reducing server load by 60%.`,
    technologies: [
      "Python",
      "FastAPI",
      "React.js",
      "PostgreSQL",
      "AWS ECS",
      "AWS S3",
      "Docker",
      "Machine Learning",
    ],
  },
  {
    year: "Jan 2025 – Mar 2025",
    role: "Software Developer Intern",
    logo: "https://static.wixstatic.com/media/6ab977_aa436837a70a421ebcce2ca2fa3421db~mv2.png/v1/fill/w_90,h_90,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/kb%20tile.png",
    company: "Kristalball, Bengaluru, India — On-site",
    description: `Enhanced AWS cloud infrastructure security by configuring VPCs, TLS encryption, and IAM roles across EC2, Lambda, and RDS, effectively preventing MITM attacks and securing inter-service communication. Optimized Laravel-based REST APIs by improving SQL queries, implementing pagination, and adding caching mechanisms, resulting in a 40% reduction in average API response time.`,
    technologies: ["Laravel", "PHP", "AWS", "MySQL", "API Optimization", "Security"],
  },
  {
    year: "May 2024 – July 2024",
    role: "Web Developer Intern",
    logo: "https://ekaant.co/logo-03.png",
    company: "Ekaant, Noida, India — Remote",
    description: `Built a React-based Chrome extension featuring popup reminders, mood tracking, and relaxation sessions to enhance user focus and workplace well-being, reducing attrition rates by 35%. Also developed and deployed a responsive company website using React and Tailwind CSS, adhering to modern UI/UX and accessibility principles.`,
    technologies: ["JavaScript", "React.js", "Tailwind CSS", "Firebase"],
  },
];


export const PROJECTS = [
  {
    title: "CampusXchange",
    image: campusxchange,
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
    url: "https://campusxchange-client.onrender.com/",
  },
  {
    title: "Cinescope",
    image: netfliximg,
    description:
      "A web application that helps users discover movies based on their demand with the help of OpenAI API",
    technologies: ["React", "TailWind CSS", "Redux", "Firebase"],
    url: "https://cinescope-opal.vercel.app/",
  },
  {
    title: "Task Management",
    image: task_manager,
    description:
      "Designed an intuitive drag-and-drop task board with columns (Backlog, To Do, In Progress, Done) and integrated subtasks, due dates, and user dashboards",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
    url: "https://github.com/Sumit-1011/Task-Manager",
  },
];

export const CONTACT = {
  address: "Patna, Bihar, India",
  email: "worksumit1011@gmail.com",
};
