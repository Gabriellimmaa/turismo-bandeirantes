import './styles.css'
import { IoIosSend } from 'react-icons/io'
import { toast } from 'react-toastify'
import { useState } from 'react'
import axios from 'axios'

import { useTranslation } from 'react-i18next'

export default function Contato() {
  const { t } = useTranslation()
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
        <h1> {t('paginas.contato.titulo')} </h1>
        <h2> {t('paginas.contato.descricao')} </h2>
      </div>
      <div className="pagina">
        <div className="cartaocont">
          <h3>{t('paginas.contato.localizacao')}</h3>
          <iframe
            className="mapa"
            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAEM-BKN-O6irIoDU8C-G9OFtPUvgb6bjg&q=-23°06'22.9, -50°22'18.7"
          ></iframe>
          <h3>{t('paginas.contato.telefone')}</h3>
          <p className="mb-2">{t('paginas.contato.prefeitura')}Bandeirantes</p>
          <p>(43)3542-4525</p>
        </div>
        <div className="rigth">
          <div className="entreemcontato">
            <h3>{t('paginas.contato.subtitulo')}</h3>
            <form>
              <label htmlFor="nome">{t('paginas.contato.empresa')}</label>
              <input
                type="text"
                id="empresa"
                name="empresa"
                placeholder={t('paginas.contato.placeholderEmpresa')}
                onChange={(event) => setCompany(event.target.value)}
              />
              <div className="grid grid-cols-2 gap-4">
                <span>
                  <label htmlFor="nome">{t('paginas.contato.contato')}</label>
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    placeholder={t('paginas.contato.placeholderContato')}
                    onChange={(event) => setName(event.target.value)}
                  />
                </span>
                <span>
                  <label htmlFor="telefone">
                    {t('paginas.contato.telefone')}
                  </label>
                  <input
                    type="text"
                    id="telefone"
                    name="telefone"
                    placeholder={t('paginas.contato.placeholderTelefone')}
                    onChange={(event) => setCellphone(event.target.value)}
                  />
                </span>
              </div>
              <label htmlFor="email">E-Mail:</label>
              <input
                type="text"
                id="email"
                name="email"
                placeholder={t('paginas.contato.placeholderEmail')}
                onChange={(event) => setEmail(event.target.value)}
              />

              <label htmlFor="tsugest">{t('paginas.contato.categoria')}</label>
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
              <label htmlFor="sugestão">
                {t('paginas.contato.enderecoCompleto')}
              </label>
              <textarea
                id="endereco"
                name="endereco"
                placeholder={t('paginas.contato.placeholderEndereco')}
                style={{ height: '100px' }}
                defaultValue={''}
                onChange={(event) => setAddress(event.target.value)}
              />
              <button className="enviar" onClick={handleSubmit}>
                <IoIosSend className="mr-2" size={20} />{' '}
                {t('paginas.contato.botao')}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
