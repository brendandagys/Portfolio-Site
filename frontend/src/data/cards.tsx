import React from 'react'
import boston from '../images/boston.jpg'
import screeningAppScreenshot from '../images/screening-app-screenshot.png'
import financesAppScreenshot from '../images/finances-app-screenshot.png'
import proShopAppScreenshot from '../images/proshop-app-screenshot.png'
import vocabularyTrainerScreenshot from '../images/vocabulary-trainer-app-screenshot.png'

import VocabularyTrainer from '../components/VocabularyTrainer'
import { Theme } from '@mui/material'

import FinancesDescription from '../components/card-descriptions/FinancesDescription'
import CovidScreeningDescription from '../components/card-descriptions/CovidScreeningDescription'
import EcommerceDescription from '../components/card-descriptions/EcommerceDescription'
import EmergencyResponseDescription from '../components/card-descriptions/EmergencyResponseDescription'
import WaitingRoomNotificationDescription from '../components/card-descriptions/WaitingRoomNotificationDescription'
import VocabularyTrainerDescription from '../components/card-descriptions/VocabularyTrainerDescription'
import MusicTheoryPracticeDescription from '../components/card-descriptions/MusicTheoryPracticeDescription'
import IncidentReportingDescription from '../components/card-descriptions/IncidentReportingDescription'
import DeviceReprocessingDescription from '../components/card-descriptions/DeviceReprocessingDescription'

export type CardDataType = {
  image: string
  title: string
  alt: string
  demoURL: string
  gitHubURL: string
  text: string
  dialogContent?: React.ReactChild
  descriptionContent?: React.ReactChild
}

const portfolioCards = (theme: Theme) => [
  {
    image: financesAppScreenshot,
    title: 'Finances and Budgeting Tool',
    alt: '',
    text: 'A financial tracker that allows users to track their expenses and asset growth. It additionally contains clock + calculator widgets that I built with vanilla JavaScript, as well as a mood tracker page!',
    demoURL: 'https://finances.brendandagys.com',
    gitHubURL: 'https://github.com/brendandagys/Finances',
    descriptionContent: <FinancesDescription theme={theme} />,
  },
  {
    image: screeningAppScreenshot,
    title: 'COVID-19 Screening',
    alt: '',
    text: 'An improved clone of common workplace COVID-19 screening apps. One solution that I implemented was to have the application remember if a user has already completed the daily screening, and other general UX improvements such as transitions.',
    demoURL: 'https://screening.brendandagys.com',
    gitHubURL: 'https://github.com/brendandagys/COVID-19-Screening-App',
    descriptionContent: <CovidScreeningDescription theme={theme} />,
  },
  {
    image: proShopAppScreenshot,
    title: 'e-Commerce Store',
    alt: '',
    text: 'A fully-functioning e-commerce application for a fictional technology supplier. Features include a shopping cart, product reviews,  administrator portal, integration with PayPal, and shipment tracking.',
    demoURL: 'https://e-commerce.brendandagys.com',
    gitHubURL: 'https://github.com/brendandagys',
    descriptionContent: <EcommerceDescription theme={theme} />,
  },
  {
    image: boston,
    title: 'Emergency Response Communication Hub',
    alt: '',
    text: 'A communication hub for staff of a fictional hospital to track management of entry/exit points, communication with Fire/Police departments, and other internal staff in the event of an emergency.',
    demoURL: '',
    gitHubURL:
      'https://github.com/brendandagys/Hospital-Emergency-Response-Management-and-Communication-Web-App',
    descriptionContent: <EmergencyResponseDescription theme={theme} />,
  },
  {
    image: boston,
    title: 'Waiting Room Notifier',
    alt: '',
    text: 'A form that allows a clinic or waiting room clerk to optionally record contact information of those waiting. They can be sent an email or text when it is time for their appointment in the case that they wish to leave the waiting room.',
    demoURL: '',
    gitHubURL:
      'https://github.com/brendandagys/Hospital-Clinic-Waiting-Room-Notification-Web-App',
    descriptionContent: <WaitingRoomNotificationDescription theme={theme} />,
  },
  {
    image: vocabularyTrainerScreenshot,
    title: 'Vocabulary Trainer Game',
    alt: '',
    text: 'An API for a word-guessing game. Users are presented with a definition and must guess the corresponding word. Hints can be requested. Game state is saved and games can be resumed on next site visit through use of `localstorage`. Click to PLAY!',
    demoURL: 'https://vocabulary.brendandagys.com',
    gitHubURL: 'https://github.com/brendandagys/Vocabulary-Trainer',
    dialogContent: <VocabularyTrainer theme={theme} />,
    descriptionContent: <VocabularyTrainerDescription theme={theme} />,
  },
  {
    image: boston,
    title: 'Music Theory Practice Tool',
    alt: '',
    text: 'A command-line program that offers various options for practice/study, such a chord recital or scale practice. Audio files are included in the program so that users can hear and practice to pedal tones.',
    demoURL: '',
    gitHubURL: 'https://github.com/brendandagys/Guitar-Theory-Practice-Tool',
    descriptionContent: <MusicTheoryPracticeDescription theme={theme} />,
  },
  {
    image: boston,
    title: 'Incident Reporting Tool',
    alt: '',
    text: "A Python GUI application built with Tkinter that allows for 'incident' data's entry, storage, and analysis by members of an organization's Security team.",
    demoURL: '',
    gitHubURL:
      'https://github.com/brendandagys/Hospital-Protective-Services-Incident-Reporting-Software',
    descriptionContent: <IncidentReportingDescription theme={theme} />,
  },
  {
    image: boston,
    title: 'Auditing Tool',
    alt: '',
    text: 'A Python GUI application built with Tkinter that provides a data entry, storage, and analysis solution for any paper-based auditing process.',
    demoURL: '',
    gitHubURL:
      'https://github.com/brendandagys/Hospital-Medical-Device-Reprocessing-Auditing-Software',
    descriptionContent: <DeviceReprocessingDescription theme={theme} />,
  },
]

export default portfolioCards
