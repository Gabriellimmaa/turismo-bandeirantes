import './style.css'
import { Loading } from '../../components/Loading'
import { useEffect, useState } from 'react'
import Card from '../../components/Card'
import api from '../../services/api'
import { Carousel } from '../../components/Carousel'

interface lazerEsporteProps {
    id: number
    nome: string
    descricao: string
    logo: string
    latitude: string
    longitude: string
    endereco: string
}

export default function LazerEsporte() {
    const [turismo, setLazerEsporte] = useState<lazerEsporteProps[]>([])

    const [loading, setLoading] = useState(true)

    // if (loading) {
    //     return <Loading />
    // }

    return (
        <section>
            <div className='title-style-1'>
                <h1>Lazer & Esporte</h1>
                <h2>Vem pro fut</h2>
            </div>
            
            {/* card teste para quando tiver a api */}

            <div className='grid grid-cols-3 gap-5 justify-items-center'>
                {/* {LazerEsporte.map((lazerEsporte) => {
                    return (
                        <Card
                            key={lazerEsporte.id}
                            title={lazerEsporte.nome}
                            description={lazerEsporte.descricao}
                            latitude={lazerEsporte.latitude}
                            longitude={lazerEsporte.longitude}
                            img={lazerEsporte.logo}
                            id={lazerEsporte.id}
                            type='lazer&esporte'
                        />
                    )
                })} */}
            </div>
            <div className='carousel'>
                <Carousel/>
            </div>
        </section>
    )
}


