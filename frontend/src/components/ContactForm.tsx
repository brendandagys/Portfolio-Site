import styled from 'styled-components'
import axios from 'axios'

import { useState, Fragment } from 'react'

import { Box, FormControl, Typography, Button } from '@mui/material'

import MyTextField from './MyTextField'
import MyModal from './MyModal'
import AvatarLinks from './AvatarLinks'

import SendIcon from '@mui/icons-material/Send'

import { contactAvatarLinks } from '../data/avatarLinks'
import React from 'react'

import { Theme } from '@mui/material'

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

const ContactForm = ({ theme }: { theme: Theme }): React.ReactElement => {
  const defaultValues = {
    name: '',
    email: '',
    subject: '',
    message: '',
  }

  const [formValues, setFormValues] = useState(defaultValues)
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    handleOpen()

    const messageWithBreaks = formValues.message.replace(/\n/g, '<br />')

    axios.post('/api/contact', {
      ...formValues,
      message: messageWithBreaks,
    })
    setFormValues(defaultValues)

    console.log("Thanks! I'll be in touch very soon! :)")
  }

  return (
    <>
      <StyledBox
        component='form'
        sx={{
          '& .MuiInputBase-root': { color: theme.palette.text.primary },
          // '& label.Mui-focused': {
          //   color: 'white',
          // },
          '& .MuiInput-underline:after': {
            borderBottomColor: `${theme.palette.secondary.main}`,
          },
          '& .MuiOutlinedInput-root': {
            // '& fieldset': {
            //   borderColor: `${theme.palette.text.primary}`,
            // },
            '&:hover fieldset': {
              borderColor: `${theme.palette.secondary.main}`,
            },
            '&.Mui-focused fieldset': {
              borderColor: `${theme.palette.secondary.main}`,
            },
          },
        }}
        onSubmit={handleSubmit}
      >
        <Typography
          variant='h3'
          sx={{
            fontWeight: 'bold',
            color: theme.palette.text.primary,
          }}
        >
          Contact Me
        </Typography>
        <Typography
          m='10px 0'
          sx={{
            fontWeight: 'light',
            color: theme.palette.text.secondary,
          }}
          variant='h6'
        >
          If you’d like to chat about a project, please complete the form below.
          I'll get back to you soon!
        </Typography>
        <FormControl>
          <div>
            <StyledMyTextField
              id='name-input'
              name='name'
              label='Name'
              helperText='Please provide your full name.'
              value={formValues.name}
              onChange={handleInputChange}
              theme={theme}
            />
            <StyledMyTextField
              id='email-input'
              name='email'
              label='Email address'
              helperText='Your email will never be shared.'
              value={formValues.email}
              onChange={handleInputChange}
              theme={theme}
            />
          </div>
          <div>
            <StyledMyTextFieldWider
              id='subject-input'
              name='subject'
              label='Subject'
              value={formValues.subject}
              onChange={handleInputChange}
              theme={theme}
            />
          </div>
          <div>
            <StyledMyTextFieldWider
              id='message-input'
              name='message'
              label='Message'
              multiline
              minRows={4}
              variant='outlined'
              value={formValues.message}
              onChange={handleInputChange}
              theme={theme}
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
      <MyModal open={open} handleClose={handleClose} />
    </>
  )
}

export default ContactForm
