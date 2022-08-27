import { useEffect, useState } from 'react'
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { useParams } from 'react-router-dom'
import { Loading } from '../../components/Loading'
import api from '../../services/api'

import './styles.css'

interface HoteisProps {
  id: number
  nome: string
  preco: number
  logo: string
  descricao: string
  email: string
  site: string
  telefone: string
  endereco: string
  maps: string
  whats: string
  insta: string
  face: string
  aitvo: number
  created_at: string
  updated_at: string
}

export function Hotel() {
  const { id } = useParams()
  const [hotel, setHotel] = useState<HoteisProps>()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    api.get(`/hoteis/${id}`).then((response) => {
      setHotel(response.data.hoteis[0])
      setLoading(false)
    })
  }, [])

  if (loading) {
    return <Loading />
  }

  return (
    <div>
      <div className="heroHotel">
        <img src={hotel?.logo} alt="" />
      </div>
      <div className="heroBackgroundHotel">
        <img src={hotel?.logo} alt="" />
      </div>

      <div className="containerHotel">
        <h1>{hotel?.nome}</h1>
        <div className="containerHotelInfo">
          <strong className="uppercase">seja bem vindo</strong>
          <div className="infosContainer">
            <p>{hotel?.descricao}</p>
            <div className="contatosContainer">
              <strong>Contatos</strong>
              <div className="flex-col leading-3 mt-5">
                <p>{hotel?.endereco}</p>
                <p>{hotel?.email}</p>
                <p>{hotel?.telefone}</p>
                <p>{hotel?.whats}</p>
                <div className="redesIconHotel gap-5">
                  {hotel?.face && (
                    <a href={hotel?.face} className="face">
                      <FaFacebook size={28} />
                    </a>
                  )}
                  {hotel?.insta && (
                    <a href={hotel?.insta} className="insta">
                      <FaInstagram size={28} />
                    </a>
                  )}
                  {hotel?.whats && (
                    <a
                      href={`https://api.whatsapp.com/send?phone=${hotel?.whats}&text='Olá queria saber mais sobre o ${hotel?.nome}'`}
                      className="whats"
                    >
                      <FaWhatsapp size={28} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
