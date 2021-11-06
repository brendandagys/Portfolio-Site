import { createTheme } from '@mui/material/styles'

import { PaletteMode } from '@mui/material'

declare module '@mui/material/styles/createPalette' {
  interface Palette {
    colorMode: {
      sm1: string
      s0: string
      s1: string
      s2: string
      s3: string
      s4: string
      s5: string
      s6: string
      modeButtonBackground: string
      modeButtonTextColor: string
      titleTextColor: string
      iconGalleryTitleTextColor: string
      accordionHeaderTextColor: string
      accordionContentTextColor: string
      contactFormBackgroundColor: string
      copyrightColor: string
    }
    fontColor: {
      primary: string
      secondary: string
      tertiary: string
      slate: string
      white: string
      gray: string
      black: string
    }
  }
  interface PaletteOptions {
    colorMode: {
      sm1: string
      s0: string
      s1: string
      s2: string
      s3: string
      s4: string
      s5: string
      s6: string
      modeButtonBackground: string
      modeButtonTextColor: string
      titleTextColor: string
      iconGalleryTitleTextColor: string
      accordionHeaderTextColor: string
      accordionContentTextColor: string
      contactFormBackgroundColor: string
      copyrightColor: string
    }
    fontColor: {
      primary: string
      secondary: string
      tertiary: string
      slate: string
      white: string
      gray: string
      black: string
    }
  }
  //   interface TypeText {
  //     third: string
  //   }
}

// declare module '@mui/material/styles' {
//   interface TypographyVariants {
//     abc: React.CSSProperties
//   }

//   // allow configuration using `createTheme`
//   interface TypographyVariantsOptions {
//     abc?: React.CSSProperties
//   }
// }

// // Update the Typography's variant prop options
// declare module '@mui/material/Typography' {
//   interface TypographyPropsVariantOverrides {
//     abc: true
//   }
// }

export const getTheme = (mode: PaletteMode) => {
  const customTheme = createTheme({
    palette: {
      mode,
      primary:
        mode === 'light'
          ? {
              light: '#6ab7ff',
              main: '#1e88e5',
              dark: '#005cb2',
            }
          : { light: '#6ab7ff', main: '#1e88e5', dark: '#005cb2' },
      secondary:
        mode === 'light'
          ? {
              light: '#e7b9ff',
              main: '#b388ff',
              dark: '#7510F7',
            }
          : { light: '#e7b9ff', main: '#7510F7', dark: '#7510F7' },
      text:
        mode === 'light'
          ? { primary: '#000000', secondary: 'rgba(10,10,10,0.9)' }
          : {
              primary: '#ffffff',
              secondary: '#808080',
              disabled: 'rgba(255,255,255,0.5)',
            },
      background:
        mode === 'light'
          ? { default: '#fff' }
          : { default: 'linear-gradient(260deg, #efd5ff 0%, #515ada 100%)' },
      fontColor:
        mode === 'light'
          ? {
              primary: '#000',
              secondary: 'rgba(10,10,10,0.9)',
              tertiary: '#fff',
              slate: '#f2f2f2',
              white: '#fff',
              gray: '#888888',
              black: '#000',
            }
          : {
              primary: '#fff',
              secondary: 'rgba(10,10,10,0.9)',
              tertiary: '#000',
              slate: '#f2f2f2',
              white: '#fff',
              gray: '#888888',
              black: '#000',
            },

      colorMode:
        mode === 'light'
          ? {
              sm1: '#d3d3d3',
              s0: '#ffffff',
              s1: '#f6f6f6',
              s2: '#ffffff',
              s3: '#ffffff',
              s4: '#ffffff',
              s5: '#ffffff',
              s6: '#181818',
              modeButtonBackground: '#1e88e5',
              modeButtonTextColor: '#fff',
              titleTextColor: '#000',
              iconGalleryTitleTextColor: '#000',
              accordionHeaderTextColor: '#000',
              accordionContentTextColor: 'rgba(10,10,10,0.7)',
              contactFormBackgroundColor: '#fff',
              copyrightColor: 'rgba(10,10,10,0.8)',
            }
          : {
              sm1: '#7b7b7b',
              s0: '#f0f0f0',
              s1: '#cccccc',
              s2: '#808080',
              s3: '#595959',
              s4: '#404040',
              s5: '#303030',
              s6: '#181818',
              modeButtonBackground: '#000',
              modeButtonTextColor: '#fff',
              titleTextColor: '#000',
              iconGalleryTitleTextColor: '#000',
              accordionHeaderTextColor: '#fff',
              accordionContentTextColor: '#f2f2f2',
              contactFormBackgroundColor: '#262626',
              copyrightColor: '#f2f2f2',
            },
    },
  })

  return customTheme
}

// typography: {
//   h3: { fontFamily: 'Arial', fontSize: '40px' },
// b: { fontFamily: 'Arial', fontSize: 10 },
// fontFamily: [
//   // '-apple-system',
//   // 'BlinkMacSystemFont',
//   // '"Segoe UI"',
//   'Roboto',
//   '"Helvetica Neue"',
//   'Arial',
//   'sans-serif',
//   '"Apple Color Emoji"',
//   '"Segoe UI Emoji"',
//   '"Segoe UI Symbol"',
// ].join(','),
// allVariants: { color: 'rgba(10, 10, 10, 0.9)' },
// },
// )