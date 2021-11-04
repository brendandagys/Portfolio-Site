import { TextField, Theme, TextFieldProps } from '@mui/material'
import React from 'react'

const MyTextField = ({
  className,
  theme,
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
  theme: Theme
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
      InputLabelProps={{ style: { color: theme.palette.text.secondary } }}
      FormHelperTextProps={{ style: { color: theme.palette.text.secondary } }}
      autoComplete='off'
    ></TextField>
  )
}

export default MyTextField
