import styled from 'styled-components'

import { Typography, TypographyProps } from '@mui/material'
import ImageDiv from './ImageDiv'
import Image from 'material-ui-image'

const StyledDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 1rem auto 0;
  padding: 0 30px;
  background-color: ${({ theme }) => theme.palette.secondary.main};
  max-width: 1300px;
`

const StyledImageDiv = styled(({ width, ...rest }) => {
  return <ImageDiv {...rest}></ImageDiv>
})`
  width: ${({ width }) => width};
  max-height: ${({ width }) => width};
`

const StyledTypography = styled(Typography)`
  color: ${({ theme }) => theme.palette.colorMode.iconGalleryTitleTextColor};
  margin-top: 3rem;
`

type IconGalleryProps = {
  icons: string[]
  title: string
  width?: string
  customStyle?: React.CSSProperties
  // theme: Theme
} & TypographyProps

const IconGallery = ({
  icons,
  title,
  variant,
  align = 'center',
  width = '65px',
  customStyle,
}: // theme,
IconGalleryProps): React.ReactElement => {
  return (
    <>
      <div style={customStyle}>
        <StyledTypography variant={variant} fontWeight='bold' align={align}>
          {title}
        </StyledTypography>
      </div>
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
