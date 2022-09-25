import './styles.css';
import { Link } from 'react-router-dom'
import dashboard01 from "/src/assets/img/dashboard/img1.svg";
import dashboard02 from '/src/assets/img/dashboard/img2.svg';
import dashboard03 from '/src/assets/img/dashboard/img3.svg';

export default function Opcoes() {
  return (
    <section className="dashboard-body">
      <img id="quadrado-01" src="/src/assets/img/dashboard/quadrado0.png" alt=""></img>
      <img id="quadrado-02" src="/src/assets/img/dashboard/quadrado1.png" alt=""></img>
      <div className="dashboard-title">
        <h1>Dashboard</h1>
        <div className='flex gap-2 items-center'> Dashboard </div>
      </div>
      <div className="dashboard-content">
        <div className="dashboard-cards">
          <Link to='/admin/cadastrar'>
            <div className="dashboard-cards-content">
              <img src={dashboard01} alt="" />
              <h1>Cadastro</h1>
              <p>Cadastrar conteúdos</p>
            </div>
          </Link>
        </div>
        <div className="dashboard-cards">
          <Link to="#">
            <div className="dashboard-cards-content">
              <img src={dashboard02} alt="" />
              <h1>Editar</h1>
              <p>Editar conteúdos</p>
            </div>
          </Link>
        </div>
        <div className="dashboard-cards">
          <Link to="#">
            <div className="dashboard-cards-content">
              <img src={dashboard03} alt="" />
              <h1>Deletar</h1>
              <p>Deletar conteúdos</p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  )

}