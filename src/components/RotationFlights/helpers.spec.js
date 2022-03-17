import {
  isNotPassedMidnight,
  couldItBeTheNextFlight,
  doesRespectTheTurnaround
} from './helpers'

describe('isNotPassedMidnight method', () => {
  it('should return false if more then 24h (in seconds) is passed in', () => {
    expect(isNotPassedMidnight(90000)).toBeFalsy()
    expect(isNotPassedMidnight(86401)).toBeFalsy()
  })
  it('should return true if <= 24h (in seconds) is passed in', () => {
    expect(isNotPassedMidnight(3)).toBeTruthy()
    expect(isNotPassedMidnight(86400)).toBeTruthy()
  })
  it('should return false if invalid values were passed in', () => {
    expect(isNotPassedMidnight(null)).toBeFalsy()
    expect(isNotPassedMidnight(undefined)).toBeFalsy()
  })
})

describe('doesRespectTheTurnaround method', () => {
  it('should return true if turnaround is equal or more than 20 min', () => {
    expect(doesRespectTheTurnaround(1200, 2400)).toBeTruthy()
    expect(doesRespectTheTurnaround(2200, 5000)).toBeTruthy()
  })
  it('should return false if turnaround is less than 20 min', () => {
    expect(doesRespectTheTurnaround(1200, 2300)).toBeFalsy()
    expect(doesRespectTheTurnaround(5200, 5600)).toBeFalsy()
  })
  it('should return false if invalid values were passed in', () => {
    expect(doesRespectTheTurnaround(null, null)).toBeFalsy()
    expect(doesRespectTheTurnaround(undefined, null)).toBeFalsy()
    expect(doesRespectTheTurnaround(-2, -12322)).toBeFalsy()
    expect(doesRespectTheTurnaround(2000, -12322)).toBeFalsy()
  })
})

describe('couldItBeTheNextFlight method', () => {
  let mockQueue, mockFlight1, mockFlight2

  beforeEach(() => {
    mockQueue = []
    mockFlight1 = {
      ident: 'AS1001',
      departuretime: 21600,
      arrivaltime: 26100,
      readable_departure: '06:00',
      readable_arrival: '07:15',
      origin: 'LFSB',
      destination: 'LFMN'
    }
    mockFlight2 = {
      ident: 'AS1002',
      departuretime: 27900,
      arrivaltime: 32100,
      readable_departure: '07:45',
      readable_arrival: '08:55',
      origin: 'LFMN',
      destination: 'LFSB'
    }
  })

  describe('when the queue is empty', () => {
    it('should be able return the flight', () => {
      expect(couldItBeTheNextFlight(mockQueue, mockFlight1)).toMatchObject(
        mockFlight1
      )
    })
  })

  describe('when the queue has flights', () => {
    describe('and the flight to be added follow the rules', () => {
      it('should be able to return the last flight added', () => {
        mockQueue.push(mockFlight1)
        expect(couldItBeTheNextFlight(mockQueue, mockFlight2)).toMatchObject(
          mockFlight2
        )
      })
    })
    describe('and the flight to be added do NOT follow the teleport rule', () => {
      it('should NOT return the flight', () => {
        mockQueue.push(mockFlight1)
        mockFlight2.origin = 'ABCD'
        expect(couldItBeTheNextFlight(mockQueue, mockFlight2)).toBeUndefined()
      })
    })
    describe('and the flight to be added do NOT follow the turnaround rule', () => {
      it('should NOT return the flight', () => {
        mockQueue.push(mockFlight1)
        mockFlight2.departuretime = 26600
        expect(couldItBeTheNextFlight(mockQueue, mockFlight2)).toBeUndefined()
      })
    })
    describe('and the flight to be added do NOT follow the rule: All aircrafts must be on the ground at midnight', () => {
      it('should NOT return the flight', () => {
        mockQueue.push(mockFlight1)
        mockFlight2.arrivaltime = 87400
        expect(couldItBeTheNextFlight(mockQueue, mockFlight2)).toBeUndefined()
      })
    })
    describe('no valid flight is passed in', () => {
      it('should NOT return the flight', () => {
        mockQueue.push(mockFlight1)
        expect(couldItBeTheNextFlight(mockQueue, null)).toBeUndefined()
      })
    })
  })
})
