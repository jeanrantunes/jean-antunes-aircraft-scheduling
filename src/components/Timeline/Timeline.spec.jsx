import { render } from '@testing-library/react'
import flights from '../../../__mocks/flights.json'
import Timeline from './Timeline'
import React from 'react'

describe('Timeline component', () => {
  describe('when 2 flights are scheduled', () => {
    it('should return 1 turnaround time bar and 2 schedule service bars', () => {
      jest
        .spyOn(React, 'useRef')
        .mockReturnValueOnce({ current: { clientWidth: 200 } })

      const { container } = render(
        <Timeline flights={[flights.data[0], flights.data[1]]} />
      )
      expect(container.querySelectorAll('.turnaround-time').length).toBe(1)
      expect(container.querySelectorAll('.schedule-service').length).toBe(2)
    })

    it('should return no bars if no flights were added', () => {
      jest
        .spyOn(React, 'useRef')
        .mockReturnValueOnce({ current: { clientWidth: 300 } })

      const { container } = render(<Timeline />)
      expect(container.querySelectorAll('.turnaround-time').length).toBe(0)
      expect(container.querySelectorAll('.schedule-service').length).toBe(0)
    })
  })
})
