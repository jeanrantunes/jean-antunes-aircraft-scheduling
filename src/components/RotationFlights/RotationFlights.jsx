import {useState, useEffect} from 'react';
import {api} from 'services/api'

const AircraftsList = ({aircraftSelected}) => {
    const [flights, setFlights] = useState([])

    useEffect(() => {
        const getFlights = async () => {
            try {
                const { data } = await api.get('/flights')
                setFlights(data.data)
            } catch (err) {
                alert('Error flights endpoint.', err)
            }
        }
        getFlights()
    }, []);

    return (
        <div>
            {!!aircraftSelected?.ident && <span>Rotation {aircraftSelected.ident}</span>}
            <ul>
                {flights.map(flight => (
                    <li key={flight.id}>{flight.id}</li>
                ))}
            </ul>
        </div>
    )
}

export default AircraftsList