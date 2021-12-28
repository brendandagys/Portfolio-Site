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
        A React-TypeScript application that allows users to use an interactive
        browser-based coding environment to type JavaScript code. The editor is
        in a markdown format, with multiple coding cells that users can add,
        remove, and re-arrange to their liking.
      </StyledTypography>
      <br />
    </Container>
  )
}

export default Description
