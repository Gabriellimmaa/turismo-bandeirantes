import { MdTitle } from 'react-icons/md';
import { BiCategoryAlt } from 'react-icons/bi';
import { HiOutlinePhotograph } from 'react-icons/hi';
import { BsTextIndentLeft } from 'react-icons/bs';
import { BiMapPin } from 'react-icons/bi';
import { FaWhatsapp } from 'react-icons/fa'
import { AiOutlineInstagram } from 'react-icons/ai'
import { FiFacebook } from 'react-icons/fi'

import { useTranslation } from 'react-i18next'

import {
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

export default function CadastrarTurismo() {
    const { t } = useTranslation()
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
            <section className="cadastrar-imagem">
                <div className="title-style-1">
                    <h1>{t("paginas.dashboard.album.titulo")}</h1>
                    <h2></h2>
                </div>
                <form>
                    <div>
                        <label htmlFor='file' style={{ display: 'block' }}>
                        {t("paginas.dashboard.album.imagem")} <span>{t("paginas.dashboard.album.obrigatorio")}</span>
                            <input type="file" id='file' name='file' className="w-full text-sm text-gray-500 bg-white file:mr-4 file:py-2 file:px-4 file:border-0 file:bg-gray-200 hover:file:bg-gray-400 file:cursor-pointer" />
                        </label>
                    </div>
                    <div>
                        <span>
                            <label htmlFor="titulo"><MdTitle /> {t("paginas.dashboard.album.nome")} <span>{t("paginas.dashboard.album.obrigatorio")}</span> </label>
                            <input
                                type="text"
                                id="titulo"
                                name="titulo"
                                placeholder="Insira o título da imagem"
                            />
                        </span>
                    </div>

                    <span>
                        <label htmlFor="descricao"><BsTextIndentLeft /> {t("paginas.dashboard.album.descricao")} <span>{t("paginas.dashboard.album.obrigatorio")}</span></label>
                        <textarea
                            id="descricao"
                            name="descricao"
                            placeholder="Insira uma descrição da imagem"
                        />
                    </span>
                    <button>
                    {t("paginas.dashboard.album.cadastro")}
                    </button>
                </form>
            </section>
        </>
    )
}
