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
        This was built as a Python GUI-based data pipeline tool. Its purpose is
        to run on a user’s computer and aid the input of paper-based data into a
        digital storage and analytics solution. Because the target audience is a
        small group of relevant users, I never saw the need to deploy it on the
        Web. It can run on a user’s computer, allows them to input data,
        validates that input, and then stores the data in an Excel ‘database.’
      </StyledTypography>
      <br />
      <StyledTypography>
        The program can also perform calculations to reveal audit compliance and
        counts.
      </StyledTypography>
      <br />
      <StyledTypography>
        I used TKinter for this project, and kept things simple and
        straightforward since essentially I was automating a data process.
        Normally I do this with straightforward procedural Python scripts, but a
        GUI and object-oriented approach were crucial in this instance to
        improve the user experience.
      </StyledTypography>
    </Container>
  )
}

export default Description
