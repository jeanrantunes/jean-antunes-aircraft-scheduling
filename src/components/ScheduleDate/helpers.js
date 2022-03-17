import dayjs from 'dayjs'
import utc from 'dayjs-plugin-utc'
dayjs.extend(utc)

export const getTomorrowDate = () => {
  return dayjs().utc().add(1, 'day')
}

export const formatDate = date => {
  if (!date || !dayjs(date).isValid()) {
    return
  }
  return date.format('DD MMMM YYYY')
}
