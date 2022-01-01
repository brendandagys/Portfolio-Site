import { Theme } from '@mui/material'
import { Typography, Container } from '@mui/material'

import styled from 'styled-components'

const StyledTypography = styled(Typography)`
  text-indent: 12px;
  font-size: 0.9rem;
`

const Description = ({ theme }: { theme: Theme }) => {
  return (
    <Container sx={{ px: 1.15, pt: 2 }}>
      <StyledTypography>
        This was the first full-stack React app I built, and it is truly very
        feature-full. Full disclosure: I followed a Udemy tutorial course to
        create this, as I was just beginning my React journey.
      </StyledTypography>
      <br />
      <StyledTypography>
        I had previously taken a comprehensive React course on Udemy and had
        read all of the React documentation, but it was crucial to see a
        real-world example built start-to-finish and to understand the
        architecture of a modern React single-page-application.
      </StyledTypography>
      <br />
      <StyledTypography>
        I learned a ton about app-wide state management using Redux, and how to
        implement authentication and authorization from scratch, using JSON web
        tokens. I also integrated PayPal payments so that if this was a real
        site, I could accept payment and sell items.
      </StyledTypography>
      <br />
      <StyledTypography>
        The application has a full administrator portal in which you can track
        orders, mark them as shipped, and manage user-submitted product reviews.
      </StyledTypography>
      <br />
      <StyledTypography>
        I would go on from this project to take the design principles and best
        practices I learned, and apply them to future applications.
      </StyledTypography>
    </Container>
  )
}

export default Description
