import { Fragment, SyntheticEvent, useState } from 'react'
import { scroller } from 'react-scroll'
import axios from 'axios'

import {
  Box,
  SwipeableDrawer,
  Fab,
  List,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemButton,
  Theme,
  IconButton,
  Typography,
} from '@mui/material'

import drawerIcons from '../data/drawerIcons'

const {
  HomeIcon,
  WorkIcon,
  EmailIcon,
  GitHubIcon,
  MenuBookIcon,
  DescriptionIcon,
  MenuIcon,
  OpenInNewIcon,
  FileDownloadIcon,
  HelpIcon,
  Brightness4Icon,
  Brightness7Icon,
} = drawerIcons

// const StyledFab = styled(Fab)`
//   box-shadow: 1.7px 1.7px 5px grey;
// `

type Anchor = 'top' | 'left' | 'bottom' | 'right'

type DrawerItem = {
  text: string
  scrollTo?: string
  icon: React.ReactElement
  href?: string
  download?: boolean
}

const drawerItems1: DrawerItem[] = [
  {
    text: 'Home',
    scrollTo: 'home-section',
    icon: <HomeIcon />,
  },
  {
    text: 'About',
    scrollTo: 'about-section',
    icon: <HelpIcon />,
  },
  {
    text: 'Portfolio',
    scrollTo: 'portfolio-section',
    icon: <WorkIcon />,
  },
  {
    text: 'Contact',
    scrollTo: 'contact-section',
    icon: <EmailIcon />,
  },
]
const drawerItems2: DrawerItem[] = [
  {
    text: 'GitHub',
    icon: <GitHubIcon />,
    href: 'https://github.com/brendandagys',
  },
  {
    text: 'Blog',
    icon: <MenuBookIcon />,
    href: 'https://brendandagys.com',
  },
  {
    text: 'Resume',
    icon: <DescriptionIcon />,
    download: true,
  },
]

export default function TemporaryDrawer({
  anchor,
  theme,
  toggleMode,
}: {
  anchor: Anchor
  theme: Theme
  toggleMode: (e: SyntheticEvent) => void
}): React.ReactElement {
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  })

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return
      }

      setState({ ...state, [anchor]: open })
    }

  const handleScroll = (to?: string) => {
    to &&
      scroller.scrollTo(to, {
        smooth: true,
        spy: true,
        offset: -50,
      })
  }

  const getResume = async () => {
    axios({
      method: 'get',
      url: '/api/documents/resume.pdf',
      responseType: 'blob',
      // data: dates
    }).then((response) => {
      let blob = new Blob([response.data], { type: 'application/pdf' })
      let link = document.createElement('a')
      link.href = window.URL.createObjectURL(blob)
      link.download = 'Brendan Dagys - Resume.pdf'
      link.click()
    })

    // await axios.get('/api/documents/resume.pdf', { responseType: 'blob' })
  }

  const listItem = (
    text: string,
    icon: React.ReactElement,
    scrollTo?: string,
    href?: string,
    download?: boolean
  ) => {
    const listItemContent = (
      <>
        <ListItemIcon style={{ color: theme.palette.text.secondary }}>
          {icon}
        </ListItemIcon>
        <ListItemText primary={text} />
        {href ? (
          <ListItemIcon style={{ color: theme.palette.text.secondary }}>
            <OpenInNewIcon fontSize='small' />
          </ListItemIcon>
        ) : download ? (
          <ListItemIcon style={{ color: theme.palette.text.secondary }}>
            <FileDownloadIcon fontSize='small' />
          </ListItemIcon>
        ) : null}
      </>
    )

    return href || download ? (
      <ListItemButton
        dense={false}
        component='a'
        href={href}
        target='_blank'
        rel='noreferrer'
        sx={{
          my: 0,
          '&:hover': {
            backgroundColor: theme.palette.colorMode.drawerHoverColor,
          },
        }}
        onClick={download ? getResume : undefined}
      >
        {listItemContent}
      </ListItemButton>
    ) : (
      <ListItem
        className={
          theme.palette.mode === 'dark'
            ? 'hvr-overline-from-center-dark'
            : 'hvr-overline-from-center-light'
        }
        button
        key={text}
        onClick={() => handleScroll(scrollTo)}
        sx={{
          '&:hover': {
            backgroundColor: theme.palette.colorMode.drawerHoverColor,
          },
        }}
      >
        {listItemContent}
      </ListItem>
    )
  }

  const list = (anchor: Anchor) => (
    <Box
      sx={{
        width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250,
        // backgroundColor: theme.palette.colorMode.drawerBackgroundColor,
        // color: theme.palette.colorMode.drawerTextColor,
      }}
      role='presentation'
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {drawerItems1.map(({ text, scrollTo, icon }, index) =>
          scrollTo ? (
            <Fragment key={index}>{listItem(text, icon, scrollTo)}</Fragment>
          ) : (
            <Fragment key={index}>{listItem(text, icon)}</Fragment>
          )
        )}
      </List>
      <Divider component='div' />
      <List>
        {drawerItems2.map(({ text, scrollTo, icon, href, download }, index) =>
          scrollTo ? (
            <Fragment key={index}>{listItem(text, icon)}</Fragment>
          ) : (
            <Fragment key={index}>
              {listItem(text, icon, undefined, href, download)}
            </Fragment>
          )
        )}
      </List>
    </Box>
  )

  return (
    <div>
      <Fab
        color='primary'
        aria-label='menu'
        onClick={toggleDrawer(anchor, true)}
        sx={{
          position: 'fixed',
          right: '2rem',
          top: '2rem',
          zIndex: 999,
          boxShadow: 10,
        }}
      >
        <MenuIcon />
      </Fab>
      <SwipeableDrawer
        onOpen={() => console.log('Swiped open')}
        anchor={anchor}
        open={state[anchor]}
        onClose={toggleDrawer(anchor, false)}
      >
        <div
          style={{
            backgroundColor: theme.palette.colorMode.drawerBackgroundColor,
            color: theme.palette.colorMode.drawerTextColor,
            height: '100%',
          }}
        >
          {list(anchor)}

          <Box
            onClick={toggleMode}
            sx={{
              cursor: 'pointer',
              display: 'flex',
              width: '100%',
              alignItems: 'center',
              justifyContent: 'center',
              bgcolor: `${theme.palette.colorMode.modeButtonBackground}`,
              color: `${theme.palette.colorMode.modeButtonTextColor}`,
              mt: 1,
              p: 1,
            }}
          >
            <Typography variant='overline'>
              {theme.palette.mode[0].toUpperCase() +
                theme.palette.mode.substring(1)}{' '}
              mode enabled
            </Typography>
            <IconButton
              sx={{ ml: 1 }}
              color={theme.palette.mode === 'dark' ? 'error' : 'inherit'}
            >
              {theme.palette.mode === 'dark' ? (
                <Brightness4Icon />
              ) : (
                <Brightness7Icon />
              )}
            </IconButton>
          </Box>
          {/* <Typography
            variant='caption'
            align='center'
            mt={1}
            sx={{ color: theme.palette.fontColor.gray }}
          >
            ^ Click to change
          </Typography> */}
        </div>
      </SwipeableDrawer>
    </div>
  )
}
