import { useEffect, Fragment } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'
import { useInView } from 'react-intersection-observer'

import { useFlights } from 'hooks/useFlights'

import { Title, DestinationLabels, Label } from 'styles/typografy'
import { CircularProgress, ContainerLoading } from 'styles/circularProgress'
import { ScrolableList } from 'styles/scrollable'
import { Arrow, CheckboxInput, FlightsCard, FlightLabel } from './styles'
import { couldItBeTheNextFlight } from './helpers'

const RotationFlights = ({
  aircraftSelected,
  height,
  queueFlightsSelected,
  setQueueFlightsSelected
}) => {
  const { ref, inView } = useInView()
  const { flights, fetchNextPage, updateFlight } = useFlights()

  useEffect(() => {
    if (inView) {
      fetchNextPage()
    }
  }, [inView])

  const handleToggleFlight = flightSelected => {
    if (!aircraftSelected?.ident) {
      alert('No aircraft selected. You must select an aircraft!')
      return
    } else if (flightSelected.selected) {
      //should remove of flights list
      setQueueFlightsSelected(
        queueFlightsSelected.filter(flight => flight.id !== flightSelected.id)
      )
      updateFlight(flightSelected)
      return
    }

    let flightToBeAdded = couldItBeTheNextFlight(
      queueFlightsSelected,
      flightSelected
    )

    if (flightToBeAdded) {
      updateFlight(flightSelected)
      setQueueFlightsSelected([...queueFlightsSelected, flightToBeAdded])
      return
    }
    alert(`Flight ${flightSelected.id} can NOT be added as next flight.`)
  }

  return (
    <>
      {!!aircraftSelected?.ident ? (
        <Title>Rotation {aircraftSelected.ident}</Title>
      ) : (
        <Title>No aircraft selected</Title>
      )}
      <ScrolableList style={{ height }}>
        <ul>
          {flights.map(page => (
            <Fragment key={page.pagination.offset}>
              {page.data.map((flight, i) => (
                <FlightsCard key={flight.id + i}>
                  <Grid fluid>
                    <Row>
                      <Col xs={8}>
                        <FlightLabel>Flight: {flight.id}</FlightLabel>
                      </Col>
                      <Col xs={4}>
                        <CheckboxInput
                          type='checkbox'
                          checked={!!flight?.selected}
                          onChange={() => handleToggleFlight(flight)}
                        />
                      </Col>
                    </Row>
                    <Row middle='xs'>
                      <Col xs={6} md={3}>
                        <Label>{flight.origin}</Label>
                        <Label>{flight.readable_departure}</Label>
                      </Col>
                      <Col xs={12} md={6} last='xs'>
                        <Arrow>&#8594;</Arrow>
                      </Col>
                      <DestinationLabels xs={6} md={3} last='md'>
                        <Label>{flight.destination}</Label>
                        <Label>{flight.readable_arrival}</Label>
                      </DestinationLabels>
                    </Row>
                  </Grid>
                </FlightsCard>
              ))}
            </Fragment>
          ))}
          <ContainerLoading ref={ref}>
            <CircularProgress />
          </ContainerLoading>
        </ul>
      </ScrolableList>
    </>
  )
}

export default RotationFlights
