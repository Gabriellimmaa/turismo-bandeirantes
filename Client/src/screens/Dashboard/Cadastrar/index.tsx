import { BiMapPin, BiCalendar, BiRestaurant, BiHotel, BiDrink, BiPhotoAlbum } from 'react-icons/bi';
import './styles.css';
import { Link } from 'react-router-dom'
import dashboard01 from "/src/assets/img/dashboard/img1.svg";
import dashboard02 from '/src/assets/img/dashboard/img2.svg';
import dashboard03 from '/src/assets/img/dashboard/img3.svg';

export default function Cadastrar() {
  return (
    <section>
      <div className="dashboard-title">
        <h1>Dashboard</h1>
        <div className='flex gap-2 items-center'><Link to="/admin/opcoes"> Dashboard</Link> &gt; Cadastrar </div>
      </div>
      <h1 className='text-center'>Selecione uma opção</h1>
      <div className='grid grid-cols-1 cadastrar gap-3 mb-10'>
        <Link to="/admin/cadastrar-turismo"><BiMapPin size={40} /> Cadastrar Turismo</Link>
        <Link to="/admin/cadastrar-restaurante"><BiRestaurant size={40} /> Cadastrar Restaurante</Link>
        <Link to="/admin/cadastrar-bar"><BiDrink size={40} /> Cadastrar Bar</Link>
        <Link to="/admin/cadastrar-hotel"><BiHotel size={40} /> Cadastrar Hotel</Link>
        <Link to="/admin/cadastrar-agenda"><BiCalendar size={40} /> Cadastrar Agenda</Link>
        <Link to="/admin/cadastrar-album"><BiPhotoAlbum size={40} /> Cadastrar Álbum</Link>
      </div>
    </section>
  )

}