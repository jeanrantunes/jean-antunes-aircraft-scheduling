import { useRef, useEffect, useState } from 'react'
import { Container, ScheduleService, TurnaroundTime } from './styles'
import { calculatePositionInTimeline } from './helpers'

const Timeline = ({ flights }) => {
  const [timelineWidth, setTimelineWidth] = useState(0)
  const timelineRef = useRef(null)

  useEffect(() => {
    setTimelineWidth(timelineRef?.current?.clientWidth)
  }, [timelineRef])

  return (
    <Container ref={timelineRef}>
      {flights?.map((flight, index, flightsSelected) => {
        const previousFlight = index > 0 ? flightsSelected[index - 1] : null
        return (
          <div key={flight.id}>
            {previousFlight && (
              <TurnaroundTime
                className={'turnaround-time'}
                style={{
                  left: `${calculatePositionInTimeline(
                    timelineWidth,
                    previousFlight.arrivaltime
                  )}px`,
                  width: `${calculatePositionInTimeline(
                    timelineWidth,
                    flight.departuretime - previousFlight.arrivaltime
                  )}px`
                }}
              />
            )}
            <ScheduleService
              className={'schedule-service'}
              style={{
                left: `${calculatePositionInTimeline(
                  timelineWidth,
                  flight.departuretime
                )}px`,
                width: `${calculatePositionInTimeline(
                  timelineWidth,
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
