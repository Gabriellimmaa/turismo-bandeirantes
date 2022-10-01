import {
  BiMapPin,
  BiCalendar,
  BiRestaurant,
  BiHotel,
  BiDrink,
  BiPhotoAlbum,
} from 'react-icons/bi'
import './styles.css'
import { Link } from 'react-router-dom'

import { useTranslation } from 'react-i18next'

export default function Cadastrar() {
  const { t } = useTranslation()
  return (
    <section>
      <div className="dashboard-title">
        <h1>Dashboard</h1>
        <div className="flex gap-2 items-center">
          <Link to="/admin/opcoes"> Dashboard</Link> &gt;{' '}
          {t('paginas.dashboard.cadastrar.titulo')}{' '}
        </div>
      </div>
      <h1 className="text-center">{t('paginas.dashboard.cadastrar.opcoes')}</h1>
      <div className="grid grid-cols-1 cadastrar gap-3 mb-10">
        <Link to="/admin/cadastrar-turismo">
          <BiMapPin size={40} /> {t('paginas.dashboard.cadastrar.turismo')}
        </Link>
        <Link to="/admin/cadastrar-restaurante">
          <BiRestaurant size={40} />{' '}
          {t('paginas.dashboard.cadastrar.restaurante')}
        </Link>
        <Link to="/admin/cadastrar-bar">
          <BiDrink size={40} /> {t('paginas.dashboard.cadastrar.bares')}
        </Link>
        <Link to="/admin/cadastrar-hotel">
          <BiHotel size={40} /> {t('paginas.dashboard.cadastrar.hotel')}
        </Link>
        <Link to="/admin/cadastrar-agenda">
          <BiCalendar size={40} /> {t('paginas.dashboard.cadastrar.agenda')}
        </Link>
        <Link to="/admin/cadastrar-album">
          <BiPhotoAlbum size={40} /> {t('paginas.dashboard.cadastrar.album')}
        </Link>
      </div>
    </section>
  )
}
