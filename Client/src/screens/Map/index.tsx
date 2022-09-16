import { useEffect, useState } from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import { Loading } from '../../components/Loading'
import 'leaflet/dist/leaflet.css'
import api from '../../services/api'
import { Link } from 'react-router-dom'

interface HoteisProps {
  id: number
  nome: string
  preco: number
  logo: string
  email: string
  site: string
  telefone: string
  latitude: number
  longitude: number
}

export default function Map() {
  const [hoteis, setHoteis] = useState<HoteisProps[]>()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    api.get('/hoteis').then((response) => {
      setHoteis(response.data.hoteis)
      setLoading(true)
    })
  }, [])

  if (!loading) {
    return <Loading />
  }

  return (
    <>
      <MapContainer
        id="map"
        zoom={15}
        center={[-23.1115914, -50.3749315]}
        scrollWheelZoom={false}
        className="map"
        style={{ height: '100vh', width: '100%', zIndex: 0 }}
      >
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${
            import.meta.env.VITE_MAPBOX_TOKEN
          }`}
        />
        {hoteis?.map((hotel) => {
          return (
            <Marker position={[hotel.latitude, hotel.longitude]} key={hotel.id}>
              <Popup>
                {hotel.nome}
                <br />
                <Link to={`/hotel/detalhe/${hotel.id}`}>Ver mais</Link>
              </Popup>
            </Marker>
          )
        })}
      </MapContainer>
    </>
  )
}
