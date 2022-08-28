import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import api from '../../services/api'
import './styles.css'
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { Loading } from '../../components/Loading'

interface TurismoDetailProps {
    id: number
    nome: string
    descricao: string
    email: string
    endereco: string
    telefone: string
    site: string
    logo: string
    whats: string
    face: string
    insta: string
    ativo: number
}

export function TurismoDetail() {
    const { id } = useParams()
    const [turismo, setTurismo] = useState<TurismoDetailProps>()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        api.get(`/atracoes/${id}`).then((response) => {
            console.log(response.data)
            setTurismo(response.data.atracoes[0])
            setLoading(false)
        })
    }, [])

    if (loading) {
        return <Loading />
    }

    return (
        <div>
            <div className='turismo-logo'>
                <img src={turismo?.logo} alt='' />
            </div>
            <div className='turismo-background'>
                <img src={turismo?.logo} alt='' />
            </div>
            <div className="turismo-detail">
                <h1>{turismo?.nome}</h1>
                <div className="turismo-detail-description">
                    <h2>Descrição</h2>
                    <p>{turismo?.descricao}</p>
                    <h2>Contatos</h2>
                    
                    <p>{turismo?.endereco}</p>
                    <p>{turismo?.email}</p>
                    <p>{turismo?.telefone}</p>
                    <p>{turismo?.whats}</p>

                    <div className="redesIconturismo gap-5">

                        {turismo?.face && (
                            <a href={turismo?.face} className="face">
                                <FaFacebook size={28} />
                            </a>
                        )}
                        {turismo?.insta && (
                            <a href={turismo?.insta} className="insta">
                                <FaInstagram size={28} />
                            </a>
                        )}
                        {turismo?.whats && (
                            <a
                                href={`https://api.whatsapp.com/send?phone=${turismo?.whats}&text='Olá queria saber mais sobre o ${turismo?.nome}'`}
                                className="whats"
                            >
                                <FaWhatsapp size={28} />
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
