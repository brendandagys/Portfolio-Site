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
          margin: 'auto',
          borderRadius,
          boxShadow: '2px 2px 50px 2px #d3d3d3'
        }}
      >
        <Typography
          variant='h3'
          align='center'
          mt='6.75rem'
          px={7}
          py={2}
          sx={{
            WebkitBackdropFilter: 'blur(12px)',
            backdropFilter: 'blur(12px)',
            backgroundColor: 'rgba(255, 255, 255, .15)',
            borderRadius,
            color: theme.palette.colorMode.titleTextColor,
            fontWeight: 'bold',
            maxWidth: '550px',
            mx: 'auto',
          }}
        >
          Full-stack TypeScript, Python, and Rust software developer
        </Typography>
      </div>
      <Typography
        align='center'
        variant='h4'
        pb='20px'
        pt='60px'
        px={4}
        sx={{ fontWeight: 'light', color: theme.palette.fontColor.secondary }}
      >
        Hi, I'm Brendan. Welcome to my site!
      </Typography>
    </div>
  )
}

export default HomepageTitles
