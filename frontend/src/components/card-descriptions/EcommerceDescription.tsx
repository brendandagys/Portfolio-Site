import { Theme } from '@mui/material'
import { Typography, Container } from '@mui/material'

const Description = ({ theme }: { theme: Theme }) => {
  return (
    <Container sx={{ textAlign: 'justify' }}>
      <Typography>
        This was the first full-stack React app I built, and it is truly very
        feature-full. Full disclosure: I followed a Udemy tutorial course to
        create this, as I was just beginning my React journey.
      </Typography>
      <br />
      <Typography>
        I had previously taken a comprehensive React course on Udemy and had
        read all of the React documentation, but it was crucial to see a
        real-world example built start-to-finish and to understand the
        architecture of a modern React single-page-application.
      </Typography>
      <br />
      <Typography>
        I learned a ton about app-wide state management using Redux, and how to
        implement authentication and authorization from scratch, using JSON web
        tokens. I also integrated PayPal payments so that if this was a real
        site, I could accept payment and sell items.
      </Typography>
      <br />
      <Typography>
        The application has a full administrator portal in which you can track
        orders, mark them as shipped, and manage user-submitted product reviews.
      </Typography>
      <br />
      <Typography>
        I would go on from this project to take the design principles and best
        practices I learned, and apply them to future applications.
      </Typography>
    </Container>
  )
}

export default Description
