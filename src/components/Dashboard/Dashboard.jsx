import { useState } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'

import {
  AIRCRAFT_AND_FLIGHTS_HEIGHT,
  ROTATION_FLIGHTS_HEIGHT
} from 'constants/sizeComponents'
import { Header } from './styles'
import { ScheduleDate } from '../ScheduleDate'
import { AircraftsList } from '../AircraftsList'
import { RotationFlights } from '../RotationFlights'
import { FlightsList } from '../FlightsList'
import { Timeline } from '../Timeline'

const Dashboard = () => {
  const [aircraftSelected, setAircraftSelected] = useState(null)
  const [queueFlightsSelected, setQueueFlightsSelected] = useState([])

  return (
    <Grid>
      <Row>
        <Col xs={12}>
          <Header>
            <ScheduleDate />
          </Header>
        </Col>
      </Row>
      <Row>
        <Col xs={4}>
          <AircraftsList
            height={AIRCRAFT_AND_FLIGHTS_HEIGHT}
            setAircraftSelected={setAircraftSelected}
            flightsSelected={queueFlightsSelected}
          />
        </Col>
        <Col xs={4}>
          <div>
            <RotationFlights
              height={ROTATION_FLIGHTS_HEIGHT}
              aircraftSelected={aircraftSelected}
              queueFlightsSelected={queueFlightsSelected}
              setQueueFlightsSelected={setQueueFlightsSelected}
            />
            <Timeline flights={queueFlightsSelected} />
          </div>
        </Col>
        <Col xs={4}>
          <FlightsList
            height={AIRCRAFT_AND_FLIGHTS_HEIGHT}
            queueFlightsSelected={queueFlightsSelected}
          />
        </Col>
      </Row>
    </Grid>
  )
}

export default Dashboard
