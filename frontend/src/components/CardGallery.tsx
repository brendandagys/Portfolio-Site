import { Grid, Typography, Box } from '@mui/material'
import styled from 'styled-components'
import MyCard from './MyCard'

const StyledBox = styled(Box)`
  margin: auto;
  text-align: center;
  color: ${({ theme }) => theme.palette.text.primary};
`

type CardData = {
  image: string
  title: string
  alt: string
  link: string
  text: string
}

type CardGalleryProps = {
  cards: CardData[]
}

const CardGallery = ({ cards }: CardGalleryProps): React.ReactElement => {
  return (
    <>
      <StyledBox>
        <Typography
          variant='h3'
          sx={{ fontWeight: 'bold', color: 'common.black' }}
        >
          My Work
        </Typography>
        <Typography m='10px 5% 40px' sx={{ fontWeight: 'light' }} variant='h6'>
          Below are some examples of past projects that I've worked on. I hope
          you find them interesting!
        </Typography>
      </StyledBox>
      <Grid
        container
        spacing={2}
        // justifyContent='space-evenly'
        // alignItems='stretch'
        px={2}
      >
        {cards.map(({ image, title, alt, link, text }) => {
          return (
            <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
              <MyCard image={image} title={title} alt={alt} link={link}>
                {text}
              </MyCard>
            </Grid>
          )
        })}
      </Grid>
    </>
  )
}

export default CardGallery
