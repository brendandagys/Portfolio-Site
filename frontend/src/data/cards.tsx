import boston from '../images/boston.jpg'

import VocabularyTrainer from '../components/VocabularyTrainer'
import React from 'react'

export type CardData = {
  image: string
  title: string
  alt: string
  demoURL: string
  gitHubURL: string
  text: string
  dialogContent?: React.ReactChild
}

const portfolioCards = [
  {
    image: boston,
    title: 'Finances and Budgeting Tool',
    alt: '',
    text: 'A financial tracking app that allows users to track expenses and their asset growth',
    demoURL: 'https://finances.brendandagys.com',
    gitHubURL: 'https://github.com/brendandagys/Finances',
  },
  {
    image: boston,
    title: 'COVID-19 Employee Screening App',
    alt: '',
    text: 'An improved clone of common workplace COVID-19 employee screening apps.',
    demoURL: '',
    gitHubURL: 'https://github.com/brendandagys/COVID-19-Screening-App',
  },
  {
    image: boston,
    title: 'E-commerce Web App',
    alt: '',
    text: 'A fully-functioning e-commerce application built with React that lists popular technology product and allows for checkout and payment.',
    demoURL: '',
    gitHubURL: 'https://github.com/brendandagys',
  },
  {
    image: boston,
    title: 'Emergency Response Communication Hub',
    alt: '',
    text: 'A Django Web app that serves as a communication hub for hospital staff in the case of an emergency.',
    demoURL: '',
    gitHubURL:
      'https://github.com/brendandagys/Hospital-Emergency-Response-Management-and-Communication-Web-App',
  },
  {
    image: boston,
    title: 'Waiting Room Notification App',
    alt: '',
    text: 'A Django Web app that allows patients in a waiting room to leave and be notified when they are called for their appointment.',
    demoURL: '',
    gitHubURL:
      'https://github.com/brendandagys/Hospital-Clinic-Waiting-Room-Notification-Web-App',
  },
  {
    image: boston,
    title: 'Vocabulary Trainer',
    alt: '',
    text: 'A Python program that presents a definition and has the user guess the appropriate word.',
    demoURL: '',
    gitHubURL: 'https://github.com/brendandagys/Vocabulary-Trainer',
    dialogContent: <VocabularyTrainer />,
  },
  {
    image: boston,
    title: 'Guitar Theory Practice Tool',
    alt: '',
    text: 'A Python command-line program that offers various options for practice/study, such a chord recital or scale practice.',
    demoURL: '',
    gitHubURL: 'https://github.com/brendandagys/Guitar-Theory-Practice-Tool',
  },
  {
    image: boston,
    title: 'Security Services Incident Reporting Tool',
    alt: '',
    text: "A Python GUI application that allows for data entry, storage, and analysis by members of an organization's Security team.",
    demoURL: '',
    gitHubURL:
      'https://github.com/brendandagys/Hospital-Protective-Services-Incident-Reporting-Software',
  },
  {
    image: boston,
    title: 'Medical Device Reprocessing Auditing Tool',
    alt: '',
    text: "A Python GUI application that allows for data entry, storage, and analysis of a hospital's MDRD auditing process.",
    demoURL: '',
    gitHubURL:
      'https://github.com/brendandagys/Hospital-Medical-Device-Reprocessing-Auditing-Software',
  },
]

export default portfolioCards
