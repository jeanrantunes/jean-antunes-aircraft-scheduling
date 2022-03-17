import { flightInSecondsSum, getPercentageOfUtilization } from './helpers'

const flights = [
  {
    ident: 'AS1001',
    departuretime: 21600,
    arrivaltime: 26100,
    readable_departure: '06:00',
    readable_arrival: '07:15',
    origin: 'LFSB',
    destination: 'LFMN'
  },
  {
    ident: 'AS1002',
    departuretime: 27900,
    arrivaltime: 32100,
    readable_departure: '07:45',
    readable_arrival: '08:55',
    origin: 'LFMN',
    destination: 'LFSB'
  },
  {
    ident: 'AS1025',
    departuretime: 22800,
    arrivaltime: 28200,
    readable_departure: '06:20',
    readable_arrival: '07:50',
    origin: 'LFSB',
    destination: 'EDDH'
  },
  {
    ident: 'AS1026',
    departuretime: 30000,
    arrivaltime: 35100,
    readable_departure: '08:20',
    readable_arrival: '09:45',
    origin: 'EDDH',
    destination: 'LFSB'
  }
]

describe('flightInSecondsSum method', () => {
  it('should return the time spent on flights', () => {
    expect(flightInSecondsSum(flights)).toBe(19200)
    expect(flightInSecondsSum([flights[0], flights[1]])).toBe(8700)
  })

  it('should return 0 if invalid flights were passed in', () => {
    expect(flightInSecondsSum(null)).toBe(0)
    expect(flightInSecondsSum(undefined)).toBe(0)
    expect(flightInSecondsSum({})).toBe(0)
  })
})

describe('getPercentageOfUtilization method', () => {
  it('should return the percent of utilization', () => {
    expect(getPercentageOfUtilization(flights)).toBe(23)
    expect(getPercentageOfUtilization([flights[0], flights[1]])).toBe(11)
  })

  it('should return 0 if invalid flights were passed in', () => {
    expect(getPercentageOfUtilization(null)).toBe(0)
    expect(getPercentageOfUtilization(undefined)).toBe(0)
    expect(getPercentageOfUtilization({})).toBe(0)
  })
})
