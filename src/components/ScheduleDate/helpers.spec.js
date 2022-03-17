import dayjs from 'dayjs'
import utc from 'dayjs-plugin-utc'
dayjs.extend(utc)
import { formatDate } from './helpers'

describe('formatDate method', () => {
  const date = dayjs()
  it('should convert date to this format: day month year', () => {
    expect(formatDate(date)).toBe(date.format('DD MMMM YYYY'))
  })
  it('should return undefined if no date is passed in', () => {
    expect(formatDate()).toBeUndefined()
    expect(formatDate(null)).toBeUndefined()
    expect(formatDate(undefined)).toBeUndefined()
    expect(formatDate({})).toBeUndefined()
  })
})
