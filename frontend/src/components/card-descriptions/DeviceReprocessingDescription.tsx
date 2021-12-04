import { Theme } from '@mui/material'
import { Typography, Container } from '@mui/material'

const Description = ({ theme }: { theme: Theme }) => {
  return (
    <Container sx={{ textAlign: 'justify' }}>
      <Typography>
        This was built as a Python GUI-based data pipeline tool. Its purpose is
        to run on a user’s computer and aid the input of paper-based data into a
        digital storage and analytics solution. Because the target audience is a
        small group of relevant users, I never saw the need to deploy it on the
        Web. It can run on a user’s computer, allows them to input data,
        validates that input, and then stores the data in an Excel ‘database.’
      </Typography>
      <br />
      <Typography>
        The program can also perform calculations to reveal audit compliance and
        counts.
      </Typography>
      <br />
      <Typography>
        I used TKinter for this project, and kept things simple and
        straightforward since essentially I was automating a data process.
        Normally I do this with straightforward procedural Python scripts, but a
        GUI and object-oriented approach were crucial in this instance to
        improve the user experience.
      </Typography>
    </Container>
  )
}

export default Description
