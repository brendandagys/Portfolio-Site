import { Theme, Typography } from '@mui/material'

const HomepageTitles = ({ theme }: { theme: Theme }): React.ReactElement => {
  return (
    <div>
      <Typography
        variant='h3'
        align='center'
        mt='3.5rem'
        px='100px'
        sx={{
          color: theme.palette.colorMode.titleTextColor,
          backgroundColor: 'rgba(255, 255, 255, .15)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          width: '45%',
          mx: 'auto',
          py: '10px',
          borderRadius: '12px',
          fontWeight: 'bold',
        }}
      >
        TypeScript and Python developer
      </Typography>
      <Typography
        align='center'
        variant='h4'
        p='30px'
        sx={{ fontWeight: 'light', color: theme.palette.fontColor.secondary }}
      >
        Hi, I'm Brendan. Welcome to my site!
      </Typography>
    </div>
  )
}

export default HomepageTitles
