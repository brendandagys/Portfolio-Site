import styled from 'styled-components'

const BackgroundColor = styled.div`
  background-color: ${({ theme }) => theme.palette.secondary.main};
  width: 100%;
  border-radius: 30px 30px 0 0;
  padding-top: 2rem;
  box-shadow: 0px -1px 7px #454545;
`

export default BackgroundColor
