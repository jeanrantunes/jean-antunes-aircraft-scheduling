import { useRef } from 'react'
import { Container, ScheduleService, TurnaroundTime } from './styles'
import { calculatePositionInTimeline } from './helpers'

const Timeline = ({ flights }) => {
  const timelineRef = useRef(null)

  return (
    <Container ref={timelineRef}>
      {flights.map((flight, index, flightsSelected) => {
        const previousFlight = index > 0 ? flightsSelected[index - 1] : null
        return (
          <div key={flight.id}>
            {previousFlight && (
              <TurnaroundTime
                style={{
                  left: `${calculatePositionInTimeline(
                    timelineRef.current.clientWidth,
                    previousFlight.arrivaltime
                  )}px`,
                  width: `${calculatePositionInTimeline(
                    timelineRef.current.clientWidth,
                    flight.departuretime - previousFlight.arrivaltime
                  )}px`
                }}
              />
            )}
            <ScheduleService
              style={{
                left: `${calculatePositionInTimeline(
                  timelineRef.current.clientWidth,
                  flight.departuretime
                )}px`,
                width: `${calculatePositionInTimeline(
                  timelineRef.current.clientWidth,
                  flight.arrivaltime - flight.departuretime
                )}px`
              }}
            />
          </div>
        )
      })}
    </Container>
  )
}

export default Timeline
