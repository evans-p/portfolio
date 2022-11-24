import img from "../Assets/project.jpg";

const portfolioHeader = {
  titleMain: "my",
  titleSecondary: "portfolio",
  subtitle:
    "A FEW RECENT DESIGN AND CODING PROJECTS. WANT TO SEE MORE? EMAIL ME.",
};

const portfolioData = [
  {
    id: "A1",
    title: "diploma thesis 1",
    description: "My diploma thesis",
    technologies: "html css javaScript",
    duration: "9 months",
    img: img,
  },
  {
    id: "B2",
    title: "diploma thesis 2",
    description: "My diploma thesis",
    technologies: "html css javaScript",
    duration: "9 months",
    img: img,
  },
  {
    id: "C3",
    title: "diploma thesis 3",
    description: "My diploma thesis",
    technologies: "html css javaScript",
    duration: "9 months",
    img: img,
  },
  {
    id: "D4",
    title: "diploma thesis 4",
    description: "My diploma thesis",
    technologies: "html css javaScript",
    duration: "9 months",
    img: img,
  },
  {
    id: "E5",
    title: "diploma thesis 5",
    description: "My diploma thesis",
    technologies: "html css javaScript",
    duration: "9 months",
    img: img,
  },
  {
    id: "F6",
    title: "diploma thesis 6",
    img: img,
    info: [
      [<i className="bi bi-file-earmark-text"></i>, "project", "website"],
      [
        <i className="bi bi-file-earmark-text"></i>,
        "description",
        "My diploma thesis",
      ],
      [
        <i className="bi bi-file-earmark-text"></i>,
        "technologies",
        "html css javaScript",
      ],
      [<i className="bi bi-file-earmark-text"></i>, "duration", "9 months"],
    ],
  },
];

export { portfolioData, portfolioHeader };
