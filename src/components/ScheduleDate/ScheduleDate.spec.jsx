import { render } from '@testing-library/react'

import ScheduleDate from './ScheduleDate'
import { getTomorrowDate, formatDate } from './helpers'

describe('ScheduleDate component', () => {
  it('should render component with tomorrow`s date', () => {
    const tomorrow = getTomorrowDate()
    const { getByText } = render(<ScheduleDate />)

    expect(getByText(formatDate(tomorrow))).toBeInTheDocument()
  })
})
