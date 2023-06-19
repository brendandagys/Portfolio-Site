import { useEffect, useState } from 'react'
import axios from 'axios'

import { ThemeProvider } from 'styled-components'
import { getTheme } from './theme'

import { Grid, PaletteMode, Theme } from '@mui/material'

import Accordion from './components/Accordion'
import BackgroundColor from './components/BackgroundColor'
import ContactForm from './components/ContactForm'
import Drawer from './components/Drawer'
import HomepageTitles from './components/HomepageTitles'
import MyImageList from './components/MyImageList'
import IconGallery from './components/IconGallery'
import CardGallery from './components/CardGallery'
import HomepageDescription from './components/HomepageDescription'

import imageQuiltImages from './data/images'
import { technologyIcons, awsIcons } from './images/images'
import portfolioCards from './data/cards'

import './css/my-css.css'
import { hexPattern } from './css/hex-pattern'
import { hexPatternLight } from './css/hex-pattern-light'

import styled from 'styled-components'

import useLocalStorage from './hooks/useLocalStorage'
import useWindowDimensions from './hooks/useWindowDimensions'

const StyledBackgroundColor = styled(BackgroundColor)`
  border-radius: 30px 30px 0 0;
  box-shadow: 0px -1px 10px #565656;
  ${({ theme }) =>
    theme.palette.mode === 'dark' ? hexPattern : hexPatternLight}
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

  const toggleMode = () =>
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'))

  const [mode, setMode] = useLocalStorage('colorMode', 'dark')
  const [theme, setTheme] = useState<Theme>(getTheme(mode as PaletteMode))
  const { width } = useWindowDimensions()

  useEffect(() => {
    checkHealth()
  }, [])

  useEffect(() => {
    setTheme(getTheme(mode as PaletteMode))
  }, [mode])

  return (
    <ThemeProvider theme={theme}>
      <Grid
        id='home-section'
        container
        alignItems='center'
        justifyContent='center'
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        sx={{
          background: theme.palette.background.default,
          backgroundColor: theme.palette.background.default,
          WebkitBackdropFilter: 'blur(12px)',
        }}
      >
        <Grid item xs={12}>
          <StyledTopBorderDiv />
        </Grid>
        {/* <Grid item> */}
        <Drawer anchor='right' theme={theme} toggleMode={toggleMode} />
        {/* </Grid> */}

        <Grid container>
          <Grid item xs={12} sx={{ textAlign: 'center' }}>
            <HomepageTitles theme={theme} />
          </Grid>

          <Grid item xs={12} mb={5}>
            <MyImageList
              variant='quilted'
              imageListImages={imageQuiltImages}
              theme={theme}
              style={width < 400 ? { marginLeft: '1.485rem' } : {}}
            />
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <BackgroundColor>
            <Grid item xs={12} pb={'10rem'} id='about-section'>
              <HomepageDescription />
              <IconGallery
                icons={technologyIcons}
                variant='overline'
                title='A few technologies I enjoy working with...'
                customStyle={{ marginTop: '50px', textAlign: 'center' }}
              />
              <IconGallery
                icons={awsIcons}
                width='145px'
                variant='overline'
                title='I am AWS certified:'
                customStyle={{ marginTop: '50px', textAlign: 'center' }}
              />
            </Grid>
          </BackgroundColor>
        </Grid>

        <Grid item mt={-9}>
          <Accordion theme={theme} />
        </Grid>

        <Grid item xs={12} mt={41}>
          <StyledBackgroundColor>
            <Grid item xs={12} mt={-30} id='portfolio-section'>
              <CardGallery
                cards={portfolioCards(theme)}
                theme={theme}
                toggleMode={toggleMode}
              />
            </Grid>
          </StyledBackgroundColor>
        </Grid>

        <Grid
          item
          xs={12}
          pt={13}
          id='contact-section'
          sx={{
            boxShadow: `0px -2.5px 10px #d3d3d3`,
            backgroundColor: `${theme.palette.colorMode.contactFormBackgroundColor}`,
          }}
        >
          <ContactForm theme={theme} />
        </Grid>
      </Grid>
    </ThemeProvider>
  )
}

export default App
