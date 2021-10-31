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

import { imageQuiltImages } from './data/images'
import { technologyIcons, awsIcons } from './images/images'
import portfolioCards from './data/cards'

import './css/my-css.css'

import styled from 'styled-components'

const StyledBackgroundColor = styled(BackgroundColor)`
  border-radius: 30px 30px 0 0;
  background-color: rgba(1, 1, 1, 0.09);
  padding-bottom: 2rem;
`

const StyledTopBorderDiv = styled.div`
  height: 3px;
  border-radius: 30px 30px 0 0;
  text-align: center;
  background-color: ${({ theme }) => theme.palette.secondary.main};
`

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
        id='home-section'
        container
        alignItems='center'
        justifyContent='center'
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        <Grid item xs={12}>
          <StyledTopBorderDiv />
        </Grid>
        <Grid item>
          <Drawer anchor='right' />
        </Grid>

        <Grid item xs={12}>
          <HomepageTitles />
        </Grid>

        <Grid item xs={12} mb={5}>
          <MyImageList variant='quilted' imageListImages={imageQuiltImages} />
        </Grid>

        <Grid item xs={12}>
          <BackgroundColor>
            <Grid item xs={12} pb={'8rem'} id='about-section'>
              <HomepageDescription />
              <IconGallery
                icons={technologyIcons}
                variant='subtitle2'
                title='Some of my favorite technologies...'
              />
              <IconGallery
                icons={awsIcons}
                width='145px'
                variant='subtitle2'
                title='I also possess the following AWS certifications...'
              />
            </Grid>
          </BackgroundColor>
        </Grid>

        <Grid item mt={-9}>
          <Accordion />
        </Grid>

        <Grid item xs={12} mt={39}>
          <StyledBackgroundColor>
            <Grid item xs={12} mt={-30} id='portfolio-section'>
              <CardGallery cards={portfolioCards} />
            </Grid>
          </StyledBackgroundColor>
        </Grid>

        <Grid
          item
          xs={12}
          pt={13}
          id='contact-section'
          sx={{ boxShadow: '0px -2.5px 10px #e7b9ff' }}
        >
          <ContactForm />
        </Grid>
      </Grid>
    </ThemeProvider>
  )
}

export default App
