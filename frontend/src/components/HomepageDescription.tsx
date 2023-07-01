import styled from 'styled-components'
import { Typography } from '@mui/material'

const StyledDiv = styled.div`
  color: ${({ theme }) => theme.palette.fontColor.white};
  text-align: center;
`

const StyledTypography = styled(Typography)`
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
          textDecoration: 'underline 2.25px',
          textShadow: '3px 3px 2px gray',
        }}
      >
        Who I am
      </StyledTypography>
      <StyledTypography px={6} fontWeight='light' variant='subtitle1' paragraph>
        I am a passionate developer that is comfortable in TypeScript/JavaScript,
        Python, Rust, and other languages. I have professional experience with
        Amazon Web Services, and deploy my own solutions on the platform, usually
        with a mix of CloudFormation, SAM, S3, and CloudFront, to name a few.
      </StyledTypography>
      <StyledTypography px={6} fontWeight='light' variant='subtitle1' paragraph>
        I love to solve problems and to build things. I have professional
        experience creating and designing software solutions with various
        programming paradigms and technologies. In my spare time you can find
        me outside biking, playing guitar, and working on numerous personal
        projects to further my interest and knowledge.
      </StyledTypography>
      <StyledTypography px={6} fontWeight='light' variant='subtitle1' paragraph>
        Thanks for visiting my site and reading this far! Below is a more
        detailed description about myself, and a few of my projects. Feel free
        to contact me at the bottom of the page!
      </StyledTypography>
    </StyledDiv>
  )
}

export default HomepageDescription
