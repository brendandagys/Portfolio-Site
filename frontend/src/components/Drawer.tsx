import { SyntheticEvent, useState } from 'react'
import { scroller } from 'react-scroll'
import { Tooltip } from '@mui/material'
import axios from 'axios'

import {
  Box,
  Drawer,
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

import { Roll } from 'react-awesome-reveal'

import drawerIcons from '../data/drawerIcons'

const {
  HomeIcon,
  WorkIcon,
  EmailIcon,
  GitHubIcon,
  LinkedInIcon,
  MenuBookIcon,
  DescriptionIcon,
  MenuIcon,
  OpenInNewIcon,
  FileDownloadIcon,
  HelpIcon,
  Brightness4Icon,
  Brightness7Icon,
} = drawerIcons

type Anchor = 'top' | 'left' | 'bottom' | 'right'

type DrawerItem = {
  text: string
  scrollTo?: string
  icon: React.ReactElement
  href?: string
  download?: boolean
  fileName?: string
  subtitle?: string
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
    text: 'Blog',
    icon: <MenuBookIcon />,
    href: 'https://blog.brendandagys.com',
    // subtitle: 'Under construction...',
  },
  {
    text: 'GitHub',
    icon: <GitHubIcon />,
    href: 'https://github.com/brendandagys',
  },
  {
    text: 'LinkedIn',
    icon: <LinkedInIcon />,
    href: 'https://linkedin.com/in/brendandagys',
  },
  {
    text: 'Resume',
    icon: <DescriptionIcon />,
    download: true,
    fileName: 'brendan-dagys-resume.pdf',
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

  const getFile = async (fileName: string, downloadFlag?: boolean) => {
    axios({
      method: 'get',
      url: `/api/documents/${fileName}`,
      responseType: 'blob',
    })
      .then((response) => {
        const blob = new Blob([response.data], { type: 'application/pdf' })
        const fileURL = URL.createObjectURL(blob)
        const link = document.createElement('a')
        link.href = fileURL

        if (downloadFlag) link.download = fileName

        link.target = '_blank'
        link.rel = 'noreferrer'
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
      })
      .catch((e) => {
        console.log(e)
      })
  }

  const listItem = (
    text: string,
    icon: React.ReactElement,
    scrollTo?: string,
    href?: string,
    download?: boolean,
    fileName?: string,
    subtitle?: string
  ) => {
    const listItemContent = (
      <>
        <ListItemIcon style={{ color: theme.palette.text.secondary }}>
          {icon}
        </ListItemIcon>
        {fileName ? (
          <Tooltip
            disableFocusListener
            disableTouchListener
            placement='bottom'
            title='Click to view'
          >
            <ListItemText primary={text} />
          </Tooltip>
        ) : (
          <ListItemText primary={text} />
        )}
        {href ? (
          <ListItemIcon style={{ color: theme.palette.text.secondary }}>
            <OpenInNewIcon fontSize='small' />
          </ListItemIcon>
        ) : fileName && download ? (
          <Tooltip
            disableFocusListener
            disableTouchListener
            placement='bottom'
            title='Click to download'
          >
            <ListItemIcon
              onClick={(e) => {
                e.stopPropagation()
                getFile(fileName, true)
              }}
              sx={{
                '&:hover': {
                  opacity: 0.65,
                },
              }}
              style={{ color: theme.palette.text.secondary }}
            >
              <FileDownloadIcon fontSize='small' />
            </ListItemIcon>
          </Tooltip>
        ) : null}
        {subtitle && !href ? (
          <Typography
            style={{
              fontSize: '0.6rem',
            }}
          >
            {subtitle}
          </Typography>
        ) : null}
      </>
    )

    return href || download || text === 'Blog' ? (
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
        onClick={fileName ? () => getFile(fileName) : undefined}
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
    >
      <List>
        {drawerItems1.map(({ text, scrollTo, icon }, index) => (
          <Box
            key={index}
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
          >
            {scrollTo ? listItem(text, icon, scrollTo) : listItem(text, icon)}
          </Box>
        ))}
      </List>
      <Divider component='div' />
      <List>
        {drawerItems2.map(
          (
            { text, scrollTo, icon, href, download, fileName, subtitle },
            index
          ) => (
            <Box key={index}>
              {scrollTo
                ? listItem(text, icon)
                : listItem(
                    text,
                    icon,
                    undefined,
                    href,
                    download,
                    fileName,
                    subtitle
                  )}
            </Box>
          )
        )}
      </List>
    </Box>
  )

  return (
    <Roll
      triggerOnce
      delay={500}
      style={{ zIndex: 999, position: 'fixed', top: 0, right: 0 }}
    >
      <Fab
        color='primary'
        aria-label='menu'
        onClick={toggleDrawer(anchor, true)}
        sx={{
          position: 'fixed',
          right: '1.9rem',
          top: '1.76rem',
          zIndex: 999,
          boxShadow: 11,
        }}
      >
        <MenuIcon />
      </Fab>
      <Drawer
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
              maxWidth: '100%',
              alignItems: 'center',
              justifyContent: 'center',
              bgcolor: `${theme.palette.colorMode.modeButtonBackground}`,
              color: `${theme.palette.colorMode.modeButtonTextColor}`,
              mt: 2,
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
      </Drawer>
    </Roll>
  )
}
