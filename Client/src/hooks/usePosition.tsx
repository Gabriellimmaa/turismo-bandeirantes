import { useState, useEffect } from 'react'
import { toast } from 'react-toastify'

export const usePosition = () => {
  const [position, setPosition] = useState({})
  const [error, setError] = useState(null)

  const onChange = (coords: any) => {
    setPosition({
      latitude: coords.latitude,
      longitude: coords.longitude,
    })
  }
  const onError = (error: any) => {
    toast.error(
      'Geolocalização desativada, por favor ative para melhorar sua experiência',
    )
  }
  useEffect(() => {
    const geo = navigator.geolocation
    if (!geo) {
      toast.error('Geolocalização não é suportada por este navegador')
      return
    }
    const watcher = geo.watchPosition(onChange, onError)
    return () => geo.clearWatch(watcher)
  }, [])
  return { ...position, error }
}
