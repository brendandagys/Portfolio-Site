import styled from 'styled-components'

import Image from 'material-ui-image'

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
`

const StyledLink = styled.a`
  display: inline-flex;
`

type Avatar = {
  href: string
  src: string
  color: string
  style: React.CSSProperties
}

type AvatarLinksProps = {
  avatars: Avatar[]
}

const AvatarLinks = ({ avatars }: AvatarLinksProps): React.ReactElement => {
  return (
    <ContactItemsRowDiv>
      {avatars.map(({ href, src, color, style }) => {
        return (
          <StyledLink href={href} target='_blank' rel='noreferrer'>
            <ImageDiv>
              <Image color={color} src={src} style={style} />{' '}
              {/* This `style` prop is from the Image component */}
            </ImageDiv>
          </StyledLink>
        )
      })}
    </ContactItemsRowDiv>
  )
}

export default AvatarLinks
