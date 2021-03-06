
const mainBody = {
  backgroundColor: "#1b767c",
  firstName: "Chris",
  middleName: "",
  lastName: "Filiatrault",
  message: "Software Developer",
  icons: [
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/chris-filiatrault/",
    },
    {
      image: "fa-github",
      url: "https://github.com/Chris-Filiatrault",
    },
    {
      image: "fa-medium",
      url: "https://medium.com/@chris.filiatrault",
    }
  ],
};

const about = {
  show: true,
  heading: "About",
  imageLink: null,
  imageSize: 375,
  message1: "Hi there! My name's Chris.",
  message2: "I have a long history of sport, studied Economics, speak Japanese, work as a Software Developer and successfully manage a condition called Fibromyalgia.",
  message3: "I built this website to learn more about web development and showcase a few of my projects."
};


const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: ".NET", value: 70 },
    { name: "HTML/CSS/JS", value: 80 },
    { name: "React", value: 70 },
    { name: "iOS Development", value: 85 },
    { name: "Source Control", value: 80 },
    { name: "OOP (Python, C#)", value: 70 },
    { name: "MarkLogic (NoSQL)", value: 75 },
    { name: "Statistics/Data Analysis", value: 80 },
  ],
  softSkills: [
    { name: "Problem Solving", value: 85 },
    { name: "Learning", value: 95 },
    { name: "Critial Thinking", value: 90 },
    { name: "Teamwork", value: 85 },
    { name: "Communication", value: 90 },
    { name: "Adaptability", value: 75 },
    { name: "Time Management", value: 90 },
    { name: "Emotional Awareness", value: 85 },
  ],
};


const getInTouch = {
  show: false,
  heading: "Get In Touch",
  message:
    "I'm currently looking for Software Developer positions in .NET or front end. To arrange a conversation, please feel free to reach out on "
};

const projects = {
  show: true,
  heading: "Projects",
  data: [
    {
      name: "Tax Calculator",
      description: "A .NET application with a UI and API for calculating Tax.",
      languages: "C#",
      link: "https://github.com/Chris-Filiatrault/TaxCalculator"
    },
    {
      name: "Personal Website",
      description: "The source code for this website.",
      languages: "HTML, SCSS, JavaScript, Bootstrap, React",
      link: "https://github.com/Chris-Filiatrault/chris-filiatrault.github.io"
    },
    {
      name: "iShop",
      description: "A shopping list app for iOS & MacOS.",
      languages: "Swift",
      link: "https://github.com/Chris-Filiatrault/iShop"
    },
    {
      name: "Simple List",
      description: "A single-page iOS list app.",
      languages: "Swift",
      link: "https://github.com/Chris-Filiatrault/Simple-List"
    }
  ]
}


export { mainBody, about, skills, getInTouch, projects };
