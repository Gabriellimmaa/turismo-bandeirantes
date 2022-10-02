import { MdTitle } from 'react-icons/md'
import { BsTextIndentLeft } from 'react-icons/bs'
import { useTranslation } from 'react-i18next'
import './styles.css'
import { Link } from 'react-router-dom'

export default function CadastrarTurismo() {
  const { t } = useTranslation()

  return (
    <>
      <section className="cadastrar-imagem">
        <div className="dashboard-title">
          <h1>Dashboard</h1>
          <div className="flex gap-2 items-center">
            <Link to="/admin/opcoes"> Dashboard</Link> &gt;{' '}
            <Link to="/admin/cadastrar"> Cadastrar</Link> &gt; Álbum{' '}
          </div>
        </div>
        <div className="title-style-1">
          <h1>{t('paginas.dashboard.album.titulo')}</h1>
          <h2></h2>
        </div>
        <form>
          <div>
            <label htmlFor="file" style={{ display: 'block' }}>
              {t('paginas.dashboard.album.imagem')}{' '}
              <span>{t('paginas.dashboard.album.obrigatorio')}</span>
              <input
                type="file"
                id="file"
                name="file"
                className="w-full text-sm text-gray-500 bg-white file:mr-4 file:py-2 file:px-4 file:border-0 file:bg-gray-200 hover:file:bg-gray-400 file:cursor-pointer"
              />
            </label>
          </div>
          <div>
            <span>
              <label htmlFor="titulo">
                <MdTitle /> {t('paginas.dashboard.album.nome')}{' '}
                <span>{t('paginas.dashboard.album.obrigatorio')}</span>{' '}
              </label>
              <input
                type="text"
                id="titulo"
                name="titulo"
                placeholder={t('paginas.dashboard.album.placeHolderNome')}
              />
            </span>
          </div>

          <span>
            <label htmlFor="descricao">
              <BsTextIndentLeft /> {t('paginas.dashboard.album.descricao')}{' '}
              <span>{t('paginas.dashboard.album.obrigatorio')}</span>
            </label>
            <textarea
              id="descricao"
              name="descricao"
              placeholder={t('paginas.dashboard.album.placeHolderDesc')}
            />
          </span>
          <button>{t('paginas.dashboard.album.cadastro')}</button>
        </form>
      </section>
    </>
  )
}
