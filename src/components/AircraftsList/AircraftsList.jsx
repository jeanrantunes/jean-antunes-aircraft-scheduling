import { Grid, Row, Col } from 'react-flexbox-grid'

import { useAircrafts } from 'hooks/useAircrafts'
import { ScrolableList } from 'styles/scrollable'
import { Title } from 'styles/typografy'
import { getPercentageOfUtilization } from './helpers'
import { CircularProgress, ContainerLoading } from 'styles/circularProgress'
import { AircraftsCard, Container, Pecentage } from './styles'

const AircraftsList = ({
  title,
  setAircraftSelected,
  flightsSelected,
  height
}) => {
  const { aircrafts, isLoading } = useAircrafts()

  return (
    <>
      {title && <Title>{title}</Title>}
      <Container style={{ height }}>
        <ScrolableList id='aircrafts-list'>
          {isLoading ? (
            <ContainerLoading>
              <CircularProgress />
            </ContainerLoading>
          ) : (
            aircrafts?.map(aircraft => (
              <li key={aircraft.ident}>
                <AircraftsCard onClick={() => setAircraftSelected(aircraft)}>
                  <Grid>
                    <Row center='xs'>
                      <Col xs={12}>
                        <strong>{aircraft.ident}</strong>
                      </Col>
                      <Col xs={12}>
                        <Pecentage>
                          {getPercentageOfUtilization(flightsSelected)}%
                        </Pecentage>
                      </Col>
                    </Row>
                  </Grid>
                </AircraftsCard>
              </li>
            ))
          )}
        </ScrolableList>
      </Container>
    </>
  )
}

export default AircraftsList
