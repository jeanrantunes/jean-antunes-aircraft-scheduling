import { DAY_IN_SECONDS } from 'constants/time'

export const getPercentageOfUtilization = flights => {
  const totalTime = flightInSecondsSum(flights)
  if (!totalTime) {
    return 0
  }
  return Math.ceil((totalTime * 100) / DAY_IN_SECONDS)
}

export const flightInSecondsSum = flights => {
  if (!flights?.length) {
    return 0
  }
  return flights.reduce(
    (acc, flight) => (acc += flight.arrivaltime - flight.departuretime),
    0
  )
}
