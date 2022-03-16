import {useState, useEffect} from 'react';
import {api} from 'services/api'
const AircraftsList = ({setAircraftSelected}) => {
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
        <div>
            <ul>
                {aircrafts.map(aircraft => (
                    <li key={aircraft.ident}>
                        <button onClick={() => setAircraftSelected(aircraft)}>
                            {aircraft.ident}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default AircraftsList