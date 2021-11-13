import { TextField, TextFieldProps } from '@mui/material'
import React from 'react'

const MyTextField = ({
  className,
  variant = 'standard',
  required = true,
  id,
  name,
  label,
  inputLabelColor,
  helperText,
  helperTextColor,
  color = 'secondary',
  margin = 'normal',
  multiline = false,
  minRows = 1,
  value,
  onChange,
}: TextFieldProps & {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  inputLabelColor?: string
  helperTextColor?: string
}): React.ReactElement => {
  return (
    <TextField
      className={className}
      variant={variant}
      required={required}
      id={id}
      name={name}
      label={label}
      helperText={helperText}
      color={color}
      margin={margin}
      multiline={multiline}
      minRows={minRows}
      value={value}
      onChange={onChange}
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

export default MyTextField
