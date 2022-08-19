
import './styles.css'

export function Footer() {
    return(
        <footer>
            <div className="footer">
                <div>
                    <img className='w-auto h-20' src="src\assets\logo-banner.png" />
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
                    <h3>
                        Notícias
                    </h3>
                    <div className="notices">
                        <div className="notice">
                            <img className='w-auto h-20' src="src\assets\logo-banner.png" />
                            <div className="notice-text">
                                <a href="">Brasão</a>
                                <p>
                                    20/15/2022
                                </p> 
                            </div>
                        </div>
                        <div className="notice">
                            <img className='w-auto h-20' src="src\assets\logo-banner.png" />
                            <div className="notice-text">
                                <a href="">Brasão</a>
                                <p>
                                    20/15/2022
                                </p> 
                            </div>
                        </div>
                        <div className="notice">
                            <img className='w-auto h-20' src="src\assets\logo-banner.png" />
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
                            Rua dos Bobos, 0
                        </strong>
                        <strong>
                            (19) 99999-9999
                        </strong>
                        <strong>
                            seila@gmail.com
                        </strong>
                        <img className="w-auto max-h-20 bg-contain" src="src\assets\logo-banner.png" />
                    </div>
                </div>
            </div>
        </footer>
    )
}