import styled from 'styled-components'
import { Typography } from '@mui/material'

const StyledTypography = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.primary};
`

const HomepageTitles = (): React.ReactElement => {
  return (
    <div>
      <StyledTypography
        align='center'
        variant='h2'
        mt='3.5rem'
        px='35px'
        sx={{ color: 'common.black', fontWeight: 'bold' }}
      >
        JavaScript and Python developer
      </StyledTypography>
      <StyledTypography
        align='center'
        variant='h4'
        p='30px'
        sx={{ fontWeight: 'light' }}
      >
        Hi, I'm Brendan. Welcome to my site!
      </StyledTypography>
    </div>
  )
}

export default HomepageTitles
