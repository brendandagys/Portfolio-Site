import { useEffect } from 'react'
import axios from 'axios'

import { ThemeProvider } from 'styled-components'
import theme from './theme'

import { Grid } from '@mui/material'

import Accordion from './components/Accordion'
import BackgroundColor from './components/BackgroundColor'
import ContactForm from './components/ContactForm'
import Drawer from './components/Drawer'
import HomepageTitles from './components/HomepageTitles'
import MyImageList from './components/MyImageList'
import IconGallery from './components/IconGallery'
import CardGallery from './components/CardGallery'
import HomepageDescription from './components/HomepageDescription'

import { imageQuiltImages } from './data/imageQuiltImages'
import { technologyIcons, awsIcons } from './images/images'
import cards from './data/cards'

const App = (): JSX.Element => {
  const checkHealth = async () => {
    const { data: healthStatus } = await axios.get('/api/health')
    console.log(healthStatus)
  }

  useEffect(() => {
    checkHealth()
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <Grid
        container
        alignItems='center'
        justifyContent='center'
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        <Grid item>
          <Drawer anchor='right' />
        </Grid>

        <Grid item xs={12}>
          <MyImageList variant='quilted' imageListImages={imageQuiltImages} />
        </Grid>

        <Grid item xs={12}>
          <HomepageTitles />
        </Grid>

        <Grid item xs={12}>
          <BackgroundColor>
            <Grid item xs={12} pb={'8rem'}>
              <HomepageDescription />
              <IconGallery
                icons={technologyIcons}
                variant='subtitle2'
                title='Some of my favorite technologies...'
              />
              <IconGallery
                icons={awsIcons}
                width='90px'
                variant='subtitle2'
                title='I also possess the following AWS certifications...'
              />
            </Grid>
          </BackgroundColor>
        </Grid>

        <Grid item mt={-9}>
          <Accordion />
        </Grid>

        <Grid item xs={12} mt={12}>
          <CardGallery cards={cards} />
        </Grid>

        <Grid item xs={12} mt={13}>
          <ContactForm />
        </Grid>
      </Grid>
    </ThemeProvider>
  )
}

export default App
