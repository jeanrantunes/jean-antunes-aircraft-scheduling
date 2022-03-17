import { getTomorrowDate, formatDate } from './helpers'
import { Arrow, Container, DateLabel } from './styles'

const ScheduleDate = () => {
  const tomorrow = getTomorrowDate()

  return (
    <Container>
      <Arrow>&#x2039;</Arrow> <DateLabel>{formatDate(tomorrow)}</DateLabel>{' '}
      <Arrow>&#x203A;</Arrow>
    </Container>
  )
}

export default ScheduleDate
