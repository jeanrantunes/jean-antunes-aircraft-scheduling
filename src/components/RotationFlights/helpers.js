export const couldItBeTheNextFlight = (queueFlightsSelected, flight) => {
  if (!flight) {
    return
  }
  const queueFlightsSelectedLength = queueFlightsSelected?.length
  if (!queueFlightsSelectedLength) {
    return flight
  }

  const lastFlightAdded = queueFlightsSelected[queueFlightsSelectedLength - 1]

  if (
    isNotPassedMidnight(flight.arrivaltime) &&
    lastFlightAdded.destination === flight.origin &&
    doesRespectTheTurnaround(lastFlightAdded.arrivaltime, flight.departuretime)
  ) {
    return flight
  }
}

export const isNotPassedMidnight = arrivaltime => {
  if (!arrivaltime) {
    return false
  }
  return arrivaltime <= 86400
}

export const doesRespectTheTurnaround = (
  arrivalPreviousFlight,
  departureNextFlight
) => {
  const twentyMinutesInSeconds = 20 * 60

  return departureNextFlight - arrivalPreviousFlight >= twentyMinutesInSeconds
}
