import { useEffect, useState } from 'react'

import { FaInstagram, FaMapMarkerAlt } from 'react-icons/fa'
import {
  BiMailSend,
  BiMap,
  BiMoney,
  BiPhoneCall,
  BiPlanet,
} from 'react-icons/bi'
import { AiOutlineWhatsApp } from 'react-icons/ai'
import { RiFacebookCircleLine } from 'react-icons/ri'

import { useParams } from 'react-router-dom'
import { Loading } from '../../components/Loading'
import api from '../../services/api'

import './styles.css'
import { CommentsList } from '../../components/Comments/CommentsList'
import { StarRating } from '../../components/StarRating'
import apiLocal from '../../services/apiLocal'
import { CommentsAdd } from '../../components/Comments/CommentsAdd'

import { useTranslation } from 'react-i18next'

interface HoteisProps {
  [key: string]: string | number | undefined
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

export function Hotel() {
  const { id } = useParams()
  const [data, setData] = useState<HoteisProps>()
  const { t } = useTranslation()

  const contatosOption = [
    'whats',
    'insta',
    'face',
    'site',
    'telefone',
    'email',
    'endereco',
  ]
  const [qtdContato, setQtdContatos] = useState<string[]>([])
  const [loading, setLoading] = useState(true)

  const [dataLocal, setDataLocal] = useState<{
    estrelas: number[]
    comentarios: object[]
  }>({ estrelas: [], comentarios: [] })
  const [hover, setHover] = useState(0)

  useEffect(() => {
    setQtdContatos([])
    api.get(`/hoteis/${id}`).then((response) => {
      setData(response.data.hoteis[0])
      setLoading(false)
    })

    apiLocal.get(`hotel/${id}`).then((response) => {
      const maiorValor = Math.max.apply(null, response.data.estrelas)
      const indexMaiorValor = response.data.estrelas.indexOf(maiorValor)
      setHover(indexMaiorValor + 1)
      setDataLocal(response.data)
    })

    for (const x in data) {
      if (data[x] == null && contatosOption.includes(x)) {
        qtdContato.push(x)
      }
    }
  }, [])

  if (loading) {
    return <Loading />
  }

  return (
    <div className="hotel-detail">
      <div className="background-img">
        <img src={data?.logo} alt="" />
      </div>
      <div className="logo-img">
        <img src={data?.logo} alt="" />
      </div>

      <div className="container-detail">
        <div className="title-style-1 mt-5">
          <h1>{data?.nome}</h1>
        </div>
        <section className="info">
          <div className="flex items-center">
            <div>
              {dataLocal.estrelas[0] +
                dataLocal.estrelas[1] +
                dataLocal.estrelas[2] +
                dataLocal.estrelas[3] +
                dataLocal.estrelas[4]}{' '}
              avaliações
            </div>
            <div className="ml-5">
              {dataLocal.comentarios.length} {t('paginas.detail.comentarios')}
            </div>
            <StarRating
              id={id}
              type="hotel"
              dataLocal={dataLocal}
              hover={hover}
              setHover={setHover}
              setDataLocal={setDataLocal}
            />
          </div>
          <div className="mb-10">
            <h3>Descrição:</h3>
            <p className="my-3">{data?.descricao}</p>

            {data?.latitude && data?.longitude && (
              <div className="whitespace-nowrap">
                <a
                  className="google-maps inline-flex items-center"
                  target="_blank"
                  href={`https://www.google.com/maps/dir/?api=1&destination=${data?.latitude},${data?.longitude}`}
                  rel="noreferrer"
                >
                  <FaMapMarkerAlt className="mr-2" size={16} />
                  <span>{t('paginas.detail.googleMaps')}</span>
                </a>
              </div>
            )}
          </div>
          {data?.preco ? (
            <div className="mb-10">
              <h3>{t('paginas.detail.preco')}</h3>
              <p className="flex items-center">
                <BiMoney className="mx-2" size={32} /> R$ {data?.preco}
              </p>
            </div>
          ) : null}

          <div className="mb-10">
            <div
              id="grid"
              className="grid grid-cols-2 lg:gap-x-20 md:gap-10 sm:gap-5"
            >
              <div className="mb-10">
                <h3>{t('paginas.detail.endereco')}</h3>
                {data?.endereco && (
                  <p className="flex items-center">
                    <BiMap size={32} className="mx-2" /> {data?.endereco}
                  </p>
                )}
                <iframe
                  className="mapa"
                  loading="lazy"
                  style={{ width: '100%', height: '200px', border: 0 }}
                  src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyAEM-BKN-O6irIoDU8C-G9OFtPUvgb6bjg&q=${data?.latitude}, ${data?.longitude}`}
                ></iframe>
              </div>
              <div className="contatos">
                <h3>{t('paginas.detail.contatos')}</h3>
                <div
                  className={`my-3 grid ${
                    qtdContato.length / 2 === 0
                      ? 'md:grid-cols-2'
                      : 'md:grid-cols-3'
                  } sm:grid-cols-1 gap-3 justify-items-center`}
                >
                  {data?.telefone && (
                    <p className="flex items-center">
                      <BiPhoneCall size={32} className="mx-2" />{' '}
                      {data?.telefone}
                    </p>
                  )}
                  {data?.whats && (
                    <p className="flex items-center">
                      <AiOutlineWhatsApp size={32} className="mx-2" />
                      <a
                        target="_blank"
                        href={`https://api.whatsapp.com/send?phone=${data?.whats}&text='Olá queria saber mais sobre o ${data?.nome}'`}
                        className="whats"
                        rel="noreferrer"
                      >
                        Whatsapp
                      </a>
                    </p>
                  )}
                  {data?.face && (
                    <p className="flex items-center">
                      <RiFacebookCircleLine size={32} className="mx-2" />{' '}
                      <a target="_blank" href={data?.face} rel="noreferrer">
                        {t('paginas.detail.visitar')} facebook
                      </a>
                    </p>
                  )}
                  {data?.insta && (
                    <p className="flex items-center">
                      <FaInstagram size={32} className="mx-2" />{' '}
                      <a target="_blank" href={data?.insta} rel="noreferrer">
                        {t('paginas.detail.visitar')} instagram
                      </a>
                    </p>
                  )}
                  {data?.site && (
                    <p className="flex items-center">
                      <BiPlanet size={32} className="mx-2" />{' '}
                      <a target="_blank" href={data?.site} rel="noreferrer">
                      {t('paginas.detail.site')}
                      </a>
                    </p>
                  )}
                </div>
                {data?.email && (
                  <div className="grid grid-cols-1 justify-items-center">
                    <div className="flex items-center">
                      <BiMailSend size={32} className="mx-2" />{' '}
                      <p id="icon-email">{data?.email}</p>
                      <a
                        id="text-email"
                        target="_blank"
                        href={data?.site}
                        rel="noreferrer"
                      >
                        {t('paginas.detail.email')}
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <CommentsList comments={dataLocal.comentarios} />
            <CommentsAdd type="hotel" id={data?.id} setInfo={setDataLocal} />
          </div>
        </section>
      </div>
    </div>
  )
}
