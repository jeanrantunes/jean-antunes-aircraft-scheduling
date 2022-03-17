import styled from 'styled-components'

export const FlightsCard = styled.li`
  padding: 10px 0;
  border: 1px solid #000;
  margin-bottom: 20px;
  @media (min-width: 768px) {
    padding: 20px 10px;
  }
`

export const FlightLabel = styled.span`
  display: block;
  margin-bottom: 10px;
`

export const Arrow = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  font-size: 2.5rem;
`

export const CheckboxInput = styled.input`
  float: right;
  cursor: pointer;
`
