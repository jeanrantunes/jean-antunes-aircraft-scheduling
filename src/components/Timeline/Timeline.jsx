import { useRef } from 'react'
import { Container, ScheduleService, TurnaroundTime } from './styles'

const Timeline = ({ flights }) => {
  const timelineRef = useRef(null)

  const getPosition = time => {
    const widthTimeline = timelineRef.current.clientWidth
    return Math.ceil(time / widthTimeline)
  }

  return (
    <Container ref={timelineRef}>
      {flights.map((flight, index, flightsSelected) => {
        const previousFlight = index > 0 ? flightsSelected[index - 1] : null
        return (
          <div key={flight.id}>
            {previousFlight && (
              <TurnaroundTime
                style={{
                  left: `${getPosition(previousFlight.arrivaltime)}px`,
                  width: `${getPosition(
                    flight.departuretime - previousFlight.arrivaltime
                  )}px`
                }}
              />
            )}
            <ScheduleService
              style={{
                left: `${getPosition(flight.departuretime)}px`,
                width: `${getPosition(
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
