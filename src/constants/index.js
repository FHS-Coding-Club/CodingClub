import tutorMeImage from "../assets/tutormepic.png";
import roarstore from "../assets/roarstore.jpg";

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

const projects = [
  {
    name: "Roar Store App",
    description:
      "Mobile App for the Roar Store built using React Native and Firebase. The app is used by students to buy items within the school store.",
    image: roarstore,
    url: "https://usaco.org/",
  },
  {
    name: "NHS Tutor App",
    description:
      "Web App for the NHS Tutoring Program built using Next.js and Firebase. The app is used by Mr.Decker to create tutoring sessions.",
    image: tutorMeImage,
    url: "https://usaco.org/",
  },
  {
    name: "USACO",
    description:
      "The USA Computing Olympiad (USACO) is a prestigious computer programming competition aimed at pre-college students in the United States, focusing on algorithms and problem-solving.",
    image:
      "https://static1.squarespace.com/static/61e9374e0434354049a258f9/t/64abc1d942e9410095e635ce/1688977885761/USACO.png?format=1500w",
    url: "https://usaco.org/",
  },
];

export { projects };
