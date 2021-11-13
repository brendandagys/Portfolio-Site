import React, { useState } from 'react'
import styled from 'styled-components'
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
  image: string
  title: string
  alt: string
  demoURL: string
  gitHubURL: string
  theme: Theme
  dialogContent?: React.ReactChild
  showCardContentInDialog: (dialogContent: React.ReactChild) => void
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
  image,
  title,
  alt,
  demoURL,
  gitHubURL,
  theme,
  dialogContent,
  showCardContentInDialog,
}: MyCardProps): React.ReactElement => {
  const [selected, setSelected] = useState(false)

  const cardActionAreaProps = demoURL
    ? { href: demoURL, target: '_blank', rel: 'noreferrer' }
    : dialogContent
    ? {
        onClick: () => showCardContentInDialog(dialogContent),
      }
    : {}

  return (
    <div>
      <StyledCard
        raised
        elevation={selected ? 24 : 3}
        onMouseOver={() => setSelected(true)}
        onMouseLeave={() => setSelected(false)}
      >
        <CardActionArea {...cardActionAreaProps}>
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
          <StyledAnchor href={gitHubURL} target='_blank' rel='noreferrer'>
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
