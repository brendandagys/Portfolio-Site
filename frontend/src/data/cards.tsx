import React from 'react'
import boston from '../images/boston.jpg'

import VocabularyTrainer from '../components/VocabularyTrainer'
import { Theme } from '@mui/material'

export type CardDataType = {
  image: string
  title: string
  alt: string
  demoURL: string
  gitHubURL: string
  text: string
  dialogContent?: React.ReactChild
}

const portfolioCards = (theme: Theme) => [
  {
    image: boston,
    title: 'Finances and Budgeting Tool',
    alt: '',
    text: 'A financial tracker that allows users to track their expenses and asset growth. It additionally contains clock + calculator widgets that I built with vanilla JavaScript, as well as a mood tracker page!',
    demoURL: 'https://finances.brendandagys.com',
    gitHubURL: 'https://github.com/brendandagys/Finances',
  },
  {
    image: boston,
    title: 'COVID-19 Screening App',
    alt: '',
    text: 'An improved clone of common workplace COVID-19 screening apps. One solution that I implemented was to have the application remember if a user has already completed the daily screening, and other general UX improvements such as transitions.',
    demoURL: '',
    gitHubURL: 'https://github.com/brendandagys/COVID-19-Screening-App',
  },
  {
    image: boston,
    title: 'E-commerce Web App',
    alt: '',
    text: 'A fully-functioning e-commerce application for a fictional technology supplier. Features include a shopping cart, product reviews,  administrator portal, integration with PayPal, and shipment tracking.',
    demoURL: '',
    gitHubURL: 'https://github.com/brendandagys',
  },
  {
    image: boston,
    title: 'Emergency Response Communication Hub',
    alt: '',
    text: 'A communication hub for staff of a fictional hospital to track management of entry/exit points, communication with Fire/Police departments, and other internal staff in the event of an emergency.',
    demoURL: '',
    gitHubURL:
      'https://github.com/brendandagys/Hospital-Emergency-Response-Management-and-Communication-Web-App',
  },
  {
    image: boston,
    title: 'Waiting Room Notification App',
    alt: '',
    text: 'A form that allows a clinic or waiting room clerk to optionally record contact information of those waiting. They can be sent an email or text when it is time for their appointment in the case that they wish to leave the waiting room.',
    demoURL: '',
    gitHubURL:
      'https://github.com/brendandagys/Hospital-Clinic-Waiting-Room-Notification-Web-App',
  },
  {
    image: boston,
    title: 'Vocabulary Trainer',
    alt: '',
    text: 'An API for a word-guessing game. Users are presented with a definition and must guess the corresponding word. Hints can be requested. Game state is saved and games can be resumed on next site visit through use of `localstorage`. Click to PLAY!',
    demoURL: '',
    gitHubURL: 'https://github.com/brendandagys/Vocabulary-Trainer',
    dialogContent: <VocabularyTrainer theme={theme} />,
  },
  {
    image: boston,
    title: 'Music Theory Practice Tool',
    alt: '',
    text: 'A command-line program that offers various options for practice/study, such a chord recital or scale practice. Audio files are included in the program so that users can hear and practice to pedal tones.',
    demoURL: '',
    gitHubURL: 'https://github.com/brendandagys/Guitar-Theory-Practice-Tool',
  },
  {
    image: boston,
    title: 'Security Services Incident Reporting Tool',
    alt: '',
    text: "A Python GUI application built with TKinter that allows for 'incident' data's entry, storage, and analysis by members of an organization's Security team.",
    demoURL: '',
    gitHubURL:
      'https://github.com/brendandagys/Hospital-Protective-Services-Incident-Reporting-Software',
  },
  {
    image: boston,
    title: 'Medical Device Reprocessing Auditing Tool',
    alt: '',
    text: "A Python GUI application built with TKinter that allows for data entry, storage, and analysis of a hospital's MDRD auditing process.",
    demoURL: '',
    gitHubURL:
      'https://github.com/brendandagys/Hospital-Medical-Device-Reprocessing-Auditing-Software',
  },
]

export default portfolioCards
