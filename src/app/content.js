// Logo Imports
import NodeJsLogo from "assets/img/logos/grayscale-nodejs-240.png"
import BootstrapLogo from "assets/img/logos/grayscale-bootstrap-240.png"
import FirebaseLogo from "assets/img/logos/grayscale-firebase-240.png"
import GitLogo from "assets/img/logos/grayscale-git-240.png"
import HerokuLogo from "assets/img/logos/grayscale-heroku-240.png"
import JavaLogo from "assets/img/logos/grayscale-java-240.png"
import JavascriptLogo from "assets/img/logos/grayscale-js-240.png"
import MaterialUiLogo from "assets/img/logos/grayscale-materialui-240.png"
import MongoDbLogo from "assets/img/logos/grayscale-mongodb-240.png"
import MySqlLogo from "assets/img/logos/grayscale-mysql-240.png"
import PythonLogo from "assets/img/logos/grayscale-python-240.png"
import ReactLogo from "assets/img/logos/grayscale-react-240.png"
import ReduxLogo from "assets/img/logos/grayscale-redux-240.png"
import StyledComponentsLogo from "assets/img/logos/grayscale-styled-components-240.png"
import GoogleAppsScriptLogo from 'assets/img/logos/grayscale-google-apps-240.png'
import SocketIoLogo from 'assets/img/logos/grayscale-socket-io-240.png'

// Screenshot imports
import ProductionManagerScreenshot from 'assets/clean/screenshot-production-manager.png'
import SnakeScreenshot from 'assets/clean/screenshot-snake.png'
import PianoPortfolioScreenshot from 'assets/clean/screenshot-portfolio-piano.png'
import FleaScreenshot from 'assets/clean/screenshot-flea.png'

export const skills = [
  {
    name: "Javascript",
    logo: JavascriptLogo
  },
  {
    name: "Python",
    logo: PythonLogo
  },
  {
    name: "React",
    logo: ReactLogo
  },
  {
    name: "Redux",
    logo: ReduxLogo
  },
  {
    name: "Styled Components",
    logo: StyledComponentsLogo
  },
  {
    name: "Bootstrap",
    logo: BootstrapLogo
  },
  {
    name: "Material UI",
    logo: MaterialUiLogo
  },
  {
    name: "NodeJS",
    logo: NodeJsLogo
  },
  {
    name: "MongoDB",
    logo: MongoDbLogo
  },
  {
    name: "Socket.io",
    logo: SocketIoLogo
  },
  {
    name: "Git/GitHub",
    logo: GitLogo
  },
  {
    name: "Firebase",
    logo: FirebaseLogo
  },
  {
    name: "Google Apps Script",
    logo: GoogleAppsScriptLogo
  },
  {
    name: "Heroku",
    logo: HerokuLogo
  },
]

export const portfolio = [
  {
    // image: ContentProucer,
    name: "Setlist Manager (Demo)",
    description: "Musician's who manage multiple projects, play regular events, or have rotating setlists can use this tool to better coordinate their operations.",
    link: "https://content-producer.web.app",
    tech: "React, Redux, Typescript, NodeJs, Heroku",
    github: "Contact to discuss code",
    private: true
  },
  {
    image: ProductionManagerScreenshot,
    name: "Production Manager (Demo)",
    description: "Production management app aimed at assisting the templating, creation, and monitoring of multiple stage campaigns or simple content productions.",
    link: "https://content-producer.web.app",
    tech: "React, Redux, Typescript, Bootstrap, Firebase",
    github: "Contact to discuss code",
    private: true
  },
  {
    image: FleaScreenshot,
    name: "Flea Theater Voting (Demo)",
    description: "A demo created for The Flea Theater to demonstrate an online solution for their existing Serials programming.",
    link: "https://gifted-kilby-f503fd.netlify.app/",
    tech: "React, Redux, ReactPlayer (video), Google Apps Script, Netlify",
    github: "https://github.com/mweitzen/flea-voting",
  },
  {
    image: SnakeScreenshot,
    name: "Snake Game",
    description: "A simple version of the classic Snake game.",
    link: "https://confident-perlman-3fa00d.netlify.app/",
    tech: "VanillaJS, HTML5, CSS (with Grid), Netlify",
    github: "https://github.com/mweitzen/snake-html",
  },
  {
    image: PianoPortfolioScreenshot,
    name: "Piano Portfolio",
    description: "A personal portfolio site to demonstrate my musicianship.",
    link: "https://friendly-brown-07317c.netlify.app",
    tech: "React, React-Static, Netlify",
    github: "https://github.com/mweitzen/static-portfolio-piano",
  },
]
