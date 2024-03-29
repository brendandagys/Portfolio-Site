import styled from 'styled-components'

import Image from 'material-ui-image'
import { Theme, Typography } from '@mui/material'

import { Avatar } from '../data/avatarLinks'

const ImageDiv = styled.div`
  // display: inline;
  width: 50px;
  height: auto;
  max-height: 50px;
  margin: 12.5px 10px;
  border-radius: 50%;
  // border-style: solid 2px;
  border-width: 5px;
  color: black;
`

const ContactItemsRowDiv = styled.div`
  border-radius: 30px 30px 0 0;
  text-align: center;
  background-color: ${({ theme }) => theme.palette.secondary.main};
  box-shadow: 0px 7px 20px #d3d3d3;
`

const StyledLink = styled.a`
  display: inline-flex;
`

type AvatarLinksProps = {
  avatars: Avatar[]
  theme: Theme
}

const AvatarLinks = ({
  avatars,
  theme,
}: AvatarLinksProps): React.ReactElement => {
  return (
    <ContactItemsRowDiv>
      {avatars.map(({ href, src, color, style }, index) => {
        return (
          <StyledLink key={index} href={href} target='_blank' rel='noreferrer'>
            <ImageDiv className='hvr-grow'>
              <Image color={color} src={src} style={style} />{' '}
              {/* This `style` prop is from the Image component */}
            </ImageDiv>
          </StyledLink>
        )
      })}
      <Typography
        paragraph
        sx={{
          color: theme.palette.colorMode.copyrightColor,
          fontSize: '0.9rem',
          my: 0,
          pb: 1,
        }}
      >
        Copyright &copy; Brendan Dagys
      </Typography>
    </ContactItemsRowDiv>
  )
}

export default AvatarLinks
