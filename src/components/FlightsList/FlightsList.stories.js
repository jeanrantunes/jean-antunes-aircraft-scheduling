import FlightsListComponent from './FlightsList'

export default {
  title: 'Components',
  component: FlightsListComponent
}

const Template = args => <FlightsListComponent {...args} />

export const FlightsList = Template.bind({})
FlightsList.args = {
  title: 'Flights',
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
  height: 500
}
