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

  border-top: ${loaderThickness} solid var(--text-body);
  border-right: ${loaderThickness} solid var(--text-body);
  border-bottom: ${loaderThickness} solid var(--text-body);
  border-left: ${loaderThickness} solid var(--black);
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
