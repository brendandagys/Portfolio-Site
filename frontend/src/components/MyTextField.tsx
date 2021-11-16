import { TextField, TextFieldProps } from '@mui/material'
import { forwardRef } from 'react'

const MyTextField = forwardRef<
  HTMLElement,
  TextFieldProps & {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    inputLabelColor?: string
    helperTextColor?: string
  }
>(
  (
    {
      variant = 'standard',
      required = true,
      inputLabelColor,
      helperTextColor,
      color = 'secondary',
      margin = 'normal',
      multiline = false,
      minRows = 1,
      ...other
    },
    ref
  ): React.ReactElement => {
    return (
      <TextField
        {...other}
        inputRef={ref}
        variant={variant}
        required={required}
        color={color}
        margin={margin}
        multiline={multiline}
        minRows={minRows}
        style={{ backgroundColor: 'transparent' }}
        InputLabelProps={{
          style: { color: inputLabelColor },
        }}
        FormHelperTextProps={{
          style: {
            color: helperTextColor,
          },
        }}
        autoComplete='off'
      ></TextField>
    )
  }
)

export default MyTextField
