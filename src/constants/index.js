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

const projects = [
  {
    name: "Roar Store App",
    description:
      "Mobile App for the Roar Store built using React Native and Firebase. The app is used by students to buy items within the school store.",
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

export { projects };
