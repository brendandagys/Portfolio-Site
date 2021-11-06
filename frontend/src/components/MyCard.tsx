import { useState } from 'react'
import styled from 'styled-components'
// import { useSpring, animated, config } from 'react-spring'
import {
  Button,
  CardActionArea,
  CardActions,
  Card,
  CardProps,
  CardContent,
  CardMedia,
  Typography,
  Theme,
} from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub'

type MyCardProps = {
  // performAnimation?: boolean
  image: string
  title: string
  alt: string
  link: string
  theme: Theme
} & CardProps

const StyledCard = styled(({ style, ...rest }) => (
  <Card style={style} {...rest} />
))`
  margin: auto;
  max-width: 345px;
  text-align: center;
  border-radius: 20px;
  // border: 3px solid black;
  border: 3px solid ${({ theme }) => theme.palette.colorMode.cardOutlineColor};
  background-color: ${({ theme }) => theme.palette.colorMode.s0};
`

const StyledAnchor = styled.a`
  text-decoration: none;
`

const MyCard = ({
  children,
  // performAnimation,
  image,
  title,
  alt,
  link,
  theme,
}: MyCardProps): React.ReactElement => {
  // const springProps = useSpring({
  //   config: config.slow,
  //   from: { opacity: 0, x: 200 },
  //   to: { opacity: performAnimation ? 1 : 0, x: performAnimation ? 0 : 200 },
  //   delay: 300,
  // })

  const [selected, setSelected] = useState(false)

  return (
    <div>
      <StyledCard
        raised
        elevation={selected ? 24 : 3}
        onMouseOver={() => setSelected(true)}
        onMouseLeave={() => setSelected(false)}
      >
        <CardActionArea>
          <CardMedia component='img' height='140' image={image} alt={alt} />
          <CardContent>
            <Typography gutterBottom variant='h5' component='div'>
              {title}
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              {children}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <StyledAnchor href={link} target='_blank' rel='noreferrer'>
            <Button
              className={
                theme.palette.mode === 'dark'
                  ? 'hvr-underline-from-left-thin-dark'
                  : 'hvr-underline-from-left-thin-light'
              }
              size='small'
              // color='secondary'
              style={{
                backgroundColor: theme.palette.colorMode.gitHubButtonColor,
              }}
              // style={{ backgroundColor: theme.palette.secondary.main }}
              variant='contained'
              startIcon={<GitHubIcon sx={{ mb: '2px' }} />}
            >
              GitHub
            </Button>
          </StyledAnchor>
        </CardActions>
      </StyledCard>
    </div>
  )
}

export default MyCard
