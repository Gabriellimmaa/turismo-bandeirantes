import './styles.css'
import { IoIosSend } from 'react-icons/io'
import { toast } from 'react-toastify'
import { useState } from 'react'
import axios from 'axios'

export default function Contato() {
  const [company, setCompany] = useState('')
  const [name, setName] = useState('')
  const [cellphone, setCellphone] = useState('')
  const [email, setEmail] = useState('')
  const [category, setCategory] = useState('')
  const [address, setAddress] = useState('')

  function handleSubmit() {
    if (
      company === '' ||
      name === '' ||
      cellphone === '' ||
      email === '' ||
      category === '' ||
      address === ''
    ) {
      toast.error('Preencha todos os campos')
      return
    }
    const newDate = new Date()
    const date =
      newDate.getDate() + '/' + newDate.getMonth() + '/' + newDate.getFullYear()
    axios.post(
      'https://discord.com/api/webhooks/1021689784973926480/ZM-3vpkLj_AdQ1oh8uenlo-WZw--J3-B8HwatEz3WcWJu_353TRYYW-rWHnmFBxWejGf',
      {
        content: '',
        embeds: [
          {
            title: 'Cadastrar nova empresa',
            description: `**Empresa:** ${company}\n**Nome:** ${name}\n**Celular:** ${cellphone}\n**Email:** ${email}\n**Categoria:** ${category}\n**Endereço:** ${address}`,
            footer: {
              text: date,
            },
          },
        ],
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )

    toast.success('Obrigado por entrar em contato conosco!')
  }

  return (
    <section className="contato">
      <div className="title-style-1">
        <h1>Contato</h1>
        <h2>Cadastre sua empresa também</h2>
      </div>
      <div className="pagina">
        <div className="cartao">
          <h3>Endereço</h3>
          <iframe
            className="mapa"
            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAEM-BKN-O6irIoDU8C-G9OFtPUvgb6bjg&q=-23°06'22.9, -50°22'18.7"
          ></iframe>
          <h3>Telefone</h3>
          <p className="mb-2">Prefeitura Municipal de Bandeirantes</p>
          <p>(43)3542-4525</p>
        </div>
        <div className="rigth">
          <div className="entreemcontato">
            <h3>Cadastre aqui sua empresa</h3>
            <form>
              <label htmlFor="nome">Nome da empresa:</label>
              <input
                type="text"
                id="empresa"
                name="empresa"
                placeholder="Digite o nome da empresa"
                onChange={(event) => setCompany(event.target.value)}
              />
              <div className="grid grid-cols-2 gap-4">
                <span>
                  <label htmlFor="nome">Nome para contato:</label>
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    placeholder="Digite seu nome para contato"
                    onChange={(event) => setName(event.target.value)}
                  />
                </span>
                <span>
                  <label htmlFor="telefone">Telefone:</label>
                  <input
                    type="text"
                    id="telefone"
                    name="telefone"
                    placeholder="Digite seu telefone"
                    onChange={(event) => setCellphone(event.target.value)}
                  />
                </span>
              </div>
              <label htmlFor="email">E-Mail:</label>
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Digite seu email"
                onChange={(event) => setEmail(event.target.value)}
              />

              <label htmlFor="tsugest">Categoria da empresa:</label>
              <select
                id="tsugest"
                name="tsugest"
                onChange={(event) => setCategory(event.target.value)}
              >
                <option value="turismo">Turismo</option>
                <option value="restaurante">Restaurante</option>
                <option value="bar">Bar</option>
                <option value="hotel">Hotel</option>
                <option value="outros">Outros...</option>
              </select>
              <label htmlFor="sugestão">Endereço completo:</label>
              <textarea
                id="endereco"
                name="endereco"
                placeholder="Digite o endereço completo da empresa"
                style={{ height: '100px' }}
                defaultValue={''}
                onChange={(event) => setAddress(event.target.value)}
              />
              <button className="enviar" onClick={handleSubmit}>
                <IoIosSend className="mr-2" size={20} /> Enviar
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
