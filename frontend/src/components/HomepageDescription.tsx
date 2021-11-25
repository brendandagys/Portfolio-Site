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
        I am a passionate developer with a strong foundation in
        TypeScript/JavaScript, Python, and other languages. I have experience in
        analytics as well as with Cloud services and technologies, mainly AWS.
      </StyledTypography>
      <StyledTypography px={6} fontWeight='light' variant='subtitle1' paragraph>
        I love to solve problems and to build things. I have professional
        experience creating and designing software solutions through
        object-oriented as well as procedural programming. In my spare time you
        can find me outside biking, playing guitar, and working on numerous
        personal projects to further my interest and knowledge.
      </StyledTypography>
      <StyledTypography px={6} fontWeight='light' variant='subtitle1' paragraph>
        Thanks for visiting my site and reading this far! Below is a more
        detailed description about myself, and some examples of projects I've
        created. Feel free to contact me at the bottom of the page!
      </StyledTypography>
    </StyledDiv>
  )
}

export default HomepageDescription
