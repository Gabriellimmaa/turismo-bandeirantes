import { GrFormClose } from 'react-icons/gr'
import {
  BiCalendar,
  BiMapPin,
  BiPhoneCall,
  BiPlanet,
  BiMailSend,
} from 'react-icons/bi'
import { BsTextIndentLeft } from 'react-icons/bs'

import Toolbar from '../../components/Toolbar'
import { optionAgenda } from './optionData'
import { listAgenda } from './listAgenda'
import './styles.css'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { CardAgenda } from '../../components/CardAgenda'
import Modal from '../../components/Modal'

interface AgendaProps {
  id: number | string
  titulo: string
  descricao: string
  data: string
  endereco: string
  website: string
  telefone: string
  email: string
  imagem: string
  categoria?: string
}

export function Agenda() {
  const { t } = useTranslation()
  const [filter, setFilter] = useState<string>('')
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [contentenData, setContentenData] = useState<AgendaProps>()

  const handleToggleOpenModal = () => {
    setModalIsOpen(!modalIsOpen)
  }

  const addDataToModal = (data: any) => {
    setContentenData(data)
    handleToggleOpenModal()
  }

  const filtro = (childdata: string) => {
    setFilter(childdata)
  }

  return (
    <section id="agenda">
      <div className="title-style-1">
        <h1>{t('paginas.agenda.titulo')}</h1>
        <h2>{t('paginas.agenda.subtitulo')}</h2>
      </div>
      <Toolbar objectList={optionAgenda} filtro={filtro} />

      <div className="grid grid-cols-1 gap-5 justify-items-center mt-6">
        {listAgenda.map((item) => {
          if (filter === item.categoria) {
            return (
              <CardAgenda
                key={item.id}
                titulo={item.titulo}
                descricao={item.descricao}
                data={item.data}
                imagem={item.imagem}
                onClick={() => addDataToModal(item)}
              />
            )
          } else if (filter === 'all' || filter === '') {
            return (
              <CardAgenda
                key={item.id}
                titulo={item.titulo}
                descricao={item.descricao}
                data={item.data}
                imagem={item.imagem}
                onClick={() => addDataToModal(item)}
              />
            )
          }
          return null
        })}
      </div>

      <Modal isOpen={modalIsOpen} setIsOpen={handleToggleOpenModal}>
        <h3 className="mb-2">{contentenData?.titulo}</h3>
        <button
          type="button"
          onClick={handleToggleOpenModal}
          className="absolute right-5 top-5"
        >
          <GrFormClose size={20} />
        </button>
        <div className="py-3 grid items-center border-b-2">
          <label className="flex gap-2 items-center font-bold">
            <BiCalendar /> Data:
          </label>
          <span>{contentenData?.data}</span>
        </div>
        <div className="py-3 grid items-center border-b-2">
          <label className="flex gap-2 items-center font-bold">
            <BsTextIndentLeft /> Descrição:
          </label>
          <span>{contentenData?.descricao}</span>
        </div>
        {contentenData?.endereco && (
          <div className="py-3 grid items-center border-b-2">
            <label className="flex gap-2 items-center font-bold">
              <BiMapPin /> Endereço:
            </label>
            <span>{contentenData?.endereco}</span>
          </div>
        )}

        {contentenData?.email && (
          <div className="py-3 flex items-center gap-2 border-b-2">
            <BiMailSend /> {contentenData?.email}
          </div>
        )}
        {contentenData?.telefone && (
          <div className="py-3 grid items-center border-b-2">
            <label className="flex gap-2 items-center font-bold">
              <BiPhoneCall /> Telefone:
            </label>
            <span>{contentenData?.telefone}</span>
          </div>
        )}
        {contentenData?.website && (
          <div className="py-3 flex items-center gap-2 border-b-2">
            <BiPlanet /> {contentenData?.website}
          </div>
        )}
      </Modal>
    </section>
  )
}
