import { Theme, Typography } from '@mui/material'
import useWindowDimensions from '../hooks/useWindowDimensions'

const HomepageTitles = ({ theme }: { theme: Theme }): React.ReactElement => {
  const { width } = useWindowDimensions()

  return (
    <div style={{ padding: '0 2rem' }}>
      <Typography
        align='center'
        variant='h2'
        pt={7}
        px={4}
        sx={{ fontWeight: 'light', color: theme.palette.fontColor.secondary }}
      >
        Hi, I'm Brendan. Welcome to my site!
      </Typography>
      <Typography
        align='center'
        variant='h5'
        pb={2}
        pt={5}
        sx={{ fontWeight: 300, color: theme.palette.fontColor.slate }}
      >
        Full-stack TypeScript, Rust, and Python software developer
      </Typography>
    </div>
  )
}

export default HomepageTitles
