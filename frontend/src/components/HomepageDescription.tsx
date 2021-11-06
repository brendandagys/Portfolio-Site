import styled from 'styled-components'
import { Typography } from '@mui/material'

const StyledDiv = styled.div`
  color: ${({ theme }) => theme.palette.fontColor.white};
  text-align: center;
  // margin-bottom: 1rem;
`

const StyledTypography = styled(Typography)`
  // padding-left: clamp(20px, 8%, 30%);
  // padding-right: clamp(20px, 8%, 30%);
  margin-left: auto;
  margin-right: auto;
  max-width: 850px;
`

const HomepageDescription = (): React.ReactElement => {
  return (
    <StyledDiv>
      <StyledTypography
        px={6}
        variant='h3'
        fontWeight='light'
        mb={5}
        sx={{
          fontFamily: 'Courier New',
          // textDecoration: 'underline 2.25px',
          textShadow: '3px 3px 2px gray',
        }}
      >
        Who I am
      </StyledTypography>
      <StyledTypography px={6} fontWeight='light' variant='subtitle1' paragraph>
        I am a passionate software and Web developer with a strong interest in
        Python, JavaScript, and other Web technologies (see below).
      </StyledTypography>
      <StyledTypography px={6} fontWeight='light' variant='subtitle1' paragraph>
        I really enjoy solving problems and building apps. I have a lot of
        professional experience building and designing software solutions, and
        numerous personal Web and other development projects.
      </StyledTypography>
      <StyledTypography px={6} fontWeight='light' variant='subtitle1' paragraph>
        I love to solve problems and the process of continuous learning!
      </StyledTypography>
    </StyledDiv>
  )
}

export default HomepageDescription
