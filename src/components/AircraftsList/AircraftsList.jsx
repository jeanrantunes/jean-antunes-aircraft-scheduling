import {useState, useEffect} from 'react';
import {api} from 'services/api'
import {ScrolableList} from 'styles/scrollable'
import {Title} from 'styles/typografy'

import {Container,AircraftsCard,Pecentage } from './styles'

const AircraftsList = ({setAircraftSelected,height}) => {
    const [aircrafts, setAircrafts] = useState([])
    
    useEffect(() => {
        const getAircrafts = async () => {
            try {
                const { data } = await api.get('/aircrafts')
                setAircrafts(data.data)
                setAircraftSelected(data.data[0])
            } catch (err) {
                alert('Error aircrafts endpoint.', err)
            }
        }
        getAircrafts()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <Title>Aircrafts</Title>
            <Container style={{height}}>
            <ScrolableList>
                {aircrafts.map(aircraft => (
                    <li key={aircraft.ident}>
                        <AircraftsCard onClick={() => setAircraftSelected(aircraft)}>
                            <span>{aircraft.ident}</span>
                            <Pecentage>0%</Pecentage>
                        </AircraftsCard>
                    </li>
                ))}
            </ScrolableList>
        </Container>
        </>
    )
}

export default AircraftsList