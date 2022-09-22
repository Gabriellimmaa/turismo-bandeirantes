
import Toolbar from '../../components/Toolbar'
import { optionAgenda } from './optionData'
import { listAgenda } from './listAgenda'
import './styles.css'
import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { CardAgenda } from '../../components/CardAgenda'

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

}

export function Agenda() {
  const { t } = useTranslation()
  const [filter, setFilter] = useState<string>('')
  const [agenda, setAgenda] = useState<AgendaProps[]>([])
  const filtro = (childdata: string) => {
    setFilter(childdata)
  }

  useEffect(() => {
    setAgenda(listAgenda)
  }, [])

  return (
    <section id="agenda">
      <div className="title-style-1">
        <h1>{t('paginas.agenda.titulo')}</h1>
        <h2>{t('paginas.agenda.subtitulo')}</h2>
      </div>
      <Toolbar objectList={optionAgenda} filtro={filtro} />

      <div className="grid grid-cols-1 gap-5 justify-items-center mt-6">
        {
          listAgenda.map((item) => {
            return (
              <CardAgenda
                key={item.id}
                titulo={item.titulo}
                descricao={item.descricao}
                data={item.data}
                imagem={item.imagem}
              />
            )
          })
        }
      </div>
    </section>
  )
}
