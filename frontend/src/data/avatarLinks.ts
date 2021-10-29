import githubIcon from '../images/github-icon.svg'
import linkedInIcon from '../images/linkedin-icon.svg'
import emailIcon from '../images/email-icon-3.svg'

export type Avatar = {
  href: string
  src: string
  color: string
  style: React.CSSProperties
}

export const contactAvatarLinks = [
  {
    href: 'https://github.com/brendandagys',
    src: githubIcon,
    color: 'white',
    style: { borderRadius: '25px' },
  },
  {
    href: 'https://linkedin.com/in/brendandagys',
    src: linkedInIcon,
    color: 'black',
    style: { borderRadius: '25px' },
  },
  {
    href: 'mailto:brendandagys@gmail.com',
    src: emailIcon,
    color: 'white',
    style: { borderRadius: '25px', transform: 'scale(0.85)' },
  },
]
