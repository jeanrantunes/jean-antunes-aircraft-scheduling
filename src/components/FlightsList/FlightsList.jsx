import {Title} from 'styles/typografy'
import {ScrolableFlightsList} from './styles'

const FlightsList = ({height}) => {
    return (
        <>
        <Title>Flights</Title>
        <ScrolableFlightsList style={{height}}>
            <li>asda</li>
        </ScrolableFlightsList>
        </>
    )
}

export default FlightsList