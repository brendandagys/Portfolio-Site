import { Theme } from '@mui/material'
import { Typography, Container } from '@mui/material'

import styled from 'styled-components'

const StyledTypography = styled(Typography)`
  text-indent: 12px;
  font-size: 0.9rem;
`

const Description = ({ theme }: { theme: Theme }) => {
  return (
    <Container sx={{ px: 0, pt: 2 }}>
      <StyledTypography>
        This blog was built to host content about my personal interests. These
        interests focus around Web development, guitar, coding, cycling, and
        snowboarding.
      </StyledTypography>
      <br />
      <StyledTypography>
        The blog has multiple sections and features, such as public post
        commenting (with a review system) and a Similar Posts function. There is
        a Featured Posts section on the home page, along with detailed excerpts
        about each article prior to clicking on it.
      </StyledTypography>
      <br />
      <StyledTypography>
        This is a Next.js/React server-side-rendered application that offers
        extremely low request latency through the use of Next.js and GraphQL.
        Querying our blog's database is extremely simple due to GraphQL's
        straighforward syntax and minimalization of requests made to the server.
      </StyledTypography>
    </Container>
  )
}

export default Description
