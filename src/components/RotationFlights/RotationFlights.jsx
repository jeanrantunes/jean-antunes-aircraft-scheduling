import {useState, useEffect} from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import InfiniteScroll from "react-infinite-scroll-component";

import {api} from 'services/api'
import {Title, DestinationLabels, Label} from 'styles/typografy'
import {CircularProgress, ContainerLoading} from 'styles/circularProgress'
import {Arrow, CheckboxInput, FlightsCard, FlightLabel } from './styles'
import {couldItBeTheNextFlight} from './helpers'

const AircraftsList = ({aircraftSelected, height, queueFlightsSelected, setQueueFlightsSelected}) => {
    const [flights, setFlights] = useState([])
    const [offsetFlights, setOffsetFlights] = useState(0)
    const [hasMoreFlights, setHasMoreFlights] = useState(true)

    const fetchFlights = async (offset = 0) => {
        if (!hasMoreFlights) {
            return
        }
        try {
            const { data } = await api.get('/flights', {
                params: {
                    offset
                }
            })
            const {total, limit} = data.pagination
            setOffsetFlights(offset)
            setHasMoreFlights(offset * limit < total)
            setFlights([...flights, ...data.data])
        } catch (err) {
            alert('Error rotation flights component:', err)
        } 
    }

    useEffect(() => {
        fetchFlights()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const toggleFlightSelected = (flightSelected) => {
        setFlights(flights.map(flight => {
            if (flight.id === flightSelected.id) {
                return {
                    ...flight,
                    selected: !flightSelected.selected
                }
            }
            return flight
        }))
    }

    const handleToggleFlight = (flightSelected) => {
        if (!aircraftSelected?.ident) {
            alert('No aircraft selected. You must select an aircraft!')
            return 
        } else if (flightSelected.selected) { //should remove of flights list
            setQueueFlightsSelected(queueFlightsSelected.filter(flight => flight.id !== flightSelected.id))
            toggleFlightSelected(flightSelected)
            return 
        }

        let flightToBeAdded = couldItBeTheNextFlight(queueFlightsSelected, flightSelected)
        
        if (flightToBeAdded) {
            toggleFlightSelected(flightSelected)
            setQueueFlightsSelected([...queueFlightsSelected, flightToBeAdded])
            return
        }
        alert(`Flight ${flightSelected.id} can NOT be added as next flight.`)
    }

    return (
        <>
            {!!aircraftSelected?.ident ? <Title>Rotation {aircraftSelected.ident}</Title> : <Title>No aircraft selected</Title>}
            <div>
                <InfiniteScroll 
                    height={height}
                    dataLength={flights.length} 
                    next={() => {
                        // setOffset(offset+1)
                        fetchFlights(offsetFlights+1)
                        return 
                    }} 
                    hasMore={hasMoreFlights}
                    loader={<ContainerLoading><CircularProgress /></ContainerLoading>}>
                    <ul>
                    {flights.map((flight, i) => (
                        <FlightsCard key={flight.id + i}>  
                                <Grid fluid>
                                    <Row>
                                        <Col xs={8}>
                                            <FlightLabel>Flight: {flight.id}</FlightLabel>
                                        </Col>
                                        <Col xs={4}>
                                            <CheckboxInput
                                                type="checkbox"
                                                checked={!!flight?.selected}
                                                onChange={() => handleToggleFlight(flight)}
                                            />
                                        </Col>
                                    </Row>
                                    <Row middle="xs">
                                        <Col xs={6} md={3}>
                                            <Label>{flight.origin}</Label>
                                            <Label>{flight.readable_departure}</Label>
                                        </Col>
                                        <Col xs={12} md={6} last="xs">
                                            <Arrow>&#8594;</Arrow>
                                        </Col>
                                        <DestinationLabels xs={6} md={3} last="md">
                                            <Label>{flight.destination}</Label>
                                            <Label>{flight.readable_arrival}</Label>
                                        </DestinationLabels>
                                    </Row>
                                </Grid>
                        </FlightsCard>
                    ))}
                    </ul>
                </InfiniteScroll>
            </div>
        </>
    )
}

export default AircraftsList