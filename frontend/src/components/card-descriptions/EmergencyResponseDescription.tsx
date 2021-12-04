import { Theme } from '@mui/material'
import { Typography, Container } from '@mui/material'

const Description = ({ theme }: { theme: Theme }) => {
  return (
    <Container sx={{ textAlign: 'justify' }}>
      <Typography>
        This project was my first foray into Web development. The purpose of the
        tool is to allow a Security/Safety team to monitor the organization’s
        response to ‘codes’ being called. A ‘code’ is an event such as a missing
        person, fire, or chemical spill, where staff are instructed to
        congregate in designated areas of the hospital and await further
        instruction, or outright evacuate the premises. I had previously built
        GUI applications using Python and TKinter, but when I thought about the
        requirements, I knew that this tool had to be designed as a Web app,
        because it must be easily accessible, and it is unrealistic to expect
        staff to carry their laptops or to download an app, even in advance of
        an emergency.
      </Typography>
      <br />
      <Typography>
        I began building this app by following the Mozilla Docs ‘Local Library’
        tutorial, where you learn the essentials of Django with a sensible
        project. Once I felt that I was comfortable enough to depart from their
        rubric, I customized my app to meet my specifications. As I ran into
        issues and discovered new capabilities of Django that I needed to use, I
        researched these problems and learned so much as I grew my Django and
        Python knowledge. I really developed my core Web development skills here
        as well: HTML, CSS, and vanilla JavaScript, which I am proud of.
      </Typography>
      <br />
      <Typography>
        The project is set up as follows. Multiple pages contain forms for each
        of the locations that staff should congregate. A senior staff member who
        takes the lead at one of the locations can update each form. There is
        also a summary page for the Protective Services team and the Fire
        Marshall to see the completion of each form, on one page, in real-time.
        This was accomplished using AJAX requests, which blew my mind at the
        time!
      </Typography>
      <br />
      <Typography>
        There is also a chat functionality and messaging system through which
        commands can be distributed to any staff member on the app.
      </Typography>
      <br />
      <Typography>
        Other notable milestones during my work on this project was the depth at
        which I learned JQuery to traverse the DOM. Even though I may never use
        it again, it taught me a lot about how JavaScript works, and I am glad I
        learned it!
      </Typography>
    </Container>
  )
}

export default Description
