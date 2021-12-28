import { Theme } from '@mui/material'
import { Typography, Container } from '@mui/material'

import styled from 'styled-components'

const StyledTypography = styled(Typography)`
  text-indent: 12px;
`

const Description = ({ theme }: { theme: Theme }) => {
  return (
    <Container sx={{ textAlign: 'justify' }}>
      <StyledTypography>
        A Web app that I use to track my spending habits. A form allows for
        customized input of purchases. Afterward, a list of all purchases can be
        viewed and filtered by category of purchase or a specific time period.
        Chart.js was used to create dynamic charts to visualize spending
        patterns.
      </StyledTypography>
      <br />
    </Container>
  )
}

export default Description
