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
        This Python GUI tool is similar to the ‘Medical Device Reprocessing
        Auditing Tool.’ It presents a GUI interface with a form, and allows
        Security Guards to enter validated data about Security incidents that
        they have attended to and need to document.
      </StyledTypography>
      <br />
      <StyledTypography>
        The data entered are stored for further analysis.
      </StyledTypography>
      <br />
      <StyledTypography>
        I challenged myself with this project, mainly by including a ‘drafts’
        feature through which incomplete Security incidents could begin to be
        documented even if they were not fully closed.
      </StyledTypography>
    </Container>
  )
}

export default Description
