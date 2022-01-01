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
        This project helped me further solidify my Django understanding and
        knowledge. One complaint that I heard routinely was that patients who
        visited clinics had to remain in the waiting room until they were
        called, because they did not want to miss their name.
      </StyledTypography>
      <br />
      <StyledTypography>
        What I created is an app that patients can opt in to, where they can
        provide their email and/or phone number to the clinic’s clerk, and
        receive a message when the clinic is just about ready for them. These
        messages would be automatic upon the clerk changing the appointment’s
        status. I utilized Twilio for the SMS capability, and a Gmail account
        for emails.
      </StyledTypography>
      <br />
      <StyledTypography>
        This project also helped me to further improve my skills with HTML
        layouts, forms, CSS styling, and connecting to external APIs to make my
        application feature-rich.
      </StyledTypography>
    </Container>
  )
}

export default Description
