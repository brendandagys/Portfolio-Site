import styled from 'styled-components'
import { useSpring, animated } from 'react-spring'
import {
  Button,
  CardActionArea,
  CardActions,
  Card,
  CardProps,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material'

type MyCardProps = {
  image: string
  title: string
  alt: string
  link: string
} & CardProps

const StyledCard = styled(
  animated(({ style, ...rest }) => <Card style={style} {...rest} />)
)`
  margin: auto;
  max-width: 345px;
  text-align: center;
  border-radius: 20px;
  border: 3px solid ${({ theme }) => theme.palette.secondary.main};
`

const StyledLink = styled.a`
  text-decoration: none;
`

const MyCard = ({
  children,
  image,
  title,
  alt,
  link,
}: MyCardProps): React.ReactElement => {
  const springProps = useSpring({
    from: { opacity: 0, x: 200 },
    to: { opacity: 1, x: 0 },
    delay: 500,
  })

  return (
    <StyledCard style={springProps}>
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
        <StyledLink href={link} target='_blank' rel='noreferrer'>
          <Button size='small' color='secondary'>
            GitHub
          </Button>{' '}
        </StyledLink>
      </CardActions>
    </StyledCard>
  )
}

export default MyCard
