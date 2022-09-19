import './styles.css'
import { AiFillPhone, AiFillMessage } from 'react-icons/ai'
import { BsFillPinMapFill } from 'react-icons/bs'

export default function Contato() {
  return (
    <section className="contato">
      <h1>Entre em contato conosco</h1>
      <div className="pagina">
        <div className="left">
          <div className="Endereço ">
            <h2> Endereço {<BsFillPinMapFill size={30} />}</h2>
            <iframe
              className="mapa"
              src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAEM-BKN-O6irIoDU8C-G9OFtPUvgb6bjg&q=-23°06'22.9, -50°22'18.7"
            ></iframe>
          </div>

          <div className="telefone">
            <h2>Telefone {<AiFillPhone size={30} />}</h2>

            <p>(43) 3542-4525</p>
          </div>
        </div>
        <div className="rigth">
          <div className="entreemcontato">
            <h2>Envie-nos uma Mensagem {<AiFillMessage size={30} />}</h2>
            <p>Nome:</p>
            <textarea className="caixatexto"></textarea>
            <p>E-mail:</p>
            <textarea className="caixatexto"></textarea>
            <p>Contato:</p>
            <textarea className="caixatexto"></textarea>
            <p>Sugestão:</p>
            <textarea className="caixatexto1"></textarea>
          </div>
        </div>
      </div>
    </section>
  )
}
