import { useState } from 'react'
import { MapContainer, TileLayer } from 'react-leaflet'
import { Loading } from '../../components/Loading'
import 'leaflet/dist/leaflet.css'

export default function Map() {
  //  const position = [-23.112742, -50.3821639]
  const [loading, setLoading] = useState(true)

  setTimeout(() => {
    setLoading(false)
  }, 2000)

  if (loading) return <Loading />

  return (
    <>
      <MapContainer
        id="map"
        zoom={15}
        center={[-23.112742, -50.3821639]}
        scrollWheelZoom={false}
        className="map"
        style={{ height: '100vh', width: '100%', zIndex: 0 }}
      >
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${
            import.meta.env.VITE_MAPBOX_TOKEN
          }`}
        />
      </MapContainer>
    </>
  )
}
