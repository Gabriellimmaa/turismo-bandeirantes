import { MdTitle } from 'react-icons/md'
import {
  BiCategoryAlt,
  BiMapPin,
  BiPlanet,
  BiPhoneCall,
  BiMailSend,
} from 'react-icons/bi'
import { BsTextIndentLeft } from 'react-icons/bs'

import { useTranslation } from 'react-i18next'

import './styles.css'
import { Link } from 'react-router-dom'

export default function CadastrarAgenda() {
  const { t } = useTranslation()
  return (
    <>
      <section className="cadastrar-turismo">
        <div className="dashboard-title">
          <h1>Dashboard</h1>
          <div className="flex gap-2 items-center">
            <Link to="/admin/opcoes"> Dashboard</Link> &gt;{' '}
            <Link to="/admin/cadastrar"> Cadastrar</Link> &gt; Agenda{' '}
          </div>
        </div>
        <div className="title-style-1">
          <h1>{t('paginas.dashboard.agenda.titulo')}</h1>
          <h2></h2>
        </div>
        <form>
          <div className="grid-cols-1 md:grid-cols-2">
            <span>
              <label htmlFor="titulo">
                <MdTitle /> {t('paginas.dashboard.agenda.tituloTela')}{' '}
                <span>{t('paginas.dashboard.agenda.obrigatorio')}</span>{' '}
              </label>
              <input
                type="text"
                id="titulo"
                name="titulo"
                placeholder={t('paginas.dashboard.agenda.placeHolderTitulo')}
              />
            </span>
            <span>
              <label htmlFor="data">
                <BiCategoryAlt /> {t('paginas.dashboard.agenda.data')}{' '}
                <span>{t('paginas.dashboard.agenda.obrigatorio')}</span>
              </label>
              <input
                type="text"
                id="data"
                name="data"
                placeholder={t('paginas.dashboard.agenda.placeHolderTelefone')}
              />
            </span>
          </div>

          <span>
            <label htmlFor="descricao">
              <BsTextIndentLeft /> {t('paginas.dashboard.agenda.descricao')}{' '}
              <span>{t('paginas.dashboard.agenda.obrigatorio')}</span>
            </label>
            <textarea
              id="descricao"
              name="descricao"
              placeholder={t('paginas.dashboard.agenda.placeHolderDesc')}
            />
          </span>

          <span>
            <label htmlFor="endereco">
              <BiMapPin /> {t('paginas.dashboard.agenda.endereco')}{' '}
              <span>{t('paginas.dashboard.agenda.obrigatorio')}</span>
            </label>
            <input
              type="text"
              id="endereco"
              name="endereco"
              placeholder={t('paginas.dashboard.agenda.placeHolderEndereco')}
            />
          </span>

          <div className="grid-cols-1 md:grid-cols-3">
            <span>
              <label htmlFor="email">
                <BiMailSend /> {t('paginas.dashboard.agenda.email')}
              </label>
              <input
                type="text"
                id="email"
                name="email"
                placeholder={t('paginas.dashboard.agenda.placeHolderEmail')}
              />
            </span>
            <span>
              <label htmlFor="site">
                <BiPlanet />
                {t('paginas.dashboard.agenda.site')}
              </label>
              <input
                type="text"
                id="site"
                name="site"
                placeholder={t('paginas.dashboard.agenda.placeHolderSite')}
              />
            </span>
            <span>
              <label htmlFor="telefone">
                <BiPhoneCall /> {t('paginas.dashboard.agenda.telefone')}
              </label>
              <input
                type="text"
                id="telefone"
                name="telefone"
                placeholder={t('paginas.dashboard.agenda.placeHolderTelefone')}
              />
            </span>
          </div>

          <label htmlFor="file" style={{ display: 'block' }}>
            {t('paginas.dashboard.agenda.logo')}
            <span>{t('paginas.dashboard.agenda.obrigatorio')}</span>
            <input
              type="file"
              id="file"
              name="file"
              className="w-full text-sm text-gray-500 bg-white file:mr-4 file:py-2 file:px-4 file:border-0 file:bg-gray-200 hover:file:bg-gray-400 file:cursor-pointer"
            />
          </label>

          <button>{t('paginas.dashboard.agenda.cadastro')}</button>
        </form>
      </section>
    </>
  )
}
