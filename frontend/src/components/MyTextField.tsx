import { TextField } from '@mui/material'
import { TextFieldProps } from '@mui/material'

const MyTextField = ({
  className,
  variant = 'standard',
  required = true,
  id,
  label,
  helperText,
  color = 'secondary',
  margin = 'normal',
  multiline = false,
  minRows = 1,
}: TextFieldProps): React.ReactElement => {
  return (
    <TextField
      className={className}
      variant={variant}
      required={required}
      id={id}
      label={label}
      helperText={helperText}
      color={color}
      margin={margin}
      multiline={multiline}
      minRows={minRows}
    ></TextField>
  )
}

export default MyTextField
