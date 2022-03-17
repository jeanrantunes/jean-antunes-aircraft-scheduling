import { DAY_IN_SECONDS } from 'constants/time'

export const calculatePositionInTimeline = (timelineWidth, time) => {
  if (!timelineWidth || !time) {
    return 0
  }
  return Math.ceil((timelineWidth / DAY_IN_SECONDS) * time)
}
