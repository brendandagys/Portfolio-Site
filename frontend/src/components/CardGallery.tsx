import { Grid, Typography, Box, Theme } from '@mui/material'
import styled from 'styled-components'
import MyCard from './MyCard'

import { CardData } from '../data/cards'

import {
  Fade,
  Bounce,
  Flip,
  Hinge,
  JackInTheBox,
  Roll,
  Rotate,
  Slide,
  Zoom,
} from 'react-awesome-reveal'

const StyledBox = styled(Box)`
  margin: auto;
  text-align: center;
  color: ${({ theme }) => theme.palette.text.primary};
`

type CardGalleryProps = {
  cards: CardData[]
  theme: Theme
}

const CardGallery = ({
  cards,
  theme,
}: CardGalleryProps): React.ReactElement => {
  return (
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
          Some past projects of mine, with links to the GitHub repository and a
          demo of the application!
        </Typography>
      </StyledBox>
      <Grid
        container
        spacing={2}
        // justifyContent='space-evenly'
        // alignItems='stretch'
        px={2}
      >
        {cards.map(({ image, title, alt, link, text }, index) => {
          return (
            <Grid item key={index} xs={12} sm={6} md={4} lg={3} xl={2}>
              <MyCard
                image={image}
                title={title}
                alt={alt}
                link={link}
                theme={theme}
              >
                {text}
              </MyCard>
            </Grid>
          )
        })}
      </Grid>
    </Slide>
  )
}

export default CardGallery
