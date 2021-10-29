import styled from 'styled-components'

import { Box, FormControl, Typography, Button } from '@mui/material'

import MyTextField from './MyTextField'
import AvatarLinks from './AvatarLinks'

import SendIcon from '@mui/icons-material/Send'

import { contactAvatarLinks } from '../data/avatarLinks'

const StyledBox = styled(Box)`
  margin: auto auto 2.7rem auto;
  text-align: center;
  width: 90%;
  maxwidth: 800px;
  // color: ${({ theme }) => theme.palette.text.primary};
  // padding-bottom: 3rem;
`

const StyledMyTextField = styled(MyTextField)`
  min-width: 35ch;
  margin-left: 10px;
  margin-right: 10px;
  // max-width: 350px;
  // width: 37%;
`

const StyledMyTextFieldWider = styled(MyTextField)`
  width: 75%;
  min-width: 35ch;
  // max-width: 900px;
`

const StyledSendButtonDiv = styled.div`
  margin-top: 2rem;
`

const ContactForm = (): React.ReactElement => {
  return (
    <>
      <StyledBox component='form'>
        <Typography
          variant='h3'
          sx={{ fontWeight: 'bold', color: 'common.black' }}
        >
          Contact Me
        </Typography>
        <Typography m='10px 0' sx={{ fontWeight: 'light' }} variant='h6'>
          If you’d like to chat about a project, please complete the form below.
          I'll get back to you soon!
        </Typography>
        <FormControl>
          <div>
            <StyledMyTextField
              id='name-input'
              label='Name'
              helperText='Please provide your name.'
            />
            <StyledMyTextField
              id='email-input'
              label='Email address'
              helperText='Your email will never be shared.'
            />
          </div>
          <div>
            <StyledMyTextFieldWider id='subject-input' label='Subject' />
          </div>
          <div>
            <StyledMyTextFieldWider
              id='message-input'
              label='Message'
              multiline
              minRows={4}
              variant='outlined'
            />
          </div>
          <StyledSendButtonDiv>
            <Button
              type='submit'
              variant='contained'
              className='hvr-underline-from-left'
              endIcon={<SendIcon />}
            >
              Send
            </Button>
          </StyledSendButtonDiv>
        </FormControl>
      </StyledBox>
      <AvatarLinks avatars={contactAvatarLinks} />
    </>
  )
}

export default ContactForm
