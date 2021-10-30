import { TextField } from '@mui/material'
import { TextFieldProps } from '@mui/material'
import React from 'react'

const MyTextField = ({
  className,
  variant = 'standard',
  required = true,
  id,
  name,
  label,
  helperText,
  color = 'secondary',
  margin = 'normal',
  multiline = false,
  minRows = 1,
  value,
  onChange,
}: TextFieldProps & {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
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
    ></TextField>
  )
}

export default MyTextField
