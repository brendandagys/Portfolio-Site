import { Theme, Typography } from '@mui/material'
import useWindowDimensions from '../hooks/useWindowDimensions'

const HomepageTitles = ({ theme }: { theme: Theme }): React.ReactElement => {
  const { width } = useWindowDimensions()

  const borderRadius = width < 600 ? '0px' : '12px'

  return (
    <div>
      <div
        style={{
          background:
            'linear-gradient(90deg, rgba(0, 219, 222, 0.2) 0%, rgba(252, 0, 255, 0.2) 100%)',
          maxWidth: '550px',
          // width: '95%',
          margin: 'auto',
          borderRadius,
        }}
      >
        <Typography
          variant='h3'
          align='center'
          mt='6.75rem'
          px={7}
          py={1}
          sx={{
            color: theme.palette.colorMode.titleTextColor,
            backgroundColor: 'rgba(255, 255, 255, .15)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            maxWidth: '550px',
            mx: 'auto',
            borderRadius,
            fontWeight: 'bold',
          }}
        >
          TypeScript and Python developer
        </Typography>
      </div>
      <Typography
        align='center'
        variant='h4'
        py='30px'
        px={4}
        sx={{ fontWeight: 'light', color: theme.palette.fontColor.secondary }}
      >
        Hi, I'm Brendan. Welcome to my site!
      </Typography>
    </div>
  )
}

export default HomepageTitles
