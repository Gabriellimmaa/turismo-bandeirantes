import './styles.css'
import { Link } from 'react-router-dom'
import dashboard01 from '../../../aassets/dashboard/img1.svg'
import dashboard02 from '../../../aassets/dashboard/img2.svg'
import dashboard03 from '../../../aassets/dashboard/img3.svg'
import { useTranslation } from 'react-i18next'
export default function Opcoes() {
  const { t } = useTranslation()
  return (
    <section className="dashboard-body">
      <img
        id="quadrado-01"
        src="/src/assets/img/dashboard/quadrado0.png"
        alt=""
      ></img>
      <img
        id="quadrado-02"
        src="/src/assets/img/dashboard/quadrado1.png"
        alt=""
      ></img>
      <div className="dashboard-title">
        <h1>Dashboard</h1>
        <div className="flex gap-2 items-center"> Dashboard </div>
      </div>
      <div className="dashboard-content">
        <div className="dashboard-cards">
          <Link to="/admin/cadastrar">
            <div className="dashboard-cards-content">
              <img src={dashboard01} alt="" />
              <h1>{t('paginas.dashboard.opcoes.cadastrar')}</h1>
              <p>{t('paginas.dashboard.opcoes.desc1')}</p>
            </div>
          </Link>
        </div>
        <div className="dashboard-cards">
          <Link to="#">
            <div className="dashboard-cards-content">
              <img src={dashboard02} alt="" />
              <h1>{t('paginas.dashboard.opcoes.editar')}</h1>
              <p>{t('paginas.dashboard.opcoes.desc2')}</p>
            </div>
          </Link>
        </div>
        <div className="dashboard-cards">
          <Link to="#">
            <div className="dashboard-cards-content">
              <img src={dashboard03} alt="" />
              <h1>{t('paginas.dashboard.opcoes.deletar')}</h1>
              <p>{t('paginas.dashboard.opcoes.desc3')}</p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}
