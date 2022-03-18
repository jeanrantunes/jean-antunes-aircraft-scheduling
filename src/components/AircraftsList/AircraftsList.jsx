import { useState, useEffect } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'

import { api } from 'services/api'
import { ScrolableList } from 'styles/scrollable'
import { Title } from 'styles/typografy'
import { getPercentageOfUtilization } from './helpers'
import { CircularProgress, ContainerLoading } from 'styles/circularProgress'
import { AircraftsCard, Container, Pecentage } from './styles'

const AircraftsList = ({ setAircraftSelected, flightsSelected, height }) => {
  const [aircrafts, setAircrafts] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const getAircrafts = async () => {
      // setIsLoading(true)
      try {
        const { data } = await api.get('/aircrafts')
        setAircrafts(data.data)
      } catch (err) {
        alert('Error aircrafts endpoint.', err)
      } finally {
        setIsLoading(false)
      }
    }
    getAircrafts()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <Title>Aircrafts</Title>
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
