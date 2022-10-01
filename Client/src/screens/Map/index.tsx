import { BiSearchAlt2, BiMap, BiMoney, BiPhoneCall } from 'react-icons/bi'
import { TbToolsKitchen } from 'react-icons/tb'

import { useEffect, useState } from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import { Loading } from '../../components/Loading'
import 'leaflet/dist/leaflet.css'
import api from '../../services/api'
import { Link } from 'react-router-dom'
import Leaflet from 'leaflet'

import './styles.css'

import marcadorHotel from '../../assets/marcadores/verde.png'
import marcadorTurismo from '../../assets/marcadores/vermelho.png'
import marcadorRestaurantes from '../../assets/marcadores/azul ciano.png'
import marcadorBares from '../../assets/marcadores/laranja.png'

interface Props {
  id: number
  nome: string
  latitude: number
  longitude: number
  cozinhas?: string
  telefone?: string
  preco?: string
}

export default function Map() {
  const [turismo, setTurismo] = useState<Props[]>([])
  const [restaurantes, setRestaurantes] = useState<Props[]>([])
  const [bares, setBares] = useState<Props[]>([])
  const [hoteis, setHoteis] = useState<Props[]>()
  const [loading, setLoading] = useState(false)

  const hotelIcon = Leaflet.icon({
    iconUrl: marcadorHotel,
    iconSize: [80, 80],
    iconAnchor: [40, 65],
    popupAnchor: [0, -55],
  })

  const turismoIcon = Leaflet.icon({
    iconUrl: marcadorTurismo,
    iconSize: [80, 80],
    iconAnchor: [40, 65],
    popupAnchor: [0, -55],
  })

  const restauranteIcon = Leaflet.icon({
    iconUrl: marcadorRestaurantes,
    iconSize: [80, 80],
    iconAnchor: [40, 65],
    popupAnchor: [0, -55],
  })

  const barIcon = Leaflet.icon({
    iconUrl: marcadorBares,
    iconSize: [80, 80],
    iconAnchor: [40, 65],
    popupAnchor: [0, -55],
  })

  useEffect(() => {
    api.get('/atracoes').then((response) => {
      setTurismo(response.data.atracoes)
      loadRestaurantes()
      loadHotel()
      loadBares()
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

  async function loadBares() {
    api.get('/bares').then((response) => {
      setBares(response.data.bares)
    })
  }

  async function loadHotel() {
    api.get('/hoteis').then((response) => {
      setHoteis(response.data.hoteis)
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
        style={{ height: '80vh', width: '100%', zIndex: 0 }}
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
                minWidth={250}
                maxHeight={240}
                className="mapPopup"
              >
                <div className="grid grid-cols-1 content-center w-full">
                  <span>Hotel {hotel.nome}</span>
                  <div className="grid grid-cols-2 gap-4 my-2">
                    <div className="flex items-center text-sm gap-1 justify-center">
                      <BiPhoneCall size={20} />
                      <span className="whitespace-nowrap">
                        {hotel.telefone}
                      </span>
                    </div>
                    <div className="flex items-center text-sm gap-1 justify-center">
                      <BiMoney size={20} />
                      <span className="whitespace-nowrap">{hotel.preco}</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2">
                    <Link
                      to={`/hotel/detalhe/${hotel.id}`}
                      className="flex text-sm items-center justify-center"
                    >
                      <BiSearchAlt2 /> Ver mais
                    </Link>
                    <a
                      href={`https://www.google.com/maps/dir/?api=1&destination=${hotel?.latitude},${hotel?.longitude}`}
                      className="flex text-sm items-center justify-center"
                    >
                      <BiMap /> Abrir rota
                    </a>
                  </div>
                </div>
              </Popup>
            </Marker>
          )
        })}
        {restaurantes?.map((restaurante) => {
          return (
            <Marker
              position={[restaurante.latitude, restaurante.longitude]}
              key={restaurante.id}
              icon={restauranteIcon}
            >
              <Popup
                closeButton={false}
                minWidth={240}
                maxHeight={240}
                className="mapPopup restaurante"
              >
                <div className="grid grid-cols-1 content-center w-full">
                  <span>{restaurante.nome}</span>
                  <div className="grid grid-cols-2 gap-4 my-2">
                    <div className="flex items-center text-sm gap-1 justify-center">
                      <BiPhoneCall size={20} />
                      <span className="whitespace-nowrap">
                        {restaurante.telefone}
                      </span>
                    </div>
                    <div className="flex items-center text-sm gap-1 justify-center">
                      <TbToolsKitchen size={20} />
                      <span className="whitespace-nowrap">
                        {restaurante.cozinhas}
                      </span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2">
                    <Link
                      to={`/restaurante/detalhe/${restaurante.id}`}
                      className="flex text-sm items-center justify-center"
                    >
                      <BiSearchAlt2 /> Ver mais
                    </Link>
                    <a
                      href={`https://www.google.com/maps/dir/?api=1&destination=${restaurante?.latitude},${restaurante?.longitude}`}
                      className="flex text-sm items-center justify-center"
                    >
                      <BiMap /> Abrir rota
                    </a>
                  </div>
                </div>
              </Popup>
            </Marker>
          )
        })}
        {bares?.map((bar) => {
          return (
            <Marker
              position={[bar.latitude, bar.longitude]}
              key={bar.id}
              icon={barIcon}
            >
              <Popup
                closeButton={false}
                minWidth={240}
                maxHeight={240}
                className="mapPopup bar"
              >
                <div className="grid grid-cols-1 content-center w-full">
                  <span>{bar.nome}</span>
                  <div className="grid grid-cols-2 gap-4 my-2">
                    <div className="flex items-center text-sm gap-1 justify-center">
                      <BiPhoneCall size={20} />
                      <span className="whitespace-nowrap">{bar.telefone}</span>
                    </div>
                    <div className="flex items-center text-sm gap-1 justify-center">
                      <TbToolsKitchen size={20} />
                      <span className="whitespace-nowrap">{bar.cozinhas}</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2">
                    <Link
                      to={`/bar/detalhe/${bar.id}`}
                      className="flex text-sm items-center justify-center"
                    >
                      <BiSearchAlt2 /> Ver mais
                    </Link>
                    <a
                      href={`https://www.google.com/maps/dir/?api=1&destination=${bar?.latitude},${bar?.longitude}`}
                      className="flex text-sm items-center justify-center"
                    >
                      <BiMap /> Abrir rota
                    </a>
                  </div>
                </div>
              </Popup>
            </Marker>
          )
        })}
        {turismo?.map((atracao) => {
          return (
            <Marker
              position={[atracao.latitude, atracao.longitude]}
              key={atracao.id}
              icon={turismoIcon}
            >
              <Popup
                closeButton={false}
                minWidth={240}
                maxHeight={240}
                className="mapPopup turismo"
              >
                <div className="grid grid-cols-1 content-center w-full">
                  <span className="mb-2">{atracao.nome}</span>
                  <div className="grid grid-cols-2">
                    <Link
                      to={`/turismo/detalhe/${atracao.id}`}
                      className="flex text-sm items-center justify-center"
                    >
                      <BiSearchAlt2 /> Ver mais
                    </Link>
                    <a
                      href={`https://www.google.com/maps/dir/?api=1&destination=${atracao?.latitude},${atracao?.longitude}`}
                      className="flex text-sm items-center justify-center"
                    >
                      <BiMap /> Abrir rota
                    </a>
                  </div>
                </div>
              </Popup>
            </Marker>
          )
        })}
      </MapContainer>
    </>
  )
}
