import Navbar from '../../components/Navbar'
import Card from '../../components/Card'
import './style.css'
import { optionTurismo } from './optionData'

export function Turismo() {
  return (
    <section className='turismo'>
      <h1>
        Um lugar de fé, natureza e tradições
      </h1>
      <Navbar objectList={optionTurismo} />
      <div id="grid" className='grid grid-cols-3 gap-5 justify-items-center'>
        <Card
          title='Santuário de Santa Terezinha do Menino Jesus'
          description='O Santuário de Santa Terezinha do Menino Jesus e da Sagrada Face, Padroeira do município, foi inaugurado em 1926, 
                tem como destaque a realização da “Missa das Rosas”, no dia 1º de outubro, dia da padroeira'
          date=' Horário de visitação: 08:00 - 17:00'
          redirectMap=''
          redirectDetail=''
          path='src\assets\img\turismo\02_512x342.jpg'
        />

        <Card
          title='Santuário de São Miguel Arcanjo'
          description='O Santuário de São Miguel Arcanjo tem como destaque a belíssima imagem de São Miguel, com 19,2 metros de altura, além de ser o terceiro maior do mundo 
                dedicado ao arcanjo. Conta com praça de alimentação, loja de artigos religiosos, sanitários, capela de adoração e a Casa do Peregrino.'
          date='Horário de visitação: 24h'
          path="src\assets\img\turismo\01_512x342.jpg"
          redirectDetail=''
          redirectMap=''
        />

        <Card
          title='Capela São Domingos'
          description='A Capela São Domingos, atualmente administrada pela Mitra Diocesana de Jacarezinho, foi construída em 1954 pelo
                        fundador do complexo Hotel e Termas Yara, hoje desativados. De estilo arquitetônico italiano, atualmente desativada
                        para realização de missas e celebrações, é local de visitação e de peregrinação de fiéis que aproveitam o passeio pela Fazenda Yara.' path='src\assets\img\turismo\03_512x342.jpg' date='Horário de visitação: 24h' redirectDetail='' redirectMap='' />
        <Card title='Parque do Povo'
          description='O Santuário de Santa Terezinha do Menino Jesus e da Sagrada Face, Padroeira do município, foi inaugurado em 1926, 
                        tem como destaque a realização da “Missa das Rosas”, no dia 1º de outubro, dia da padroeira.'
          date='Horário de visitação: 24h'
          path='src\assets\img\turismo\04_512x293.jpg'
          redirectDetail=''
          redirectMap='' />

        <Card
          title='Fazenda Yara'
          description='A Fazenda Yara, área privada, localizada no final da rodovia Tsuneto Matsubara (Estrada da Yara) é um local de memória e contemplação ao passado.
                        Aqui se encontram as ruínas do antigo Hotel e Termas Yara. Permite acesso para visitas e eventos mediante reserva antecipada.'
          date='Horário de visitação: 08:00 - 20:00'
          path='src\assets\img\turismo\5_512x342.jpg'
          redirectDetail=''
          redirectMap=''
        />
        <Card
          title='Castelo Vinícola La Dorni'
          description='O Castelo La Dorni é um pedacinho da Itália em Bandeirantes. Construído de maneira artesanal, as mais de 50 mil pedras de arenito usadas na construção foram talhadas à mão, buscando manter a fidelidade de um castelo medieval. 
                        No local, é possível visitar o Castelo, suas adegas e apreciar um bom vinho.'
          date='Horário de visitação: 08:00 - 17:00'
          path='src\assets\img\turismo\6_512x342.jpg'
          redirectDetail=''
          redirectMap=''
        />
        <Card
          title='Encontro das águas'
          description='A aproximadamente 15 Km de Bandeirantes, a natureza proporciona um belo espetáculo: o encontro de dois importantes rios do estado, Cinzas e Laranjinha, que formam diversas quedas d´água e “prainhas”, tudo cercado por mata nativa.
                        Nessa mesma região também existem várias opções de lazer e turismo ecológico, como o ciclo turismo e caminhadas em áreas naturais.'
          date='Horário de visitação: 24h'
          path='src\assets\img\turismo\09_512x342.jpg'
          redirectDetail=''
          redirectMap=''
        />

        <Card
          title='Centro cultural Brasil-Japão'
          description='A Fazenda Yara, área privada, localizada no final da rodovia Tsuneto Matsubara (Estrada da Yara) é um local de memória e contemplação ao passado.
                        Aqui se encontram as ruínas do antigo Hotel e Termas Yara. Permite acesso para visitas e eventos mediante reserva antecipada.'
          date='Horário de visitação: 08:00 - 20:00'
          path='src\assets\img\turismo\10_512x342.jpg'
          redirectDetail=''
          redirectMap='' />
        <Card
          title='Museu Municipal'
          description='O Museu Municipal Professora Maria Calil Zambon está instalado no prédio da antiga estação ferroviária, um dos marcos iniciais da história do município. 
                        As peças de exposição retratam a memória da cidade, classificados por temas: contexto histórico, com a ala dos pioneiros; contexto material, com instrumentos da estação ferroviária e ainda cultura e imigração japonesa. 
                        São fotos, imagens e documentos antigos, além de itens usados pelos pioneiros da cidade. '
          date='Horário de visitação: 08:00 - 17:00'
          path='src\assets\img\turismo\11_512x342.jpg'
          redirectDetail=''
          redirectMap=''
        />
        <Card title='Resort Morro dos Anjos'
          description='O Morro dos Anjos será um dos hotéis resort mais completos do Sul do País. Um lugar que une paz e lazer diferenciado com um belíssimo complexo aquático de águas quentes termais.'
          date='Horário de visitação: Em breve'
          path='src\assets\img\turismo\13_512x269.jpg'
          redirectDetail=''
          redirectMap=''
        />

        <Card title='Estância Santa Maria'
          description='Localizada a aproximadamente 7 Km da cidade, a estância oferece opções de turismo ecológico e lazer rural, com áreas preservadas de mata, quiosques, piscinas, pousada, bar e lanchonete,
                além de realizar anualmente diversos eventos de natureza musical e temática. Um ponto de lazer e passeios que pode ser frequentado com ou sem agendamento.'
          date='Horário de visitação: 08:00 - 17:00'
          path='src\assets\img\turismo\12_512x288.jpg'
          redirectDetail=''
          redirectMap=''
        />

        <Card
          title='Feira da Lua e Feira Local'
          description='Toda quinta-feira acontece no Parque do Povo um encontro gastronômico com diversas barracas de comidas e bebidas acompanhado sempre de música ao vivo. A feira promove a culinária e a cultura locais, além da integração 
                entre bandeirantenses e seus visitantes. A Feira Livre do Agricultor acontece aos domingos pela manhã, no entorno da “Praça Brasil-Japão” e é uma opção de lazer e 
                conhecimento da culinária e tradições locais, além de fazer contato e possibilitar compras dos produtos que constituem boa parte do carro-chefe da economia local.'
          date='Horário de visitação: quinta-feria 17:00 - 21:00'
          path='src\assets\img\turismo\07_512x341.jpg'
          redirectDetail=''
          redirectMap=''
        />
      </div>
    </section>
  )
}