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
  Divider,
} from '@mui/material'

import styled from 'styled-components'

import Brightness5Icon from '@mui/icons-material/Brightness5'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import Slide from '@mui/material/Slide'
import { TransitionProps } from '@mui/material/transitions'
import { forwardRef, useState } from 'react'

const StyledDialogHeader = styled(DialogContent)`
  background-color: ${({ theme }) =>
    theme.palette.colorMode.modalHeaderBackgroundColor};
  color: ${({ theme }) => theme.palette.fontColor.primary};
  padding-bottom: 0;
`
const StyledDialogContent = styled(DialogContent)`
  background-color: ${({ theme }) => theme.palette.colorMode.s4};
  color: ${({ theme }) => theme.palette.fontColor.primary};
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
      <StyledDialogHeader sx={formOverrides}>
        {theme.palette.mode === 'dark' ? (
          <DarkModeIcon
            sx={{ position: 'absolute', '&:hover': { opacity: 0.75 } }}
            fontSize='large'
            onClick={toggleMode}
          />
        ) : (
          <Brightness5Icon
            sx={{ position: 'absolute', '&:hover': { opacity: 0.65 } }}
            fontSize='large'
            onClick={toggleMode}
          />
        )}
        <DialogContentText color='inherit' align='center'>
          Change the width of the window.
        </DialogContentText>
        <Box
          noValidate
          component='form'
          sx={{
            display: 'flex',
            flexDirection: 'column',
            mx: 'auto',
            mt: 1,
            mb: 2,
            width: 'fit-content',
          }}
        >
          <FormControl size='small' sx={{ mt: 2, minWidth: 120 }}>
            <InputLabel htmlFor='max-width'>Size</InputLabel>
            <Select
              autoFocus
              // color='secondary'
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
        <Divider />
      </StyledDialogHeader>
      <StyledDialogContent sx={formOverrides}>{children}</StyledDialogContent>
    </Dialog>
  )
}
