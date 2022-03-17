import styled from 'styled-components'
import { ScrolableList } from 'styles/scrollable'

export const ScrolableFlightsList = styled(ScrolableList)`
  border: 1px solid var(--black);
`

export const CenteredLabel = styled.span`
  display: block;
  text-align: center;
  margin-bottom: 10px;
`

export const Card = styled.li`
  display: flex;
  border: 1px solid var(--black);
  padding: 10px;
  height: 150px;
  align-items: center;
`
