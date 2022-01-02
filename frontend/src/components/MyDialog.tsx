import Dialog from '@mui/material/Dialog'
import {
  DialogProps,
  DialogContent,
  DialogContentText,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
  Theme,
} from '@mui/material'

import styled from 'styled-components'

import Brightness5Icon from '@mui/icons-material/Brightness5'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import CancelIcon from '@mui/icons-material/Cancel'
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined'
import Slide from '@mui/material/Slide'
import { TransitionProps } from '@mui/material/transitions'
import { forwardRef, useState } from 'react'

import useWindowDimensions from '../hooks/useWindowDimensions'

const StyledDialogHeader = styled(DialogContent)`
  background-color: ${({ theme }) =>
    theme.palette.colorMode.modalHeaderBackgroundColor};
  color: ${({ theme }) => theme.palette.fontColor.primary};
`
const StyledDialogContent = styled(DialogContent)`
  background-color: ${({ theme }) => theme.palette.colorMode.s4};
  color: ${({ theme }) => theme.palette.fontColor.primary};
  padding: 0.5rem;
  padding-right: 2.5%;
`

// const StyledColorModeBox = styled(Box)`
//   border-radius: 10px;
//   background-color: red;
//   width: 30px;
//   height: 30px;
//   text-align: center;
// `

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children?: React.ReactElement<any, any>
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction='up' ref={ref} {...props} />
})

export default function AlertDialogSlide({
  open,
  handleClose,
  theme,
  toggleMode,
  children,
}: {
  open: boolean
  handleClose: () => void
  // showDialog: () => void
  theme: Theme
  toggleMode: () => void
  children?: React.ReactChild
}) {
  const [maxWidth, setMaxWidth] = useState<DialogProps['maxWidth']>('sm')
  const { width } = useWindowDimensions()

  const handleMaxWidthChange = (event: SelectChangeEvent<typeof maxWidth>) => {
    setMaxWidth(
      // @ts-expect-error autofill of arbitrary value is not handled.
      event.target.value
    )
  }

  const formOverrides = {
    '& .MuiInputBase-root': {
      color: theme.palette.colorMode.modalTextFieldColor,
    },
    '& .MuiFormHelperText-root': {
      color: theme.palette.colorMode.helperTextColor,
    },
    '& .MuiInputLabel-root': {
      color: theme.palette.colorMode.modalTextFieldColor,
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: `${theme.palette.secondary.main}`,
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: `${theme.palette.text.primary}`,
      },
      '&:hover fieldset': {
        borderColor: `${theme.palette.secondary.main}`,
      },
      '&.Mui-focused fieldset': {
        borderColor: `${theme.palette.secondary.main}`,
      },
    },
  }

  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby='alert-dialog-slide-description'
      fullWidth={true}
      maxWidth={maxWidth}
    >
      <StyledDialogHeader sx={{ ...formOverrides, overflowY: 'visible' }}>
        {theme.palette.mode === 'dark' ? (
          <DarkModeIcon
            sx={{
              position: 'absolute',
              '&:hover': { opacity: 0.75, cursor: 'pointer' },
            }}
            fontSize='large'
            onClick={toggleMode}
          />
        ) : (
          <Brightness5Icon
            sx={{
              position: 'absolute',
              '&:hover': { opacity: 0.65, cursor: 'pointer' },
            }}
            fontSize='large'
            onClick={toggleMode}
          />
        )}
        {theme.palette.mode === 'dark' ? (
          <CancelOutlinedIcon
            sx={{
              position: 'absolute',
              right: '24px',
              '&:hover': { opacity: 0.75, cursor: 'pointer' },
            }}
            fontSize='large'
            onClick={handleClose}
          />
        ) : (
          <CancelIcon
            sx={{
              position: 'absolute',
              right: '24px',
              '&:hover': { opacity: 0.65, cursor: 'pointer' },
            }}
            fontSize='large'
            onClick={handleClose}
          />
        )}
        <DialogContentText
          color='inherit'
          align='center'
          style={{
            color: theme.palette.fontColor.primary,
            fontSize: '0.8rem',
            opacity: 0.5,
            maxWidth: '170px', // Make sure <p> doesn't overlap buttons
            margin: 'auto',
          }}
        >
          {width < 750 ? 'Widen page to change size' : 'Change width:'}
        </DialogContentText>
        <Box
          noValidate
          component='form'
          sx={{
            display: 'flex',
            flexDirection: 'column',
            mx: 'auto',
            // mt: 1,
            // mb: 4,
            width: 'fit-content',
          }}
        >
          <FormControl size='small' sx={{ mt: 2, minWidth: 120 }}>
            <InputLabel
              htmlFor='max-width'
              color='primary'
              style={width < 750 ? { color: 'rgba(0,0,0,0.38)' } : {}}
            >
              Size
            </InputLabel>
            <Select
              autoFocus
              disabled={width < 750}
              value={maxWidth}
              onChange={handleMaxWidthChange}
              label='maxWidth'
              inputProps={{
                name: 'max-width',
                id: 'max-width',
              }}
            >
              <MenuItem value='sm'>Small</MenuItem>
              <MenuItem value='md'>Medium</MenuItem>
              <MenuItem value='lg'>Large</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </StyledDialogHeader>
      <StyledDialogContent sx={formOverrides}>{children}</StyledDialogContent>
    </Dialog>
  )
}
