import React, { useState, useEffect, useCallback } from 'react'
import axios, { AxiosError } from 'axios'
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
  healthCheckStatusCode?: number
  theme: Theme
  dialogContent?: React.ReactChild
  descriptionContent?: React.ReactChild
  tooltipContent: string
  showCardContentInDialog: (dialogContent: React.ReactChild) => void
} & CardProps

const StyledCard = styled(({ style, ...rest }) => (
  <Card style={style} {...rest} />
))`
  margin: 12px auto;
  max-width: 370px; // 345px original
  text-align: center;
  border-radius: 20px;
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
  healthCheckStatusCode,
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
    (url: string) => {
      console.log(`Checking health of '${title}'...`)
      axios
        .get(`${url}`)
        .then((response) => {
          // console.log(url, status)
          if (
            healthCheckStatusCode &&
            healthCheckStatusCode === (response.status ?? 200)
          ) {
            setHealthy(true)
          } else if (response.data) {
            setHealthy(true)
          } else {
            setHealthy(false)
          }
        })
        .catch((e: AxiosError) => {
          // console.log(e)
          // if (e.response) {
          //   const { data, status, headers } = e.response

          //   console.log(data)
          //   console.log(status)
          //   console.log(headers)
          // }

          setHealthy(false)
          console.log(`${title} is offline.`)
        })
    },
    [title, healthCheckStatusCode]
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
      // disableTouchListener
      enterTouchDelay={100}
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
          onTouchStart={() => setSelected(true)}
          onTouchEnd={() => setSelected(false)}
        >
          <CardActionArea {...cardActionAreaProps}>
            {healthy ? null : (
              <animated.div
                style={{
                  ...springProps,
                  color: 'firebrick',
                  backgroundColor: '#d3d3d3',
                  position: 'absolute',
                  width: '100%',
                  marginTop: '85px',
                  zIndex: 200,
                  backdropFilter: 'blur(12px)',
                  fontSize: '1.5rem',
                  fontFamily: 'Courier New',
                  paddingTop: '7px',
                  paddingBottom: '7px',
                }}
              >
                Temporarily offline
              </animated.div>
            )}

            <CardMedia
              component='img'
              height='190'
              image={image}
              alt={alt}
              style={cardMediaProps}
            />

            <CardContent
              style={{
                borderTop: '1px solid lightgray',
                backgroundColor:
                  theme.palette.mode === 'dark'
                    ? theme.palette.colorMode.s4
                    : undefined,
                color:
                  theme.palette.mode === 'dark'
                    ? theme.palette.fontColor.primary
                    : undefined,
              }}
            >
              <Typography gutterBottom variant='h5' component='div'>
                {title}
              </Typography>
              <Typography
                variant='body2'
                style={{
                  color:
                    theme.palette.mode === 'dark'
                      ? theme.palette.fontColor.slate
                      : '#00000080',
                }}
              >
                {children}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions
            style={{
              backgroundColor:
                theme.palette.mode === 'dark'
                  ? theme.palette.colorMode.s5
                  : theme.palette.fontColor.slate,
            }}
          >
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
                className={
                  theme.palette.mode === 'dark'
                    ? 'hvr-underline-from-left'
                    : 'hvr-underline-from-left-purple'
                }
                size='small'
                style={{
                  backgroundColor:
                    theme.palette.colorMode.descriptionButtonColor,
                  margin: '0 10px 5px auto',
                }}
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
