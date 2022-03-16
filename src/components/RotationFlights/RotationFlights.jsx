import {useState, useEffect} from 'react';
import {api} from 'services/api'
import {ScrolableList} from 'styles/scrollable'
import {Title} from 'styles/typografy'
import {Arrow,Container,CheckboxInput,DestinationLabels, FlightsCard, FlightLabel, Label} from './styles'
import { Grid, Row, Col } from 'react-flexbox-grid';
import {couldItBeTheNextFlight} from './helpers'

const AircraftsList = ({aircraftSelected, height, queueFlightsSelected, setQueueFlightsSelected}) => {
    const [flights, setFlights] = useState([])

    useEffect(() => {
        const getFlights = async () => {
            try {
                const { data } = await api.get('/flights')
                setFlights(data.data)
            } catch (err) {
                alert('Error rotation flights component:', err)
            }
        }
        getFlights()
    }, []);

    const handleChange = (flightSelected) => {
        let flightToBeAdded = couldItBeTheNextFlight(queueFlightsSelected, flightSelected)
        
        if (flightToBeAdded) {
            setFlights(flights.map(flight => {
                if (flight.id === flightSelected.id) {
                    return {
                        ...flight,
                        selected: true
                    }
                }
                return flight
            }))
            setQueueFlightsSelected([...queueFlightsSelected, flightToBeAdded])
            return
        }
        alert(`Flight ${flightSelected.id} can NOT be added as the next flight.`)
    }

    return (
        <Container>
            {!!aircraftSelected?.ident && <Title>Rotation {aircraftSelected.ident}</Title>}
            <div>
                <ScrolableList style={{height}}>
                    {flights.map(flight => (
                        <FlightsCard key={flight.id}>  
                                <Grid fluid>
                                    <Row>
                                        <Col xs={8}>
                                            <FlightLabel>Flight: {flight.id}</FlightLabel>
                                        </Col>
                                        <Col xs={4}>
                                            <CheckboxInput
                                                type="checkbox"
                                                checked={!!flight?.selected}
                                                onChange={() => handleChange(flight)}
                                            />
                                        </Col>
                                    </Row>
                                    <Row  middle="xs">
                                        <Col xs={3}>
                                            <Label>{flight.origin}</Label>
                                            <Label>{flight.readable_departure}</Label>
                                        </Col>
                                        <Col xs={6}>
                                            <Arrow>&#8594;</Arrow>
                                        </Col>
                                        <DestinationLabels xs={3}>
                                            <Label>{flight.destination}</Label>
                                            <Label>{flight.readable_arrival}</Label>
                                        </DestinationLabels>
                                    </Row>
                                </Grid>
                        </FlightsCard>
                    ))}
                </ScrolableList>
            </div>
        </Container>
    )
}

export default AircraftsList