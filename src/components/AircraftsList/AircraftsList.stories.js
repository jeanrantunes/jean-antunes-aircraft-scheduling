import AircraftsList from '.'

export default {
  title: 'Components',
  component: AircraftsList
}

const Template = args => <AircraftsList {...args} />

export const AircraftsListComponent = Template.bind({})
AircraftsListComponent.args = {
  title: 'Aircrafts',
  height: 500,
  flightsSelected: [
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
  setAircraftSelected: () => {}
}
