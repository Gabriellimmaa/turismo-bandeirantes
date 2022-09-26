import { useState, useEffect } from 'react'
import { toast } from 'react-toastify'

export const usePosition = () => {
  const [position, setPosition] = useState({ latitude: '0', longitude: '0' })
  const [error, setError] = useState(null)

  const onChange = (position: any) => {
    setPosition({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
    })
  }
  const onError = (error: any) => {
    setError(error.message)
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

  return { position, error }
}
