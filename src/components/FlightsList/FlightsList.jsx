import { Grid, Row, Col } from 'react-flexbox-grid';

import {Title, DestinationLabels, Label} from 'styles/typografy'
import {ScrolableFlightsList, CenteredLabel, Card} from './styles'

const FlightsList = ({queueFlightsSelected, height}) => {
    return (
        <>
        <Title>Flights</Title>
            <ScrolableFlightsList style={{height}}>
                {queueFlightsSelected.map(flight => (
                    <Card key={flight.id}>
                        <Grid>
                            <Row>
                                <Col xs={12}>
                                    <CenteredLabel>{flight.id}</CenteredLabel>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={6}>
                                    <Label>{flight.origin}</Label>
                                    <Label>{flight.readable_departure}</Label>
                                </Col>
                            
                                <DestinationLabels xs={6}>
                                    <Label>{flight.destination}</Label>
                                    <Label>{flight.readable_arrival}</Label>
                                </DestinationLabels>
                            </Row>
                        </Grid>
                    </Card>
                ))}
            </ScrolableFlightsList>
        </>
    )
}

export default FlightsList