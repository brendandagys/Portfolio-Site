import styled from 'styled-components'

import { Typography, TypographyProps } from '@mui/material'
import ImageDiv from './ImageDiv'
import Image from 'material-ui-image'

const StyledDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 1rem;
  padding: 0 15px;
  background-color: ${({ theme }) => theme.palette.secondary.main};
`

const StyledImageDiv = styled(({ width, ...rest }) => {
  return <ImageDiv {...rest}></ImageDiv>
})`
  width: ${({ width }) => width};
  max-height: ${({ width }) => width};
`

const StyledTypography = styled(Typography)`
  color: #202020;
  margin-top: 3rem;
`

type IconGalleryProps = {
  icons: string[]
  title: string
  width?: string
} & TypographyProps

const IconGallery = ({
  icons,
  title,
  variant,
  align = 'center',
  width = '65px',
}: IconGalleryProps): React.ReactElement => {
  return (
    <>
      <StyledTypography variant={variant} align={align}>
        {title}
      </StyledTypography>
      <StyledDiv>
        {icons.map((icon, index) => (
          <StyledImageDiv width={width} key={index}>
            <Image color='transparent' src={icon} />
          </StyledImageDiv>
        ))}
      </StyledDiv>
    </>
  )
}

export default IconGallery
