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
        I built this game as a Python command-line program while on a vacation
        in 2020 (exciting, I know!). I had amassed a large collection of
        definitions from years of reading, and wanted to review them in an
        engaging way so that I could improve my vocabulary. Previously I had
        them all stored in a memo on my phone, but desired to create a better
        way to learn. The program allows a user to choose the length of the
        game, and then presents definitions on the screen, one at a time. The
        player must guess the word correctly to score a point. There is also a
        feature where players can request hints, letter-by-letter, to help them
        guess the word (this voids any scoring for that word, however).
      </StyledTypography>
      <br />
      <StyledTypography>
        Having recently gained more interest in Cloud technologies, I rebuilt
        the script as a Docker-ized Flask API. You can play the game right here
        on my Website!
      </StyledTypography>
      <br />
      <StyledTypography>
        This was not my first time building an API, but my first time using
        Flask. I have experience with object-oriented programming, but building
        this game was a good refresher on that subject and the considerations
        that I need to take into account when refactoring my code from a
        command-line program into an API.
      </StyledTypography>
    </Container>
  )
}

export default Description
