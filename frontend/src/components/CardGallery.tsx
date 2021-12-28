import React, { useState } from 'react'
import { Grid, Typography, Box, Theme } from '@mui/material'
import styled from 'styled-components'
import MyCard from './MyCard'
import AlertDialogSlide from './MyDialog'

import { CardDataType } from '../data/cards'

import {
  // Fade,
  // Bounce,
  // Flip,
  // Hinge,
  // JackInTheBox,
  // Roll,
  // Rotate,
  Slide,
  // Zoom,
} from 'react-awesome-reveal'

const StyledBox = styled(Box)`
  margin: auto;
  text-align: center;
  color: ${({ theme }) => theme.palette.text.primary};
`

type CardGalleryProps = {
  cards: CardDataType[]
  theme: Theme
  toggleMode: () => void
}

const CardGallery = ({
  cards,
  theme,
  toggleMode,
}: CardGalleryProps): React.ReactElement => {
  const [open, setOpen] = useState(false)
  const [dialogContent, setDialogContent] = useState<React.ReactChild>()

  const handleClose = () => {
    setOpen(false)
  }

  const showCardContentInDialog = (dialogContent: React.ReactChild) => {
    setOpen(true)
    setDialogContent(dialogContent)
  }
  return (
    <>
      <Slide direction='right' cascade={true} triggerOnce>
        <StyledBox>
          <Typography
            variant='h3'
            sx={{ fontWeight: 'bold', color: 'text.primary' }}
          >
            My Work
          </Typography>
          <Typography
            m='10px 5% 50px'
            sx={{ fontWeight: 'light' }}
            variant='h6'
            color='text.secondary'
          >
            Some past projects of mine, with links to the GitHub repository and
            a demo of the application!
          </Typography>
        </StyledBox>
        <Grid
          container
          spacing={4}
          // justifyContent='space-evenly'
          // alignItems='stretch'
          px={4}
        >
          {cards.map(
            (
              {
                image,
                title,
                alt,
                demoURL,
                gitHubURL,
                healthCheckUrl,
                healthCheckStatusCode,
                text,
                dialogContent,
                descriptionContent,
                tooltipContent,
              },
              index
            ) => {
              return (
                <Grid item key={index} xs={12} sm={12} md={6} lg={4} xl={3}>
                  <MyCard
                    image={image}
                    title={title}
                    alt={alt}
                    demoURL={demoURL}
                    gitHubURL={gitHubURL}
                    healthCheckUrl={healthCheckUrl}
                    healthCheckStatusCode={healthCheckStatusCode}
                    theme={theme}
                    dialogContent={dialogContent}
                    descriptionContent={descriptionContent}
                    tooltipContent={tooltipContent}
                    showCardContentInDialog={showCardContentInDialog}
                  >
                    {text}
                  </MyCard>
                </Grid>
              )
            }
          )}
        </Grid>
      </Slide>
      <AlertDialogSlide
        theme={theme}
        open={open}
        handleClose={handleClose}
        toggleMode={toggleMode}
      >
        {dialogContent}
      </AlertDialogSlide>
    </>
  )
}

export default CardGallery
