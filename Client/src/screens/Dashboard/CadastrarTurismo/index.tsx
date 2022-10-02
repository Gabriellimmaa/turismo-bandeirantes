import { MdTitle } from 'react-icons/md'
import {
  BiCategoryAlt,
  BiMapPin,
  BiPhoneCall,
  BiPlanet,
  BiMailSend,
} from 'react-icons/bi'
import { BsTextIndentLeft } from 'react-icons/bs'
import { FaWhatsapp } from 'react-icons/fa'
import { AiOutlineInstagram } from 'react-icons/ai'
import { FiFacebook } from 'react-icons/fi'

import { useTranslation } from 'react-i18next'

import { MapContainer, TileLayer, useMapEvents } from 'react-leaflet'
import L from 'leaflet'
import './styles.css'

import marcadorTurismo from '../../../assets/marcadores/vermelho.png'
import { Link } from 'react-router-dom'

export default function CadastrarTurismo() {
  const { t } = useTranslation()

  const icon = L.icon({
    iconUrl: marcadorTurismo,
    iconSize: [80, 80],
    iconAnchor: [40, 65],
    popupAnchor: [0, -55],
  })

  function ComponentClick() {
    const map = useMapEvents({
      click: (e) => {
        map.eachLayer((layer) => {
          if (layer instanceof L.Marker) {
            map.removeLayer(layer)
          }
        })
        const { lat, lng } = e.latlng
        L.marker([lat, lng], { icon }).addTo(map)
      },
    })
    return null
  }

  return (
    <>
      <section className="cadastrar-turismo">
        <div className="dashboard-title">
          <h1>Dashboard</h1>
          <div className="flex gap-2 items-center">
            <Link to="/admin/opcoes"> Dashboard</Link> &gt;{' '}
            <Link to="/admin/cadastrar"> Cadastrar</Link> &gt; Turismo{' '}
          </div>
        </div>
        <div className="title-style-1">
          <h1>{t('paginas.dashboard.turismo.titulo')}</h1>
          <h2></h2>
        </div>
        <form>
          <div className="grid-cols-1 md:grid-cols-2">
            <span>
              <label htmlFor="nome">
                <MdTitle /> {t('paginas.dashboard.turismo.nome')}
                <span>{t('paginas.dashboard.turismo.obrigatorio')}</span>{' '}
              </label>
              <input
                type="text"
                id="nome"
                name="nome"
                placeholder="Insira o nome do local"
              />
            </span>
            <span>
              <label htmlFor="categoria">
                <BiCategoryAlt /> {t('paginas.dashboard.turismo.categoria')}{' '}
                <span>{t('paginas.dashboard.turismo.obrigatorio')}</span>
              </label>
              <select id="categoria" name="categoria">
                <option value="0">
                  {t('paginas.dashboard.turismo.placeHolderCategoria')}
                </option>
                <option value="religioso">
                  {t('paginas.dashboard.turismo.religioso')}
                </option>
                <option value="cultural">
                  {t('paginas.dashboard.turismo.cultural')}
                </option>
                <option value="rural">
                  {t('paginas.dashboard.turismo.rural')}
                </option>
                <option value="esportivo">
                  {t('paginas.dashboard.turismo.esportivo')}
                </option>
                <option value="ecologico">
                  {t('paginas.dashboard.turismo.ecologico')}
                </option>
              </select>
            </span>
          </div>

          <span>
            <label htmlFor="descricao">
              <BsTextIndentLeft /> {t('paginas.dashboard.turismo.descricao')}{' '}
              <span>{t('paginas.dashboard.turismo.obrigatorio')}</span>
            </label>
            <textarea
              id="descricao"
              name="descricao"
              placeholder={t('paginas.dashboard.turismo.placeHolderDescricao')}
            />
          </span>

          <span>
            <label htmlFor="endereco">
              <BiMapPin /> {t('paginas.dashboard.turismo.endereco')}{' '}
              <span>{t('paginas.dashboard.turismo.obrigatorio')}</span>
            </label>
            <input
              type="text"
              id="endereco"
              name="endereco"
              placeholder={t('paginas.dashboard.turismo.placeHolderEndereco')}
            />
          </span>

          <div className="grid-cols-1 md:grid-cols-3">
            <span>
              <label htmlFor="email">
                <BiMailSend /> {t('paginas.dashboard.turismo.email')}
              </label>
              <input
                type="text"
                id="email"
                name="email"
                placeholder={t('paginas.dashboard.turismo.placeHolderEmail')}
              />
            </span>
            <span>
              <label htmlFor="site">
                <BiPlanet /> {t('paginas.dashboard.turismo.site')}
              </label>
              <input
                type="text"
                id="site"
                name="site"
                placeholder={t('paginas.dashboard.turismo.placeHolderSite')}
              />
            </span>
            <span>
              <label htmlFor="telefone">
                <BiPhoneCall /> {t('paginas.dashboard.turismo.telefone')}
              </label>
              <input
                type="text"
                id="telefone"
                name="telefone"
                placeholder={t('paginas.dashboard.turismo.placeHolderTelefone')}
              />
            </span>
          </div>

          <div className="grid-cols-1 md:grid-cols-3">
            <span>
              <label htmlFor="whatsapp">
                <FaWhatsapp /> Whatsapp:
              </label>
              <input
                type="text"
                id="whatsapp"
                name="whatsapp"
                placeholder={t('paginas.dashboard.turismo.placeHolderWhatsapp')}
              />
            </span>
            <span>
              <label htmlFor="instagram">
                <AiOutlineInstagram /> Instagram:
              </label>
              <input
                type="text"
                id="instagram"
                name="instagram"
                placeholder={t('paginas.dashboard.turismo.placeHolderInsta')}
              />
            </span>
            <span>
              <label htmlFor="facebook">
                <FiFacebook /> Facebook:
              </label>
              <input
                type="text"
                id="facebook"
                name="facebook"
                placeholder={t('paginas.dashboard.turismo.placeHolderFace')}
              />
            </span>
          </div>

          <label htmlFor="file" style={{ display: 'block' }}>
            {t('paginas.dashboard.turismo.logo')}{' '}
            <span>{t('paginas.dashboard.turismo.obrigatorio')}</span>
            <input
              type="file"
              id="file"
              name="file"
              className="w-full text-sm text-gray-500 bg-white file:mr-4 file:py-2 file:px-4 file:border-0 file:bg-gray-200 hover:file:bg-gray-400 file:cursor-pointer"
            />
          </label>

          <span>
            <label>
              {' '}
              {t('paginas.dashboard.turismo.mapa')}{' '}
              <span>{t('paginas.dashboard.turismo.obrigatorio')}</span>
            </label>
            <MapContainer
              center={[-23.1115914, -50.3749315]}
              style={{ width: '100%', height: 280 }}
              zoom={15}
            >
              <TileLayer
                url={`https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${
                  import.meta.env.VITE_MAPBOX_TOKEN
                }`}
              />
              <ComponentClick />
            </MapContainer>
          </span>

          <button>{t('paginas.dashboard.turismo.cadastro')}</button>
        </form>
      </section>
    </>
  )
}
