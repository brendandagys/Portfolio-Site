import { Theme } from '@mui/material'
import { Typography, Container } from '@mui/material'

import styled from 'styled-components'

const StyledTypography = styled(Typography)`
  text-indent: 12px;
  font-size: 0.9rem;
`

const StyledListItem = styled.li`
  margin-top: -12px;
`

const Description = ({ theme }: { theme: Theme }) => {
  return (
    <Container sx={{ px: 0, pt: 2 }}>
      <StyledTypography>
        During this COVID-19 pandemic, it is very common to see varying methods
        for tracking staff wellness and safety. Some workplaces and businesses
        utilize paper forms for staff to indicate that they feel well each day,
        while others have implemented digital solutions such as apps.
      </StyledTypography>
      <br />
      <StyledTypography>
        I have seen and used a few of these and while they serve their purpose,
        I saw much room for improvement in some. I decided to build my own app
        that focused on the user experience. Many staff use these screening
        apps, <i>each day</i>, so a poor design decision really has a big impact
        on users and their time.
      </StyledTypography>
      <br />
      <StyledTypography>
        The items that I wanted to improve were:
      </StyledTypography>
      <ul>
        <StyledListItem style={{ marginTop: '10px' }}>
          <StyledTypography style={{ textIndent: '0px' }}>
            Having large buttons that are easy to press, with appropriate
            spacing between (e.g. Yes/No).
          </StyledTypography>
        </StyledListItem>
        <StyledListItem style={{ marginTop: '10px' }}>
          <StyledTypography style={{ textIndent: '0px' }}>
            Automation and animation. For example, when all questions are
            answered, scroll immediately to the ‘Submit’ button so that the user
            does not need to do this – only click.
          </StyledTypography>
        </StyledListItem>
      </ul>
      <br />
      <StyledTypography>
        Remember that a user has answered the questions on a given day. This was
        my biggest irk with previous apps I had used – if a user leaves the
        premises for lunch or for a break, they should not have to re-enter all
        of the information again simply because the app was not designed to
        track state.
      </StyledTypography>
      <br />
      <StyledTypography>
        Removing unnecessary clicks/taps, and making all information clear and
        concise.
      </StyledTypography>
      <br />
      <StyledTypography>
        This is not a complicated application to design. I had previously built
        full-stack React applications and so I was comfortable with my ability.
        Some challenges that I did look forward to tackling, however, were
        setting up email functionality through Node.js for users who wished to
        receive a confirmation email, and writing a full test suite for the
        application. To implement test-driven development, I used React Testing
        Library, which is my go-to library for testing.
      </StyledTypography>
      <br />
      <StyledTypography>
        I used Redux to store application state, and Nodemailer to implement
        email functionality. I also pulled in some third-party libraries such as
        `React-Slide` for the animations. In future apps, I would learn more
        about React Transitions and build some of the animations in my
        applications from scratch.
      </StyledTypography>
    </Container>
  )
}

export default Description
