import React, { useState, useEffect, useCallback } from 'react'
import axios from 'axios'
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
  Tooltip,
} from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub'
import TextSnippetIcon from '@mui/icons-material/TextSnippet'
import { useSpring, animated, config } from 'react-spring'

type MyCardProps = {
  image: string
  title: string
  alt: string
  demoURL?: string
  gitHubURL: string
  healthCheckUrl?: string
  theme: Theme
  dialogContent?: React.ReactChild
  descriptionContent?: React.ReactChild
  tooltipContent: string
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
  healthCheckUrl,
  theme,
  dialogContent,
  descriptionContent,
  tooltipContent,
  showCardContentInDialog,
}: MyCardProps): React.ReactElement => {
  const [selected, setSelected] = useState(false)
  const [flip, set] = useState(false)
  const [healthy, setHealthy] = useState(true)

  const springProps = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    // reset: true,  // Will reset animation on every re-render
    reverse: flip,
    delay: 100,
    config: config.molasses,
    onRest: () => set(!flip),
  })

  const checkHealth = useCallback(
    async (url: string) => {
      console.log(`Checking health of' ${title}...`)
      try {
        const { data: healthStatus } = await axios.get(`${url}/api/health`)
        console.log(healthStatus)
        healthStatus ? setHealthy(true) : setHealthy(false)
      } catch {
        setHealthy(false)
      }
    },
    [title]
  )

  useEffect(() => {
    if (healthCheckUrl) {
      checkHealth(healthCheckUrl)
    }
  }, [checkHealth, healthCheckUrl, dialogContent])

  const cardActionAreaProps = dialogContent
    ? {
        onClick: () => {
          if (healthy) {
            showCardContentInDialog(dialogContent)
          } else if (healthCheckUrl) {
            checkHealth(healthCheckUrl)
            // showCardContentInDialog(dialogContent)
          }
        },
      }
    : demoURL && healthy
    ? {
        href: demoURL,
        target: '_blank',
        rel: 'noreferrer',
      }
    : demoURL
    ? {
        onClick: () => {
          if (!healthy) {
            checkHealth(demoURL)
          }
        },
      }
    : {}

  const cardMediaProps = healthy ? {} : { opacity: '0.6' }

  return (
    <Tooltip
      disableFocusListener
      disableTouchListener
      placement='top'
      arrow
      PopperProps={{
        popperOptions: {
          modifiers: [
            {
              name: 'offset',
              options: { offset: [0, -6] },
            },
          ],
        },
      }}
      title={
        <>
          {healthCheckUrl && healthy ? (
            <small>{tooltipContent}</small>
          ) : healthCheckUrl ? (
            <small>Link disabled as application is offline.</small>
          ) : (
            <small>{tooltipContent}</small>
          )}
        </>
      }
    >
      <div>
        <StyledCard
          raised
          elevation={selected ? 24 : 3}
          onMouseOver={() => setSelected(true)}
          onMouseLeave={() => setSelected(false)}
        >
          {healthy ? null : (
            <animated.div
              style={{
                ...springProps,
                color: 'firebrick',
                backgroundColor: '#d3d3d3',
                position: 'absolute',
                width: '345px',
                marginTop: '85px',
                zIndex: 200,
                backdropFilter: 'blur(12px)',
                fontSize: '1.5rem',
                fontFamily: 'Courier New',
                paddingTop: '7px',
                paddingBottom: '7px',
                // borderTop: '1px solid slategray',
                // borderBottom: '1px solid slategray',
              }}
            >
              Temporarily offline
            </animated.div>
          )}
          {/* {demoURL || dialogContent ? null : (
          <Typography
            style={{
              color: 'firebrick',
              backgroundColor: '#ffffff10',
              position: 'absolute',
              width: '345px',
              marginTop: '85px',
              zIndex: 200,
              backdropFilter: 'blur(12px)',
              fontSize: '1.25rem',
            }}
          >
            Temporarily offline
          </Typography>
        )} */}
          <CardActionArea {...cardActionAreaProps}>
            <CardMedia
              component='img'
              height='190'
              image={image}
              alt={alt}
              style={cardMediaProps}
            />
            <CardContent style={{ borderTop: '1px solid lightgray' }}>
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
                style={{
                  backgroundColor: theme.palette.colorMode.gitHubButtonColor,
                  margin: '0 auto 5px 10px',
                }}
                variant='contained'
                startIcon={<GitHubIcon sx={{ mb: '2px' }} />}
              >
                GitHub
              </Button>
            </StyledAnchor>
            {!descriptionContent ? null : (
              <Button
                style={{
                  backgroundColor:
                    theme.palette.colorMode.descriptionButtonColor,
                  margin: '0 10px 5px auto',
                }}
                size='small'
                variant='contained'
                startIcon={<TextSnippetIcon sx={{ mb: '2px' }} />}
                onClick={() => showCardContentInDialog(descriptionContent)}
              >
                Description
              </Button>
            )}
          </CardActions>
        </StyledCard>
      </div>
    </Tooltip>
  )
}

export default MyCard
