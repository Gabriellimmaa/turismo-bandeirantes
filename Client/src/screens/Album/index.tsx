import Card from '../../components/Card'
import Toolbar from '../../components/Toolbar'
import './styles.css'

export function Album() {
    return (
        <section id="album">
            <div className="title-style-1">
                <h1>Álbum</h1>
                <h2>Veja as maravilhas da nossa cidade!</h2>
                <div className='album-display'>
                    <div className='album-content'>
                        <img src="src\assets\img\album\album01.jpeg" alt="" />
                        <img src="src\assets\img\album\album02.jpeg" alt="" />
                        <img src="src\assets\img\album\album03.jpeg" alt="" />
                        <img src="src\assets\img\album\album04.jpeg" alt="" />
                        <img src="src\assets\img\album\album05.jpeg" alt="" />
                        <img src="src\assets\img\album\album06.jpg" alt="" />
                        <img src="src\assets\img\album\album07.jpg" alt="" />
                    </div>
                </div>

            </div>

        </section>
    )
}
