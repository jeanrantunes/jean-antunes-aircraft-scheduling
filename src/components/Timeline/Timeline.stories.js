import TimelineComponent from './Timeline'

export default {
  title: 'Components',
  component: TimelineComponent
}

const Template = args => <TimelineComponent {...args} />

export const Timeline = Template.bind({})
Timeline.args = {
  flights: [
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
    },
    {
      id: 'AS1027',
      departuretime: 35100,
      arrivaltime: 40500,
      readable_departure: '09:45',
      readable_arrival: '11:15',
      origin: 'LFSB',
      destination: 'EDDH'
    }
  ]
}
