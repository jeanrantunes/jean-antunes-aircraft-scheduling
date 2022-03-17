import { calculatePositionInTimeline } from './helpers'

describe('calculatePositionInTimeline method', () => {
  const timelineWidth = 1000
  const time1 = 26000 // seconds
  const time2 = 12000 // seconds
  const time3 = 60000 // seconds

  it('should return the position in the timeline measuring 1000px', () => {
    expect(calculatePositionInTimeline(timelineWidth, time1)).toBe(301)
    expect(calculatePositionInTimeline(timelineWidth, time2)).toBe(139)
    expect(calculatePositionInTimeline(timelineWidth, time3)).toBe(695)
  })

  it('should return 0 if invalid values were passed in', () => {
    expect(calculatePositionInTimeline(timelineWidth, null)).toBe(0)
    expect(calculatePositionInTimeline(null, time2)).toBe(0)
    expect(calculatePositionInTimeline(null, null)).toBe(0)
  })
})
