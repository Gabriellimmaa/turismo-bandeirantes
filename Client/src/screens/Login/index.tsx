import './styles.css'

export default function Login() {
  return (
    <>
      {/* Login template */}
      <section className="sectionLogin">
        <div className="title-style-1">
          <h1>Login</h1>
          <h2>Faça seu login para continuar</h2>
        </div>
        <form className="login">
          <label htmlFor="email">E-mail:</label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Digite o nome da email"
          />{' '}
          <label htmlFor="senha">Senha:</label>
          <input
            type="text"
            id="senha"
            name="senha"
            placeholder="Digite seu senha"
          />
          <button className="enviar">Logar</button>
        </form>
      </section>
    </>
  )
}
