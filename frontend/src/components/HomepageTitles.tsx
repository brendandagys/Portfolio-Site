import { Theme, Typography } from '@mui/material'

const HomepageTitles = ({ theme }: { theme: Theme }): React.ReactElement => {
  return (
    <div>
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
          // width: '45%',
          maxWidth: '550px',
          mx: 'auto',
          // py: '10px',
          // borderRadius: '12px',
          fontWeight: 'bold',
        }}
      >
        TypeScript and Python developer
      </Typography>
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
