// import styled from 'styled-components'
import { Theme, Typography } from '@mui/material'

// const StyledTypography = styled(Typography)`
//   color: ${({ theme }) => theme.palette.text.third};
// `

const HomepageTitles = ({ theme }: { theme: Theme }): React.ReactElement => {
  return (
    <div>
      {/* <div style={{ backgroundColor: 'white' }}> */}
      <Typography
        variant='h3'
        // color='secondary'
        align='center'
        mt='3.5rem'
        px='100px'
        sx={{
          color: theme.palette.colorMode.titleTextColor,
          // background: '-webkit-linear-gradient(45deg, #09009f, #999 95%)',
          // background:
          // '-webkit-linear-gradient(-70deg, #a2facf 0%, #64acff 100%)',
          // background:
          //   '-webkit-linear-gradient(-70deg, #db469f 0%, #2188ff 100%',
          // background: 'linear-gradient(90deg, #FC466B 0%, #3F5EFB 100%)',
          // background: 'linear-gradient(90deg, #eee 0%, #333 100%)',
          // WebkitBackgroundClip: 'text',
          // WebkitTextFillColor: 'transparent',
          // WebkitBoxDecorationBreak: 'clone',
          fontWeight: 'bold',
        }}
      >
        TypeScript and Python developer
      </Typography>
      {/* </div> */}
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
