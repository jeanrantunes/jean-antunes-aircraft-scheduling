import {useState, useEffect} from 'react';
import {api} from 'services/api'
import {ScrolableList} from 'styles/scrollable'
import {Title} from 'styles/typografy'
import {Arrow,Container,DestinationLabels, FlightsCard, FlightLabel, Label} from './styles'
import { Grid, Row, Col } from 'react-flexbox-grid';

const AircraftsList = ({aircraftSelected, height}) => {
    const [flights, setFlights] = useState([])

    useEffect(() => {
        const getFlights = async () => {
            try {
                const { data } = await api.get('/flights')
                setFlights(data.data)
            } catch (err) {
                alert('Error flights endpoint.', err)
            }
        }
        getFlights()
    }, []);

    return (
        <Container>
            {!!aircraftSelected?.ident && <Title>Rotation {aircraftSelected.ident}</Title>}
            <div>
                <ScrolableList style={{height}}>
                    {flights.map(flight => (
                        <FlightsCard key={flight.id}>   
                                <Grid fluid>
                                    <Row>
                                        <Col xs={12}>
                                            <FlightLabel>Flight: {flight.id}</FlightLabel>
                                        </Col>
                                    </Row>
                                    <Row  middle="xs">
                                        <Col xs={3}>
                                            <Label>{flight.origin}</Label><Label>{flight.readable_departure}</Label>
                                        </Col>
                                        <Col xs={6}>
                                            <Arrow>&#8594;</Arrow>
                                        </Col>
                                        <DestinationLabels xs={3}>
                                            <Label>{flight.destination}</Label><Label>{flight.origin}</Label>
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