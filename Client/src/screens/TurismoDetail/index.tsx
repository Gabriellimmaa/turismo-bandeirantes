import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import api from '../../services/api'
import './styles.css'

import { Loading } from '../../components/Loading'

import { FaInstagram } from 'react-icons/fa'
import { BiMailSend, BiMap, BiMoney, BiPhoneCall, BiPlanet } from 'react-icons/bi'
import { AiOutlineWhatsApp } from 'react-icons/ai'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { RiFacebookCircleLine } from 'react-icons/ri'

interface TurismoDetailProps {
  [key: string]: string | number | undefined;
  id: number
  nome: string
  descricao: string
  preco: number
  logo: string
  maps: string
  ativo: number
  longitude: number
  latitude: number
  created_at: string
  updated_at: string
  email?: string
  endereco?: string
  whats?: string
  insta?: string
  face?: string
  site?: string
  telefone?: string
}

export function TurismoDetail() {
  const { id } = useParams()
  const [data, setData] = useState<TurismoDetailProps>()
  const contatosOption = ["whats", "insta", "face", "site", "telefone", "email"]
  const [qtdContato, setQtdContatos] = useState<string[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setQtdContatos([])
    api.get(`/atracoes/${id}`).then((response) => {
      setData(response.data.atracoes[0])
      setLoading(false)
    })
    for (let x in data) {
      if (data[x] == null && contatosOption.includes(x)) {
        qtdContato.push(x)
      }
    }
  }, [])

  if (loading) {
    return <Loading />
  }

  return (
    <div className='turismo-detail'>
      <div className="background-img">
        <img src={data?.logo} alt="" />
      </div>
      <div className="logo-img">
        <img src={data?.logo} alt="" />
      </div>

      <div className="container-detail">
        <div className='title-style-1 mt-5'>
          <h1>{data?.nome}</h1>
        </div>
        <section className="info">
          <div className='mb-10'>
            <h3>Descrição:</h3>
            <p className='my-3'>{data?.descricao}</p>

            {data?.latitude && data?.longitude && (
              <div className='whitespace-nowrap'>
                <a
                  className='google-maps inline-flex items-center'
                  target="_blank"
                  href={`https://www.google.com/maps/dir/?api=1&destination=${data?.latitude},${data?.longitude}`}
                  rel="noreferrer"
                >
                  <FaMapMarkerAlt className='mr-2' size={16} />
                  <span>Abrir no Google Maps</span>
                </a>
              </div>
            )}
          </div>
          {data?.preco ?
            <div className='mb-10'>
              <h3>Preço:</h3>
              <p className='flex items-center'><BiMoney className='mx-2' size={32} /> R$ {data?.preco}</p>
            </div>
            : null}

          <div className='mb-10'>
            <h3>Endereço:</h3>
            {data?.endereco && <p className='flex items-center'><BiMap size={32} className="mx-2" /> {data?.endereco}</p>}
          </div>
          <div className="contatos">
            <strong className='text-center'>Contatos</strong>
            <div className={`grid ${qtdContato.length / 2 == 0 ? "md:grid-cols-2" : "md:grid-cols-3"} sm:grid-cols-1 gap-5 justify-items-center`}>
              {data?.email && <p className='flex items-center'><BiMailSend size={32} className="mx-2" /> {data?.email}</p>}
              {data?.telefone && <p className='flex items-center'><BiPhoneCall size={32} className="mx-2" /> {data?.telefone}</p>}
              {data?.whats && <p className='flex items-center'><AiOutlineWhatsApp size={32} className="mx-2" />
                <a
                  target="_blank"
                  href={`https://api.whatsapp.com/send?phone=${data?.whats}&text='Olá queria saber mais sobre o ${data?.nome}'`}
                  className="whats"
                >Entrar em contato via whatsapp</a>
              </p>}
              {data?.face && <p className='flex items-center'><RiFacebookCircleLine size={32} className="mx-2" /> <a target="_blank" href={data?.face}>Visitar facebook</a></p>}
              {data?.insta && <p className='flex items-center'><FaInstagram size={32} className="mx-2" /> <a target="_blank" href={data?.insta}>Visitar instagram</a></p>}
              {data?.site && <p className='flex items-center'><BiPlanet size={32} className="mx-2" /> <a target="_blank" href={data?.site}>Visitar nosso site</a></p>}
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
