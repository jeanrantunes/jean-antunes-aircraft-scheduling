import RotationFlightsComponent from './RotationFlights'

export default {
  title: 'Components',
  component: RotationFlightsComponent
}

const Template = args => <RotationFlightsComponent {...args} />

export const RotationFlights = Template.bind({})
RotationFlights.args = {
  aircraftSelected: {
    ident: 'GABCDA test',
    type: 'A320',
    economySeats: 186,
    base: 'EGKK'
  },
  height: 500,
  queueFlightsSelected: [
    {
      id: 'XS1001',
      departuretime: 21600,
      arrivaltime: 26100,
      readable_departure: '06:00',
      readable_arrival: '07:15',
      origin: 'LFSB',
      destination: 'LFMN'
    },
    {
      id: 'AS1002',
      departuretime: 27900,
      arrivaltime: 32100,
      readable_departure: '07:45',
      readable_arrival: '08:55',
      origin: 'LFMN',
      destination: 'LFSB'
    }
  ],
  setQueueFlightsSelected: () => {}
}
