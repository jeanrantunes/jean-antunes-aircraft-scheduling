import {useState} from 'react'
import {Container, Header, Content} from './styles'
import {ScheduleDate} from '../ScheduleDate'
import {AircraftsList} from '../AircraftsList'
import {RotationFlights} from '../RotationFlights'
import {FlightsList} from '../FlightsList'
import {Timeline} from '../Timeline'

const Dashboard = () => {
    const [aircraftSelected, setAircraftSelected] = useState(null)
    
    return (
        <Container>
            <Header><ScheduleDate /></Header>
            <Content>
                <AircraftsList setAircraftSelected={setAircraftSelected}/>

                <div>
                    <RotationFlights aircraftSelected={aircraftSelected}/>
                    <Timeline />
                </div>
           
                <FlightsList />
            </Content>
        </Container>
    )
}

export default Dashboard