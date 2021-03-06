import { Theme } from '@mui/material'
import { Typography, Container } from '@mui/material'

import styled from 'styled-components'

const StyledTypography = styled(Typography)`
  text-indent: 12px;
  font-size: 0.9rem;
`

const Description = ({ theme }: { theme: Theme }) => {
  return (
    <Container sx={{ px: 1.15, py: 2 }}>
      <StyledTypography>
        I built this command-line tool using Python many years ago, because as
        an avid guitar player I wanted a tool that I could use to train exactly
        the items that I needed to focus on. No online tool really allowed me to
        do what I built this program to do.
      </StyledTypography>
      <br />
      <StyledTypography>
        I wanted a way to be prompted with a random scale/chord/arpeggio to
        practice, while having the ability to customize the duration that I
        could practice each item. I also wanted the root-note pedal tone to
        drone while practicing, so that I could really hear the character of
        each scale, chord, or arpeggio that I was practicing.
      </StyledTypography>
      <br />
      <StyledTypography>
        I used some interesting libraries such as PyAudio to play the audio
        files through my computer. I have not converted this into a Web
        application, but wanted to highlight it in this section because it was
        one of the very first command-line programs I ever wrote, and because of
        my passion for the instrument.
      </StyledTypography>
    </Container>
  )
}

export default Description
