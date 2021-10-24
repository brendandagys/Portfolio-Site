import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: {
      light: '#6ab7ff',
      main: '#1e88e5',
      dark: '#005cb2',
    },
    secondary: {
      light: '#e7b9ff',
      main: '#b388ff',
      dark: '#7510F7',
    },
    text: {
      primary: 'rgba(10, 10, 10, 0.9)',
      secondary: '#fff',
    },
  },
  typography: {
    fontFamily: [
      // '-apple-system',
      // 'BlinkMacSystemFont',
      // '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    allVariants: { color: 'rgba(10, 10, 10, 0.9)' },
  },
})

export default theme
