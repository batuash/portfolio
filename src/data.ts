import SamediLogoIcon from './components/SamediLogoIcon';
import HeavenHRLogoIcon from './components/HeavenHRLogoIcon';
import MobizcorpLogoIcon from './components/MobizcorpLogoIcon';
import BetaMediaLogoIcon from './components/LogoIcon';
import GalilSoftwareLogoIcon from './components/GalilSoftwareLogoIcon';
import EcommerceIcon from './components/EcommerceIcon';
import PersonalInjuryIcon from '@mui/icons-material/PersonalInjury';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import CoffeeIcon from '@mui/icons-material/Coffee';
import SickIcon from '@mui/icons-material/Sick';
import VaccinesIcon from '@mui/icons-material/Vaccines';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

export const profileData = {
    name: 'Adam Batwash',
    title: 'Fullstack Developer | React Specialist',
}

export const experienceData = [
  {
    logo: SamediLogoIcon,
    title: 'Senior Fullstack Developer',
    company: 'Samedi GmbH',
    date: 'November 2021 to Present:',
    description: `Engineered end-to-end full-stack features across web and mobile (using React and React Native), delivering complex logic for appointment scheduling and secure medical record sharing from a scalable Node.js backend.`,
    bulletPoints: [
      `Architected and implemented robust RESTful APIs in Node.js to securely manage and serve critical patient data to both web and mobile client applications.`,
      `Maximized code quality and integrity by establishing comprehensive unit, integration, and end-to-end (E2E) testing protocols, driving high automated code coverage across the entire stack.`,
      `Optimized developer productivity by configuring foundational tooling, including Jest, Appium (mobile E2E), and Storybook (component documentation), resulting in a streamlined Software Development Lifecycle.`,
      `Drove continuous improvement and knowledge sharing through consistent pair programming and detailed peer code reviews to ensure optimal performance and security of production code.`
    ],
  },
  {
    logo: HeavenHRLogoIcon,
    title: 'Senior Fullstack Developer',
    company: 'HeavenHR',
    date: 'June 2020 to October 2021:',
    description: `Architected and delivered the end-to-end Full-Stack solution for an enterprise-grade HR platform, utilizing React for the user interface and Node.js to build scalable microservices and RESTful APIs.`,
    bulletPoints: [
      `Designed, built, and maintained robust APIs using Node.js to securely handle, process, and serve complex data, ensuring high performance for multiple client applications.`,
      `Developed and maintained a comprehensive, responsive UI component library utilizing a modern stack: React, TypeScript, and StyledComponents, ensuring scalability and design consistency.`,
      `Engineered sophisticated data visualization and reporting modules in React, which efficiently consumed and rendered large datasets retrieved directly from the Node.js API.`,
      `Drove the full feature development lifecycle, from translating design mockups into production-ready React code to implementing systematic cross-browser testing and server-side performance tuning in Node.js.`
    ],
  },

  {
    logo: MobizcorpLogoIcon,
    title: 'Solution Engineer',
    company: 'Mobizcorp',
    date: 'March 2016 to May 2020:',
    description: `Help and consult in an aspiring e-commerce project, create a JavaScript framework that provides a swift and easy development process for users to build cross-platform applications that run on web, iOS, and Android`,
    bulletPoints: [
      `Developed a dynamic and secure platform that consumes the server API using React.js`,
      `Worked extensively with JavaScript (ES6), React.js, ReactNative, Redux, Jest, webpack, npm, and Node.js`,
      `Took initiative in the development process of the adaptive web-mobile platform.`,
      `Involvement in the implementation of the component-based architecture using JavaScript and React.`,
      `Took leadership in the implementation and integration of the web solution for our ReactNative code-base using React-native-web framework.`,
      `Usage of Git/GitHub as a Version control system.`
    ],
  },
  {
    logo: BetaMediaLogoIcon,
    title: 'Fullstack Developer',
    company: 'Betamedia',
    date: 'February 2014 to July 2015:',
    description: `Fullstack developer position as part of the development and optimisation team. Where I worked independently and also with other developers to build a web-based app using JavaScript, HTML, and CSS.`,
    bulletPoints: [
      `Built and maintained the front-end for the client's web application using HTML5, CSS3, JavaScript, jQuery, AngularJS, and Bootstrap.`,
      `Involved in creating user interfaces using jQuery.`,
      `Responsive website development using the Twitter Bootstrap platform.`,
      `Involved in the development, design, and implementation of the frontend part of the widget-based application.`,
      `Ability to write well-documented, well-commented, clear, and maintainable efficient code for web development.`
    ],
  },

  {
    logo: GalilSoftwareLogoIcon,
    title: 'Fullstack Developer',
    company: 'Galilsoftware',
    date: 'February 2012 to December 2013:',
    description: `Work in a team environment, adding frontend and backend features on a web-based enterprise security application.`,
    bulletPoints: [
      `Responsible for the overall layout design that meets cross-device compatibility using Bootstrap. color scheme of the website using HTML5 and CSS3.`,
      `Deep understanding of implementing the business rules in different layers, like UI, services, and backend.`,
      `Used jQuery to make the HTML and CSS interact with JavaScript functions to develop dynamic web pages.`,
      `Updated the user interface design with CSS and JavaScript.`,
      `Performed client-side validations over the submission part using JavaScript and jQuery.`
    ],
  }
];

export const frontEnd = [
  {
    name: 'ReactJs',
    icon: 'react',
  },
  {
    name: 'ReactNative',
    icon: null
  },
  {
    name: 'Redux',
    icon: "redux"
  },
  {
    name: 'Html5',
    icon: "html5"
  },
  {
    name: 'Css3',
    icon: "css3"
  },
  {
    name: 'Sass',
    icon: "sass"
  },
  {
    name: 'Less',
    icon: "less"
  },
  {
    name: 'StyledComponents',
    icon: null
  },
  {
    name: 'Tailwind',
    icon: "tailwindcss"
  },
  {
    name: 'NextJs',
    icon: "nextjs"
  },
  {
    name: 'Remix',
    icon: "remix"
  }
];

export const backend = [
  {
    name: 'NodeJs',
    icon: "nodejs"
  },
  {
    name: 'ExpressJs',
    icon: "expressjs"
  },
  {
    name: 'NestJS',
    icon: "nestjs"
  },
  {
    name: 'Ruby on Rails',
    icon: "rails"
  },
  {
    name: 'RESTful APIs',
    icon: null
  },
  {
    name: 'GraphQL',
    icon: "graphql"
  },
  {
    name: 'Microservices',
    icon: null
  },
  {
    name: 'Serverless (AWS Lambda)',
    icon: "serverless"
  }
];

export const programmingLanguages = [
  {
    name: 'TypeScript',
    icon: "typescript"
  },
  {
    name: 'JavaScript',
    icon: "js"
  },
  {
    name: 'Kotlin',
    icon: "kotlin"
  },
  {
    name: 'Scala',
    icon: "scala"
  },
  {
    name: 'Elm',
    icon: "elm"
  },
  {
    name: 'Objective-C',
    icon: null
  },
  {
    name: 'Swift',
    icon: "swift"
  }
];

export const databases = [
  {
    name: 'Postgresql',
    icon: "postgresql"
  },
  {
    name: 'MongoDB',
    icon: "mongodb"
  },
  {
    name: 'TypeORM',
    icon: null
  }
];

export const tools = [
  {
    name: 'Npm',
    icon: "npm"
  },
  {
    name: 'Yarn',
    icon: null
  },
  {
    name: 'Git',
    icon: "git"
  },
  {
    name: 'Jest',
    icon: "jest"
  },
  {
    name: 'Grunt',
    icon: "gruntjs"
  },
  {
    name: 'Docker',
    icon: "docker"
  },
  {
    name: 'Kubernetes',
    icon: "kubernetes"
  },
  {
    name: 'GitHub',
    icon: "github"
  },
  {
    name: 'CI/CD',
    icon: null
  },
  {
    name: 'Agile/Scrum/Shapeup',
    icon: "jira"
  }
];

export const skillsData = {
  "Frontend": frontEnd,
  "Backend": backend,
  "Programming Languages": programmingLanguages,
  "Databases": databases,
  "Tools": tools
};

export const projectsData = [
  {
    name: 'Ecommerce App',
    description: 'A full-featured ecommerce application that provides a complete shopping experience',
    url: 'https://ecommerce-app-2gxe.onrender.com',
    logo: EcommerceIcon,
  },
  {
    name: 'Patient App Portal',
    description: "Patient facing healthcare web app, focusing on scheduling and secure record sharing",
    url: 'https://patient.samedi.de',
    logo: PersonalInjuryIcon,
  },
  {
    name: 'Doctor App Portal',
    description: 'Healthcare platform for medical professionals with scheduling and secure patient data management',
    url: 'https://app.samedi.de',
    logo: LocalHospitalIcon,
  },
  {
    name: 'Heaven HR',
    description: 'HR platform web app for managing employees and their information',
    url: 'https://www.heavenhr.com',
    logo: AccountBalanceWalletIcon,
  },
  {
    name: 'DavidStea',
    description: 'Online retail platform for tea products with user authentication and order management',
    url: 'https://davidstea.com',
    logo: CoffeeIcon,
  },
  {
    name: 'My Patient Portal',
    description: 'Customizable healthcare mobile app for patients with appointment scheduling and secure record management',
    url: 'https://apps.apple.com/de/app/my-patient-portal/id6742455138?l=en-GB',
    logo: SickIcon,
  },
  {
    name: 'Samedi Patient',
    description: 'Healthcare mobile app enabling patients to schedule appointments and securely access their medical records',
    url: 'https://apps.apple.com/de/app/samedi-patient/id1579519824?l=en-GB',
    logo: VaccinesIcon,
  },
  {
    name: 'NewStore - Bring it to me',
    description: 'A full-featured ecommerce mobile app, featuring a robust shopping experience',
    url: 'https://apps.apple.com/de/app/newstore-bring-it-to-me/id6504482921?l=en-GB',
    logo: AddShoppingCartIcon,
  },
];
