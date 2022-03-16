export const couldItBeTheNextFlight = (queueFlightsSelected, flight) => {
    const queueFlightsSelectedLength = queueFlightsSelected?.length
    if (!queueFlightsSelectedLength) {
        return flight
    }
    
    const lastFlightAdded = queueFlightsSelected[queueFlightsSelectedLength - 1]

    if (lastFlightAdded.origin === flight.destination) {
        return flight
    }
}