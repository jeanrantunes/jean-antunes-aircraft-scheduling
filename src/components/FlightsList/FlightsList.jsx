import {Title} from 'styles/typografy'
import {ScrolableFlightsList} from './styles'

const FlightsList = ({queueFlightsSelected, height}) => {
    return (
        <>
        <Title>Flights</Title>
        <ScrolableFlightsList style={{height}}>
            {queueFlightsSelected.map(flight => (
                <li key={flight.id}>{JSON.stringify(flight)}</li>
            ))}
            
        </ScrolableFlightsList>
        </>
    )
}

export default FlightsList