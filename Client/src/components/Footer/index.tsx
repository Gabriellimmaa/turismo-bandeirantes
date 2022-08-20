import { FaFacebook, FaYoutube } from 'react-icons/fa'
import './styles.css'

export function Footer() {
    return(
        <footer>
            <div className="footer">
                <div className="redes">
                    <div className="logo">
                        <img className='w-auto mt-6 mb-6 object-contain' src="src\assets\logoFooter.png" />
                    </div>
                    <div className="redesIcon">
                        <a href="">
                            <FaFacebook size={28}/>
                        </a>
                        <a href="">
                            <FaYoutube size={28}/>
                        </a>
                    </div>
                </div>
                <div className="column">
                    <h3>Páginas</h3>
                    <div className="pages">
                        <a href="">
                            Sobre
                        </a>
                        <a href="">
                            Onde Dormir
                        </a>
                        <a href="">
                            O que fazer
                        </a>
                        <a href="">
                            Serviços
                        </a>
                    </div>
                </div>
                <div className="column">
                    <h3 className="titleHidden">
                        Notícias
                    </h3>
                    <div className="notices">
                        <div className="notice">
                            <a href="">
                                <img className='w-auto h-20' src="src\assets\logo-banner.png" />
                            </a>
                            <div className="notice-text">
                                <a href="">Brasão</a>
                                <p>
                                    20/15/2022
                                </p> 
                            </div>
                        </div>
                        <div className="notice">
                            <a href="">
                                <img className='w-auto h-20' src="src\assets\logo-banner.png" />
                            </a>
                            <div className="notice-text">
                                <a href="">Brasão</a>
                                <p>
                                    20/15/2022
                                </p> 
                            </div>
                        </div>
                        <div className="notice">
                            <a href="">
                                <img className='w-auto h-20' src="src\assets\logo-banner.png" />
                            </a>
                            <div className="notice-text">
                                <a href="">Brasão</a>
                                <p>
                                    20/15/2022
                                </p> 
                            </div>
                        </div>
                    </div>
                </div>
                <div className="column">
                    <h3>Contato</h3>
                    <div className="contacts">
                        <strong>
                        Rua Frei Raphael Proner, 1457
                        </strong>
                        <strong>
                        Telefone: (43) 3542-4525
                        </strong>
                        <strong>
                        E-mail: comunicacao@bandeirantes.pr.gov.br
                        </strong>
                        <img className="w-auto max-h-20 bg-contain" src="src\assets\logo-banner.png" />
                    </div>
                </div>
            </div>
            <div className="copyright">
                <p>
                    © 2021 - Prefeitura Municipal de Bandeirantes - Todos os direitos reservados
                </p>
                <p>
                    Website desenvolvido pela equipe FrontCode
                </p>
            </div>
        </footer>
    )
}