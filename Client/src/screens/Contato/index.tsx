import './styles.css'

export default function Contato() {
  return (
    <section className="contato">
      <h1>Entre em contato conosco</h1>
      <div className="pagina">
        <div className="cartao">
          <h3>Endereço</h3>
          <iframe
            className="mapa"
            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAEM-BKN-O6irIoDU8C-G9OFtPUvgb6bjg&q=-23°06'22.9, -50°22'18.7"
          ></iframe>
          <h3>Telefone</h3>
          <p className="title">(43)3542-4525</p>
          <p>Prefeitura Municipal de Bandeirantes</p>
          <p>
            <button className="hover:bg-gray-700 transition-colors hover:transition-colors">
              Entrar em contato
            </button>
          </p>
        </div>
        <div className="rigth">
          <div className="entreemcontato">
            <h3>Envie-nos uma Mensagem </h3>
            <form action="action_page.php">
              <label htmlFor="nome">Nome:</label>
              <input
                type="text"
                id="nome"
                name="nome"
                placeholder="Seu nome..."
              />
              <label htmlFor="telefone">Telefone:</label>
              <input
                type="text"
                id="Telefone"
                name="telefone"
                placeholder="Seu telefone..."
              />
              <label htmlFor="email">E-Mail:</label>
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Seu e-mail..."
              />
              <label htmlFor="tsugest">Tipo da sugestão:</label>
              <select id="tsugest" name="tsugest">
                <option value="turismo">Turismo</option>
                <option value="restaurante">Restaurante</option>
                <option value="hotéis">Hotéis</option>
                <option value="agenda">Agenda</option>
                <option value="outros">Outros...</option>
              </select>
              <label htmlFor="sugestão">Sugestão:</label>
              <textarea
                id="sugestão"
                name="sugestão"
                placeholder="Escreva aqui sua sujestão..."
                style={{ height: '200px' }}
                defaultValue={''}
              />
              <input
                type="enviar"
                defaultValue="Enviar"
                className="hover:bg-gray-700 transition-colors hover:transition-colors"
              />
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
