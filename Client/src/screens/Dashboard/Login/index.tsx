import { useState } from 'react'
import api from '../../../services/api'
import './styles.css'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  async function handleLogin(e: any) {
    navigate('/admin/opcoes')
    e.preventDefault()
    const r = await api.post('/login', { email, password })
    console.log(r)
  }

  return (
    <>
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
            onChange={(e) => setEmail(e.target.value)}
          />{' '}
          <label htmlFor="senha">Senha:</label>
          <input
            type="password"
            id="senha"
            name="senha"
            placeholder="Digite seu senha"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="enviar" onClick={(e) => handleLogin(e)}>
            Logar
          </button>
        </form>
      </section>
    </>
  )
}
