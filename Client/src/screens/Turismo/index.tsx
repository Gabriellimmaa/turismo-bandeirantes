import { BiMap } from 'react-icons/bi'
import { BiTime } from 'react-icons/bi'
import Card from '../../components/Card'
import './style.css'



export function Turismo() {
    return(
        <div className='turismo'>
            <h1>
                Turismo
            </h1>
            <div className='main-options'>
                <ul>
                    <li>Religioso</li>
                    <li>Rural</li>
                    <li>Cultural</li>
                    <li>Resort</li>
                </ul>
            </div>
            <div className='grid grid-cols-3 gap-10'>
                <div className='card'>  
                    <div className='card-img'>
                        <img src="src\assets\img\turismo\02_512x342.jpg" alt=">Santuário de Santa Terezinha do Menino Jesus" />
                    </div>
                    <div className='card-text'>
                        <label>Santuário de Santa Terezinha do Menino Jesus</label>
                        <p> <BiTime/> Horário de visitação: 08:00 - 17:00</p>
                        <p> <BiMap/> Localização</p>
                        <p>O Santuário de Santa Terezinha do Menino Jesus e da Sagrada Face, Padroeira do município, foi inaugurado em 1926, 
                        tem como destaque a realização da “Missa das Rosas”, no dia 1º de outubro, dia da padroeira. </p>
                        <button>Saiba Mais</button>
                    </div>
                </div>
                
                <div className='card'>
                    <div className='card-img'>
                        <img src="src\assets\img\turismo\01_512x342.jpg" alt="Santuário São Miguel" />
                    </div>
                    <div className='card-text'>
                        <label>Santuário de São Miguel Arcanjo</label>
                        <p> <BiTime/> Horário de visitação: 24h</p>
                        <p> <BiMap/> Localização</p>
                        <p>O Santuário de São Miguel Arcanjo tem como destaque a belíssima imagem de São Miguel, com 19,2 metros de altura, além de ser o terceiro maior do mundo 
                        dedicado ao arcanjo. Conta com praça de alimentação, loja de artigos religiosos, sanitários, capela de adoração e a Casa do Peregrino. </p>
                        <button>Saiba Mais</button>
                    </div>
                </div>

                <div className='card'>
                    <div className='card-img'>
                        <img src="src\assets\img\turismo\03_512x342.jpg" alt="Capela São Domingos" />
                    </div>
                    <div className='card-text'>
                        <label>Capela São Domingos</label>
                        <p> <BiTime/> Horário de visitação: 24h</p>
                        <p> <BiMap/> Localização</p>
                        <p>A Capela São Domingos, atualmente administrada pela Mitra Diocesana de Jacarezinho, foi construída em 1954 pelo
                        fundador do complexo Hotel e Termas Yara, hoje desativados. De estilo arquitetônico italiano, atualmente desativada
                        para realização de missas e celebrações, é local de visitação e de peregrinação de fiéis que aproveitam o passeio pela Fazenda Yara.</p>
                        <button>Saiba Mais</button>
                    </div>
                </div>
            </div>

            <div className='grid grid-cols-3 gap-10'>
                <div className='card'>
                    <div className='card-img'>
                        <img src="src\assets\img\turismo\04_512x293.jpg" alt="Parque do Povo" />
                    </div>
                    <div className='card-text'>
                        <label>Parque do Povo</label>
                        <p> <BiTime/> Horário de visitação: 24h</p>
                        <p> <BiMap/> Localização</p>
                        <p>O Santuário de Santa Terezinha do Menino Jesus e da Sagrada Face, Padroeira do município, foi inaugurado em 1926, 
                        tem como destaque a realização da “Missa das Rosas”, no dia 1º de outubro, dia da padroeira. </p>
                        <button>Saiba Mais</button>
                    </div>
                </div>
                
                <div className='card'>
                    <div className='card-img'>
                        <img src="src\assets\img\turismo\5_512x342.jpg" alt="Fazenda Yara" />
                    </div>
                    <div className='card-text'>
                        <label>Fazenda Yara</label>
                        <p> <BiTime/> Horário de visitação: 08:00 - 20:00</p>
                        <p> <BiMap/> Localização</p>
                        <p>A Fazenda Yara, área privada, localizada no final da rodovia Tsuneto Matsubara (Estrada da Yara) é um local de memória e contemplação ao passado.
                        Aqui se encontram as ruínas do antigo Hotel e Termas Yara. Permite acesso para visitas e eventos mediante reserva antecipada. 
                        </p>
                        <button>Saiba Mais</button>
                    </div>
                </div>

                <div className='card'>
                    <div className='card-img'>
                        <img src="src\assets\img\turismo\6_512x342.jpg" alt="Castelo Vinícola La Dorni" />
                    </div>
                    <div className='card-text'>
                        <label>Castelo Vinícola La Dorni</label>
                        <p> <BiTime/> Horário de visitação: 08:00 - 17:00</p>
                        <p> <BiMap/> Localização</p>
                        <p>O Castelo La Dorni é um pedacinho da Itália em Bandeirantes. Construído de maneira artesanal, as mais de 50 mil pedras de arenito usadas na construção foram talhadas à mão, buscando manter a fidelidade de um castelo medieval. 
                        No local, é possível visitar o Castelo, suas adegas e apreciar um bom vinho. 
                        </p>
                        <button>Saiba Mais</button>
                    </div>
                </div>
            </div>

            <div className='grid grid-cols-3 gap-10'>
                <div className='card'>
                    <div className='card-img'>
                        <img src="src\assets\img\turismo\09_512x342.jpg" alt="Encontro das águas" />
                    </div>
                    <div className='card-text'>
                        <label>Encontro das águas</label>
                        <p> <BiTime/> Horário de visitação: 24h</p>
                        <p> <BiMap/> Localização</p>
                        <p>A aproximadamente 15 Km de Bandeirantes, a natureza proporciona um belo espetáculo: o encontro de dois importantes rios do estado, Cinzas e Laranjinha, que formam diversas quedas d´água e “prainhas”, tudo cercado por mata nativa.
                        Nessa mesma região também existem várias opções de lazer e turismo ecológico, como o ciclo turismo e caminhadas em áreas naturais. </p>
                        <button>Saiba Mais</button>
                    </div>
                </div>
                
                <div className='card'>
                    <div className='card-img'>
                        <img src="src\assets\img\turismo\10_512x342.jpg" alt="Centro cultural Brasil-Japão" />
                    </div>
                    <div className='card-text'>
                        <label>Centro Cultural Brasil-Japão</label>
                        <p> <BiTime/> Horário de visitação: 08:00 - 20:00</p>
                        <p> <BiMap/> Localização</p>
                        <p>A Fazenda Yara, área privada, localizada no final da rodovia Tsuneto Matsubara (Estrada da Yara) é um local de memória e contemplação ao passado.
                        Aqui se encontram as ruínas do antigo Hotel e Termas Yara. Permite acesso para visitas e eventos mediante reserva antecipada. 
                        </p>
                        <button>Saiba Mais</button>
                    </div>
                </div>

                <div className='card'>
                    <div className='card-img'>
                        <img src="src\assets\img\turismo\11_512x342.jpg" alt="Museu Municipal" />
                    </div>
                    <div className='card-text'>
                        <label>Museu Municipal</label>
                        <p> <BiTime/> Horário de visitação: 08:00 - 17:00</p>
                        <p> <BiMap/> Localização</p>
                        <p>O Museu Municipal Professora Maria Calil Zambon está instalado no prédio da antiga estação ferroviária, um dos marcos iniciais da história do município. 
                        As peças de exposição retratam a memória da cidade, classificados por temas: contexto histórico, com a ala dos pioneiros; contexto material, com instrumentos da estação ferroviária e ainda cultura e imigração japonesa. 
                        São fotos, imagens e documentos antigos, além de itens usados pelos pioneiros da cidade. 
                        </p>
                        <button>Saiba Mais</button>
                    </div>
                </div>
            </div>

            <div className='grid grid-cols-3 gap-10'>
                <div className='card'>
                    <div className='card-img'>
                        <img src="src\assets\img\turismo\13_512x269.jpg" alt="Resort Morro dos Anjos" />
                    </div>
                    <div className='card-text'>
                        <label>Morro dos Anjos</label>
                        <p> <BiTime/> Horário de visitação: Em breve</p>
                        <p> <BiMap/> Localização</p>
                        <p>O Morro dos Anjos será um dos hotéis resort mais completos do Sul do País. Um lugar que une paz e lazer diferenciado com um belíssimo complexo aquático de águas quentes termais.</p>
                        <button>Saiba Mais</button>
                    </div>
                </div>
                
                <div className='card'>
                    <div className='card-img'>
                        <img src="src\assets\img\turismo\12_512x288.jpg" alt="Estância Santa Maria" />
                    </div>
                    <div className='card-text'>
                        <label>Estância Santa Maria</label>
                        <p> <BiTime/> Horário de visitação: 08:00 - 17:00</p>
                        <p> <BiMap/> Localização</p>
                        <p>Localizada a aproximadamente 7 Km da cidade, a estância oferece opções de turismo ecológico e lazer rural, com áreas preservadas de mata, quiosques, piscinas, pousada, bar e lanchonete,
                        além de realizar anualmente diversos eventos de natureza musical e temática. Um ponto de lazer e passeios que pode ser frequentado com ou sem agendamento.
                        </p>
                        <button>Saiba Mais</button>
                    </div>
                </div>

                <div className='card'>
                    <div className='card-img'>
                        <img src="src\assets\img\turismo\07_512x341.jpg" alt="Feira da Lua" />
                    </div>
                    <div className='card-text'>
                        <label>Feira da Lua e Feira Local</label>
                        <p> <BiTime/> Horário de visitação: quinta-feria 17:00 - 21:00</p>
                        <p> <BiMap/> Localização</p>
                        <p>Toda quinta-feira acontece no Parque do Povo um encontro gastronômico com diversas barracas de comidas e bebidas acompanhado sempre de música ao vivo. A feira promove a culinária e a cultura locais, além da integração 
                        entre bandeirantenses e seus visitantes. A Feira Livre do Agricultor acontece aos domingos pela manhã, no entorno da “Praça Brasil-Japão” e é uma opção de lazer e 
                        conhecimento da culinária e tradições locais, além de fazer contato e possibilitar compras dos produtos que constituem boa parte do carro-chefe da economia local.
                        </p>
                        <button>Saiba Mais</button>
                    </div>
                </div>
            </div>
        </div>
    )
}