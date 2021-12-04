import { Theme } from '@mui/material'
import { Typography, Container } from '@mui/material'

const Description = ({ theme }: { theme: Theme }) => {
  return (
    <Container sx={{ textAlign: 'justify' }}>
      <Typography>
        This Python GUI tool is similar to the ‘Medical Device Reprocessing
        Auditing Tool.’ It presents a GUI interface with a form, and allows
        Security Guards to enter validated data about Security incidents that
        they have attended to and need to document.
      </Typography>
      <br />
      <Typography>The data entered are stored for further analysis.</Typography>
      <br />
      <Typography>
        I challenged myself with this project, mainly by including a ‘drafts’
        feature through which incomplete Security incidents could begin to be
        documented even if they were not fully closed.
      </Typography>
    </Container>
  )
}

export default Description
