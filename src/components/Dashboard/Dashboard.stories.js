import DashboardComponent from './Dashboard'
import MockAdapter from 'axios-mock-adapter'
import { api } from 'services/api'
import aircraftsMock from '../../../__mocks/aircrafts.json'
import flightsMock from '../../../__mocks/flights.json'

const mock = new MockAdapter(api)

mock.onGet('/aircrafts').reply(200, {
  ...aircraftsMock
})

mock.onGet('/flights').reply(200, {
  ...flightsMock
})

export default {
  title: 'Components',
  component: DashboardComponent
}

const Template = args => <DashboardComponent {...args} />

export const Dashboard = Template.bind({})
Dashboard.args = {}
