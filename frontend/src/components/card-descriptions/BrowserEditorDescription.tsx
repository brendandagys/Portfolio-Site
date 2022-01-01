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
        This project was built based on a Udemy course that I purchased for the
        purpose of learning to integrate a React project with TypeScript. It
        explained how to properly annotate the ‘types’ of variables and objects,
        and how to use this technology along React and Redux.
      </StyledTypography>
      <br />
      <StyledTypography>
        The application mimics a traditional ‘mark-down’ editor, which allows
        you to code iteratively and see results along the way as you develop.
        Not only will the code cells format, transpile, and run JavaScript/React
        code, but you can also add rich text to describe the contents of the
        cells above or below.
      </StyledTypography>
      <br />
      <StyledTypography>
        Of course, the cells can be moved, deleted, or added so as to create a
        mark-down file of any desired length or order.
      </StyledTypography>
      <br />
      <StyledTypography>
        This project of course taught me a lot about TypeScript and how to
        integrate it into a React application, but it also helped me to
        understand the transpiling process and the importance of producing
        JavaScript code that is browser-agnostic. Once I had finished, I had
        learned many new workflows and best practices that I began implementing
        into my development routine and understood at a deeper level the process
        of Web development and how code ends up in a user’s browser.
      </StyledTypography>
      <br />
      <StyledTypography>
        Developing this application also reminded me to be very conscious of
        user-interface and user- experience considerations. A poor design can
        have a big effect on the satisfaction of your application’s users and
        their continued usage of you application, so this is always in the
        forefront of my mind when I work on projects.
      </StyledTypography>
      <br />
    </Container>
  )
}

export default Description
