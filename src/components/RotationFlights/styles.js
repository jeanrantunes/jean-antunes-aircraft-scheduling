import styled from 'styled-components'
import { Col } from 'react-flexbox-grid';

export const Container = styled.div`
`

export const FlightsList = styled.div`

`

export const FlightsCard = styled.li`
    padding: 20px 10px;
    border: 1px solid #000;
    margin-bottom: 20px;
`

export const Label = styled.span`
    display: block;
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

export const DestinationLabels = styled(Col)`
    text-align: right;
`