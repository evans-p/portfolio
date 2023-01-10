import portfolioProject from "../Assets/portfolio-project.png";
import degracomProject from "../Assets/degracom-project.png";
import minigameProject from "../Assets/mini-games-project.png";
import footballStatisticsProject from "../Assets/football-statistics-project.png";

const portfolioHeader = {
  titleMain: "my",
  titleSecondary: "portfolio",
  subtitle:
    "A FEW RECENT DESIGN AND CODING PROJECTS. WANT TO SEE MORE? EMAIL ME.",
};

const portfolioData = [
  {
    id: "A1",
    title: "portfolio",
    img: portfolioProject,
    // link: "https://github.com/evans-p/diploma-thesis",
    info: [
      [<i className="bi bi-file-earmark-text"></i>, "project", "website"],
      [
        <i className="bi bi-info-circle"></i>,
        "description",
        "My personal portfolio website",
      ],
      [
        <i className="bi bi-code-slash"></i>,
        "technologies",
        "html css javaScript react",
      ],
      [<i className="bi bi-hourglass"></i>, "duration", "1 month"],
    ],
  },
  {
    id: "B2",
    title: "Diploma thesis",
    img: degracomProject,
    link: "https://github.com/evans-p?tab=repositories",
    info: [
      [<i className="bi bi-file-earmark-text"></i>, "project", "website"],
      [
        <i className="bi bi-info-circle"></i>,
        "description",
        "project for deploma thesis",
      ],
      [
        <i className="bi bi-code-slash"></i>,
        "technologies",
        "react Java REST ACCeleo",
      ],
      [<i className="bi bi-hourglass"></i>, "duration", "9 months"],
    ],
  },
  {
    id: "C3",
    title: "Minigames",
    img: minigameProject,
    link: "https://github.com/evans-p/mini-games",
    info: [
      [<i className="bi bi-file-earmark-text"></i>, "project", "website"],
      [
        <i className="bi bi-info-circle"></i>,
        "description",
        "A series of minigames",
      ],
      [
        <i className="bi bi-code-slash"></i>,
        "technologies",
        "html css javaScript react",
      ],
      [<i className="bi bi-hourglass"></i>, "duration", "1 month"],
    ],
  },

  {
    id: "D4",
    title: "FOOTBALL Statistics",
    img: footballStatisticsProject,
    link: "https://drive.google.com/file/d/1pU6wvfW9omWWf5OZh3_gWty9Wf_sER1T/view?usp=share_link",
    info: [
      [<i className="bi bi-file-earmark-text"></i>, "project", "database"],
      [
        <i className="bi bi-info-circle"></i>,
        "description",
        "A database to store football statistics",
      ],
      [<i className="bi bi-code-slash"></i>, "technologies", "sql"],
      // [<i className="bi bi-hourglass"></i>, "duration", "1 month"],
    ],
  },
];

export { portfolioData, portfolioHeader };
