// import { theme } from '../theme'

// type CustomTheme = {
//   [Key in keyof typeof theme]: typeof theme[Key]
// }

// declare module '@mui/material/styles/createTheme' {
//   interface Theme extends CustomTheme {}
//   interface ThemeOptions extends CustomTheme {}
// }

// type MyTypography = {
//   a: { fontFamily: string; fontSize: number }
//   b: { fontFamily: string; fontSize: number }
// }

// declare module '@material-ui/core/styles/createTypography' {
//   export interface Typography extends MyTypography {}
//   export interface TypographyOptions extends MyTypography {}
// }

// import '@material-ui/core/styles/createPalette'
// declare module '@material-ui/core/styles/createPalette' {
//   interface PaletteOptions {
//     third: { main: string }
//   }
// }

// declare module '@mui/material/styles' {
//   interface Palette {
//     third: Palette['primary']
//   }
//   interface PaletteOptions {
//     third: PaletteOptions['primary']
//   }

//   interface PaletteColor {
//     darker?: string
//   }
//   interface SimplePaletteColorOptions {
//     darker?: string
//   }
// }
