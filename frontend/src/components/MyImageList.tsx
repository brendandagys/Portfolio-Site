import styled from 'styled-components'

import { ImageListImage } from '../data/images'

import {
  ImageList,
  ImageListItem,
  ImageListProps,
  Theme,
  Tooltip,
  Typography,
} from '@mui/material'

const StyledImageList = styled(({ variant, ...rest }: ImageListProps) => (
  <ImageList variant={variant} {...rest}></ImageList>
))`
  margin: 1rem auto auto;
  padding: 5px;
  max-width: 600px;
  height: auto;
  border-radius: ${({ theme }) =>
    theme.palette.mode === 'dark' ? '8px' : '8px'};
  background-color: ${({ theme }) => theme.palette.fontColor.secondary};
`

type MyImageListProps = {
  variant?: 'masonry' | 'quilted' | 'standard' | 'woven'
  imageListImages: ImageListImage[]
  theme: Theme
}

function srcset(image: string, size: number, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  }
}

const MyImageList = ({
  variant,
  imageListImages,
}: MyImageListProps): React.ReactElement => {
  return (
    <StyledImageList variant={variant} cols={4} rowHeight={221}>
      {imageListImages.map((item, index) => (
        <Tooltip
          key={index}
          title={
            <>
              <Typography color='inherit'>{item.title}</Typography>
              <em>{"And here's"}</em> <b>{'some'}</b> <u>{'amazing content'}</u>
              . {"It's very engaging. Right?"}
            </>
          }
        >
          <ImageListItem
            key={item.img}
            cols={item.cols || 1}
            rows={item.rows || 1}
          >
            <img
              {...srcset(item.img, 121, item.rows, item.cols)}
              alt={item.title}
              loading='lazy'
            />
          </ImageListItem>
        </Tooltip>
      ))}
    </StyledImageList>
  )
}

export default MyImageList