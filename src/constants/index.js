import tutorMeImage from "../assets/tutormepic.png";

export const navLinks = [
  {
    id: "about",
    title: "About",
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
    title: "Web Developer",
  },
  {
    title: "React Native Developer",
  },
  {
    title: "Backend Developer",
  },
  {
    title: "Content Creator",
  },
];

const technologies = [
  {
    name: "HTML 5",
  },
  {
    name: "CSS 3",
  },
  {
    name: "JavaScript",
  },
  {
    name: "TypeScript",
  },
  {
    name: "React JS",
  },
  {
    name: "Redux Toolkit",
  },
  {
    name: "Tailwind CSS",
  },
  {
    name: "Node JS",
  },
  {
    name: "MongoDB",
  },
  {
    name: "Three JS",
  },
  {
    name: "git",
  },
  {
    name: "figma",
  },
  {
    name: "docker",
  },
];

const testimonials = [
  {
    testimonial:
      "I've secured 3rd rank in a competitive entrance test AP-ECET which is state wide examination in stream of CSE in year 2020",
  },
  {
    testimonial:
      "I've secured 98rd rank in a competitive entrance test TS-ECET which is state wide examination in stream of CSE in in year 2020",
  },
  {
    testimonial:
      "I've attended multiple hackathons and won some of them during my education.I've been to interstate competitions ended up among the top",
  },
];

const projects = [
  {
    name: "Roar Store App",
    description:
      "Mobile App for the Roar Store built using React Native and Firebase. The app is used by students to buy and sell items within the school.",
    image:
      "https://static.hudl.com/users/temp/3831171_bd1403ee7b194d1bae30cd9d28787d8c.jpg",
  },
  {
    name: "NHS Tutor App",
    description:
      "Web App for the NHS Tutoring Program built using Next.js and Firebase. The app is used by students to sign up for tutoring sessions.",
    image: tutorMeImage,
  },
  {
    name: "USACO",
    description:
      "The USA Computing Olympiad (USACO) is a prestigious computer programming competition aimed at pre-college students in the United States, focusing on algorithms and problem-solving.",
    image:
      "https://images.ctfassets.net/mrop88jh71hl/3NEfiekS1me0rqHfiHFz38/7566e5c54c9e374d3996f47e563833c1/Frame_35-min.png",
  },
];

export { services, technologies, testimonials, projects };
