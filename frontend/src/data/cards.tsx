import React from 'react';
import screeningAppScreenshot from '../images/screening-app-screenshot.png';
import financesAppScreenshot from '../images/finances-app-screenshot.png';
import guitarShopAppScreenshot from '../images/guitar-shop-app-screenshot.png';
import vocabularyTrainerScreenshot from '../images/vocabulary-trainer-app-screenshot.png';
import auditAppScreenshot from '../images/audit-app-screenshot.png';
import incidentReportingAppScreenshot from '../images/incident-reporting-app-screenshot.png';
import hubAppScreenshot from '../images/hub-app-screenshot.png';
import musicTheoryAppScreenshot from '../images/music-theory-app-screenshot.png';
import waitingRoomAppScreenshot from '../images/waiting-room-app-screenshot.png';
import personalBlogScreenshot from '../images/personal-blog-app-screenshot.png';
import browserEditorScreenshot from '../images/browser-editor-app-screenshot.png';
import spendingScreenshot from '../images/spending-app-screenshot.png';
import cloudFormationScreenshot from '../images/cloudformation-screenshot.png';
import vacationRentalSiteScreenshot from '../images/vacation-rental-site-screenshot.png';
import serverlessMergeSortScreenshot from '../images/serverless-merge-sort-screenshot.png';
import rustLogoScreenshot from '../images/rust-logo-screenshot.png';

import VocabularyTrainer from '../components/VocabularyTrainer';
import { Theme } from '@mui/material';

import FinancesDescription from '../components/card-descriptions/FinancesDescription';
import CovidScreeningDescription from '../components/card-descriptions/CovidScreeningDescription';
import EcommerceDescription from '../components/card-descriptions/EcommerceDescription';
import EmergencyResponseDescription from '../components/card-descriptions/EmergencyResponseDescription';
import WaitingRoomNotificationDescription from '../components/card-descriptions/WaitingRoomNotificationDescription';
import VocabularyTrainerDescription from '../components/card-descriptions/VocabularyTrainerDescription';
import MusicTheoryPracticeDescription from '../components/card-descriptions/MusicTheoryPracticeDescription';
import IncidentReportingDescription from '../components/card-descriptions/IncidentReportingDescription';
import DeviceReprocessingDescription from '../components/card-descriptions/DeviceReprocessingDescription';
import PersonalBlogDescription from '../components/card-descriptions/PersonalBlogDescription';
import BrowserEditorDescription from '../components/card-descriptions/BrowserEditorDescription';
import SpendingDescription from '../components/card-descriptions/SpendingDescription';
import CloudFormationDescription from '../components/card-descriptions/CloudFormationDescription';

export type CardDataType = {
  image: string;
  title: string;
  alt: string;
  demoURL?: string;
  gitHubURL: string;
  healthCheckUrl?: string;
  healthCheckStatusCode?: number;
  text: string;
  dialogContent?: React.ReactChild;
  descriptionContent?: React.ReactChild;
  tooltipContent: string;
};

const portfolioCards = (theme: Theme) => [
  {
    image: vacationRentalSiteScreenshot,
    title: 'Vacation Rental Serverless Website',
    alt: 'Vacation rentals serverless website',
    text: 'A serverless application whose backend is made with AWS SAM and Rust Lambda functions + API Gateway, and whose frontend is a React application served by CloudFront. Includes CloudFormation templates for custom resource generation on-the-fly.',
    demoURL:
      process.env.NODE_ENV === 'production'
        ? 'https://calaceite.holiday'
        : 'http://calaceite.holiday',
    gitHubURL: 'https://github.com/brendandagys/business-site',
    tooltipContent: '',
  },
  {
    image: serverlessMergeSortScreenshot,
    title: 'Serverless Merge Sort with AWS SAM',
    alt: 'Serverless merge sort with AWS SAM',
    text: 'A serverless API built with AWS SAM and the Rust programming language, that takes an array of numbers and returns them sorted, using the merge sort algorithm.',
    gitHubURL: 'https://github.com/brendandagys/Serverless-Merge-Sort-with-AWS-SAM',
    tooltipContent: '',
  },
  {
    image: rustLogoScreenshot,
    title: 'Rust DNS Resolver',
    alt: 'Rust DNS Resolver',
    text: 'A DNS resolver that takes a domain name and communicates with DNS servers to return the respective IP address.',
    gitHubURL: 'https://github.com/brendandagys/Rust-DNS-Resolver',
    tooltipContent: '',
  },
  {
    image: rustLogoScreenshot,
    title: 'TCP with Rust',
    alt: 'TCP with Rust',
    text: 'Initiate a simple TCP stream to make a GET request to my website.',
    gitHubURL: 'https://github.com/brendandagys/TCP-with-Rust',
    tooltipContent: '',
  },
  {
    image: personalBlogScreenshot,
    title: 'Personal Blog',
    alt: 'Personal Blog',
    text: 'A place for me to post blog articles and connect with others. Built with Next.js and GraphQL. I also utilized GraphCMS to manage content handily. Server-side rendering from Next.js provides a very speedy rendering time for quick delivery of content.',
    demoURL:
      process.env.NODE_ENV === 'production'
        ? 'https://blog.brendandagys.com'
        : 'http://localhost:3005',
    gitHubURL: 'https://github.com/brendandagys/Personal-Blog',
    healthCheckUrl:
      process.env.NODE_ENV === 'production'
        ? 'https://blog.brendandagys.com/api/health'
        : 'http://localhost:3005/api/health',
    descriptionContent: <PersonalBlogDescription theme={theme} />,
    tooltipContent: 'Click anywhere on the tile to view the application!',
  },
  {
    image: financesAppScreenshot,
    title: 'Finances and Budgeting Tracker',
    alt: 'Finances and Budgeting Tracker',
    text: 'A financial tracker that allows users to track their expenses and asset growth. It additionally contains clock + calculator widgets that I built with vanilla JavaScript, as well as a mood tracker page!',
    demoURL:
      process.env.NODE_ENV === 'production'
        ? 'https://finances.brendandagys.com'
        : 'http://localhost:3001',
    gitHubURL: 'https://github.com/brendandagys/Finances',
    healthCheckUrl:
      process.env.NODE_ENV === 'production'
        ? 'https://finances.brendandagys.com/api/health'
        : 'http://localhost:5001/api/health',
    descriptionContent: <FinancesDescription theme={theme} />,
    tooltipContent: 'Click anywhere on the tile to view the application!',
  },
  {
    image: cloudFormationScreenshot,
    title: 'React-TypeScript Deployment with CloudFormation',
    alt: 'React-TypeScript Deployment with CloudFormation',
    text: 'A GitHub repository that contains CloudFormation templates that describe infrastructure to deploy your React-TypeScript application on AWS. Technologies include Docker, Fargate, S3, and many other services. Also, see my blog post that goes into step-by-step detail!',
    gitHubURL: 'https://github.com/brendandagys/COVID-19-Screening-App',
    descriptionContent: <CloudFormationDescription theme={theme} />,
    tooltipContent: 'Click anywhere to view the GitHub repository!',
  },
  {
    image: screeningAppScreenshot,
    title: 'COVID-19 Screening',
    alt: 'COVID-19 Screening',
    text: 'An improved clone of common workplace COVID-19 screening apps. One solution that I implemented was to have the application remember if a user has already completed the daily screening, and other general UX improvements such as transitions. Users can have the results emailed to them as well in case of cellular data limitations.',
    demoURL:
      process.env.NODE_ENV === 'production'
        ? 'https://screening.brendandagys.com'
        : 'http://localhost:3002',
    gitHubURL: 'https://github.com/brendandagys/COVID-19-Screening-App',
    healthCheckUrl:
      process.env.NODE_ENV === 'production'
        ? 'https://screening.brendandagys.com/api/health'
        : 'http://localhost:5002/api/health',
    descriptionContent: <CovidScreeningDescription theme={theme} />,
    tooltipContent: 'Click anywhere on the tile to view the application!',
  },
  {
    image: guitarShopAppScreenshot,
    title: 'e-Commerce Guitar Store',
    alt: 'e-Commerce Guitar Store',
    text: 'A fully-functioning e-commerce application for a fictional guitar store. Features include a shopping cart, product reviews, administrator portal, integration with PayPal, and shipment tracking.',
    demoURL:
      process.env.NODE_ENV === 'production'
        ? 'https://e-commerce.brendandagys.com'
        : 'http://localhost:3003',
    gitHubURL: 'https://github.com/brendandagys/e-Commerce-Store',
    healthCheckUrl:
      process.env.NODE_ENV === 'production'
        ? 'https://e-commerce.brendandagys.com/api/health'
        : 'http://localhost:5003/api/health',
    descriptionContent: <EcommerceDescription theme={theme} />,
    tooltipContent: 'Click anywhere on the tile to view the application!',
  },
  {
    image: vocabularyTrainerScreenshot,
    title: 'Vocabulary Trainer Game',
    alt: 'Vocabulary Trainer Game',
    text: "An API for a word-guessing game. Users are presented with a definition and must guess the corresponding word. Hints can be requested. Game state is saved and games can be resumed on a user's next site visit through use of `localstorage`. CLICK TO PLAY!",
    gitHubURL: 'https://github.com/brendandagys/Vocabulary-Trainer',
    healthCheckUrl:
      process.env.NODE_ENV === 'production'
        ? 'https://vocabulary.brendandagys.com/api/health'
        : 'http://localhost:5004/api/health',
    dialogContent: <VocabularyTrainer theme={theme} />,
    descriptionContent: <VocabularyTrainerDescription theme={theme} />,
    tooltipContent: 'Click anywhere on the tile to view the application!',
  },
  {
    image: browserEditorScreenshot,
    title: 'Browser-Based Code Editor/Transpiler',
    alt: 'Browser-Based Code Editor/Transpiler',
    text: 'A React-TypeScript application that allows users to use an interactive browser-based coding environment to type JavaScript code. The editor is in a markdown format, with multiple coding cells that users can add, remove, and re-arrange to their liking.',
    demoURL:
      process.env.NODE_ENV === 'production'
        ? 'https://code.brendandagys.com'
        : 'http://localhost:3004',
    gitHubURL:
      'https://github.com/brendandagys/Browser-Based-Code-Editor-Transpiler',
    // healthCheckUrl:
    //   process.env.NODE_ENV === 'production'
    //     ? 'https://code.brendandagys.com'
    //     : 'http://localhost:3004',
    descriptionContent: <BrowserEditorDescription theme={theme} />,
    tooltipContent: 'Click anywhere on the tile to view the application!',
  },
  {
    image: spendingScreenshot,
    title: 'Personal Budgeting Assistant',
    alt: 'Personal Budgeting Assistant',
    text: 'A Web app that I use to track my spending habits. A form allows for customized input of purchases. Afterward, a list of all purchases can be viewed and filtered by category of purchase or a specific time period. Chart.js was used to create dynamic charts to visualize spending patterns.',
    demoURL:
      process.env.NODE_ENV === 'production'
        ? 'https://spending.brendandagys.com'
        : 'http://localhost:8000',
    gitHubURL: 'https://github.com/brendandagys/Personal-Budgeting-Assistant',
    healthCheckUrl:
      process.env.NODE_ENV === 'production'
        ? 'https://spending.brendandagys.com'
        : 'http://localhost:8000',
    healthCheckStatusCode: 302,
    descriptionContent: <SpendingDescription theme={theme} />,
    tooltipContent: 'Click anywhere on the tile to view the application!',
  },
  {
    image: hubAppScreenshot,
    title: 'Emergency Response Communication Hub',
    alt: 'Emergency Response Communication Hub',
    text: 'A communication hub/messaging system for staff of a fictional hospital to track management of entry/exit points, communication with Fire/Police departments, and other internal staff in the event of an emergency.',
    gitHubURL:
      'https://github.com/brendandagys/Hospital-Emergency-Response-Management-and-Communication-Web-App',
    descriptionContent: <EmergencyResponseDescription theme={theme} />,
    tooltipContent: 'Demo coming soon!',
  },
  {
    image: waitingRoomAppScreenshot,
    title: 'Waiting Room Notifier',
    alt: 'Waiting Room Notifier',
    text: 'A simple application that allows a clinic or waiting room assistant to optionally record contact information of those waiting. The person waiting can be sent an email or text when it is time for their appointment in the case that they wish to leave the waiting room.',
    gitHubURL:
      'https://github.com/brendandagys/Hospital-Clinic-Waiting-Room-Notification-Web-App',
    descriptionContent: <WaitingRoomNotificationDescription theme={theme} />,
    tooltipContent: 'Demo coming soon!',
  },
  {
    image: musicTheoryAppScreenshot,
    title: 'Music Theory Practice Tool',
    alt: 'Music Theory Practice Tool',
    text: 'A command-line program that offers various options for practice/study, such a chord recital or scale practice. Audio files are included in the program so that users can hear and practice to pedal tones.',
    gitHubURL: 'https://github.com/brendandagys/Guitar-Theory-Practice-Tool',
    descriptionContent: <MusicTheoryPracticeDescription theme={theme} />,
    tooltipContent: 'No demo available. Please clone from GitHub.',
  },
  {
    image: incidentReportingAppScreenshot,
    title: 'Incident Reporting Tool',
    alt: 'Incident Reporting Tool',
    text: "A Python GUI application built with Tkinter that allows for 'incident' data's entry, storage, and analysis by members of an organization's Security team.",
    gitHubURL:
      'https://github.com/brendandagys/Hospital-Protective-Services-Incident-Reporting-Software',
    descriptionContent: <IncidentReportingDescription theme={theme} />,
    tooltipContent: 'No demo available. Please clone from GitHub.',
  },
  {
    image: auditAppScreenshot,
    title: 'Auditing Tool',
    alt: 'Auditing Tool',
    text: 'A Python GUI application built with Tkinter that provides a data entry, storage, and analysis solution via multiple reports for a paper-based auditing process.',
    gitHubURL:
      'https://github.com/brendandagys/Hospital-Medical-Device-Reprocessing-Auditing-Software',
    descriptionContent: <DeviceReprocessingDescription theme={theme} />,
    tooltipContent: 'No demo available. Please clone from GitHub.',
  },
];

export default portfolioCards;
