import styled from 'styled-components'

const ImageDiv = styled.div`
  display: 'inline';
  width: 50px;
  height: auto;
  max-height: 50px;
  margin: 5px;
  background-color: ${({ theme }) => theme.palette.secondary.main};
`

export default ImageDiv
