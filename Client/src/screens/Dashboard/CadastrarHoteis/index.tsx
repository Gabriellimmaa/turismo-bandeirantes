import { MdTitle } from 'react-icons/md';
import { BiCategoryAlt } from 'react-icons/bi';
import { HiOutlinePhotograph } from 'react-icons/hi';
import { BsTextIndentLeft } from 'react-icons/bs';
import { BiMapPin } from 'react-icons/bi';
import { FaWhatsapp } from 'react-icons/fa'
import { AiOutlineInstagram } from 'react-icons/ai'
import { FiFacebook } from 'react-icons/fi'

import {
  BiRestaurant,
  BiCalendar,
  BiMap,
  BiMoney,
  BiPhoneCall,
  BiPlanet,
  BiTime,
  BiMailSend,
} from 'react-icons/bi'
import { TbToolsKitchen } from 'react-icons/tb'
import { MdMenuBook } from 'react-icons/md'

import { MapContainer, Marker, TileLayer, useMapEvents } from 'react-leaflet';
import L, { LeafletMouseEvent } from 'leaflet';
import { useState } from 'react'
import './styles.css'

import marcadorTurismo from '../../../assets/marcadores/vermelho.png'

export default function CadastrarBares() {
  const [position, setPosition] = useState({ latitude: 0, longitude: 0 })

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
            map.removeLayer(layer);
          }
        });
        const { lat, lng } = e.latlng;
        L.marker([lat, lng], { icon }).addTo(map);
      }
    });
    return null;
  }


  return (
    <>
      <section className="cadastrar-turismo">
        <div className="title-style-1">
          <h1>Cadastrar Hoteis</h1>
          <h2></h2>
        </div>
        <form>
          <span>
            <label htmlFor="nome"><MdTitle /> Nome: <span>*Obrigatório</span> </label>
            <input
              type="text"
              id="nome"
              name="nome"
              placeholder="Insira o nome do local"
            />
          </span>

          <span>
            <label htmlFor="descricao"><BsTextIndentLeft /> Descrição: <span>*Obrigatório</span></label>
            <textarea
              id="descricao"
              name="descricao"
              placeholder="Insira uma descrição do local"
            />
          </span>

          <span>
            <label htmlFor="endereco"><BiMapPin /> Endereço: <span>*Obrigatório</span></label>
            <input
              type="text"
              id="endereco"
              name="endereco"
              placeholder="Insira o endereço do local"
            />
          </span>
          <span>
              <label htmlFor="preco"><BiMoney /> Preço Médio: <span>*Obrigatório</span></label>
              <input
                type="text"
                id="preco"
                name="preco"
                placeholder="Insira o preço médio do local"
              />
            </span>

          <div className='grid-cols-1 md:grid-cols-3'>
            <span>
              <label htmlFor="email"><BiMailSend /> Email:</label>
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Insira o email do local caso tenha"
              />
            </span>
            <span>
              <label htmlFor="site"><BiPlanet /> Site:</label>
              <input
                type="text"
                id="site"
                name="site"
                placeholder="Insira o site do local caso tenha"
              />
            </span>
            <span>
              <label htmlFor="telefone"><BiPhoneCall /> Telefone:</label>
              <input
                type="text"
                id="telefone"
                name="telefone"
                placeholder="Insira um telefone para contato"
              />
            </span>
          </div>

          <div className='grid-cols-1 md:grid-cols-3'>
            <span>
              <label htmlFor="whatsapp"><FaWhatsapp /> Whatsapp:</label>
              <input
                type="text"
                id="whatsapp"
                name="whatsapp"
                placeholder="Insira o whatsapp do local caso tenha"
              />
            </span>
            <span>
              <label htmlFor="instagram"><AiOutlineInstagram /> Instagram:</label>
              <input
                type="text"
                id="instagram"
                name="instagram"
                placeholder="Insira o instagram do local caso tenha"
              />
            </span>
            <span>
              <label htmlFor="facebook"><FiFacebook /> Facebook:</label>
              <input
                type="text"
                id="facebook"
                name="facebook"
                placeholder="Insira o facebook do local caso tenha"
              />
            </span>
          </div>

          <label htmlFor='file' style={{ display: 'block' }}>
            Escolha uma logo: <span>*Obrigatório</span>
            <input type="file" id='file' name='file' className="w-full text-sm text-gray-500 bg-white file:mr-4 file:py-2 file:px-4 file:border-0 file:bg-gray-200 hover:file:bg-gray-400 file:cursor-pointer" />
          </label>

          <span>
            <label>Selecione o ponto no mapa: <span>*Obrigatório</span></label>
            <MapContainer
              center={[-23.1115914, -50.3749315]}
              style={{ width: '100%', height: 280 }}
              zoom={15}
            >
              <TileLayer
                url={`https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${import.meta.env.VITE_MAPBOX_TOKEN
                  }`}
              />
              <ComponentClick />

            </MapContainer>
          </span>

          <button>
            Cadastrar Local
          </button>
        </form>
      </section>
    </>
  )
}
