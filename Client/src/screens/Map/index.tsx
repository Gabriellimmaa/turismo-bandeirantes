import { useEffect, useState } from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import { Loading } from '../../components/Loading'
import 'leaflet/dist/leaflet.css'
import api from '../../services/api'
import { Link } from 'react-router-dom'
import Leaflet from 'leaflet'

import './styles.css'
import { FaArrowRight } from 'react-icons/fa'

import marcadorHotel from '../../assets/marcadores/verde.png'

interface Props {
  id: number
  nome: string
  latitude: number
  longitude: number
}

export default function Map() {
  const [restaurantes, setRestaurantes] = useState<Props[]>([])
  const [hoteis, setHoteis] = useState<Props[]>()
  const [loading, setLoading] = useState(false)

  const hotelIcon = Leaflet.icon({
    iconUrl: marcadorHotel,
    iconSize: [58, 58],
  })

  useEffect(() => {
    api.get('/hoteis').then((response) => {
      setHoteis(response.data.hoteis)
      loadRestaurantes()
      setLoading(true)
    })
  }, [])

  if (!loading) {
    return <Loading />
  }

  async function loadRestaurantes() {
    api.get('/restaurantes').then((response) => {
      setRestaurantes(response.data.restaurantes)
    })
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
            <Marker
              position={[hotel.latitude, hotel.longitude]}
              key={hotel.id}
              icon={hotelIcon}
            >
              <Popup
                closeButton={false}
                minWidth={240}
                maxHeight={240}
                className="mapPopup"
              >
                Hotel {hotel.nome}
                <br />
                <Link to={`/hotel/detalhe/${hotel.id}`}>
                  <FaArrowRight color="#FFF" />
                </Link>
              </Popup>
            </Marker>
          )
        })}
        {restaurantes?.map((restaurante) => {
          return (
            <Marker
              position={[restaurante.latitude, restaurante.longitude]}
              key={restaurante.id}
              icon={hotelIcon}
            >
              <Popup
                closeButton={false}
                minWidth={240}
                maxHeight={240}
                className="mapPopup"
              >
                Restaurante {restaurante.nome}
                <br />
                <Link to={`/restaurante/detalhe/${restaurante.id}`}>
                  <FaArrowRight color="#FFF" />
                </Link>
              </Popup>
            </Marker>
          )
        })}
      </MapContainer>
    </>
  )
}
