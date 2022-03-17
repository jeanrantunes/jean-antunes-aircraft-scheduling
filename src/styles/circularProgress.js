import styled, { keyframes } from 'styled-components'

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const loaderThickness = '4px'

export const CircularProgress = styled.div`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);

  border-top: ${loaderThickness} solid grey;
  border-right: ${loaderThickness} solid grey;
  border-bottom: ${loaderThickness} solid grey;
  border-left: ${loaderThickness} solid black;
  background: transparent;
  width: 40px;
  height: 40px;
  border-radius: 50%;
`

export const ContainerLoading = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
`
