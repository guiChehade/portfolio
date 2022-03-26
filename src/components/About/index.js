import './styles.css'
import profile from '../../assets/about/Chehade.jpg'

function About(){
    return(
        <main className='about' id='about'>

            <div className='profile-container'>
                <img
                    src={profile}
                    alt='Foto: Guilherme Chehade'
                    className='profile'
                />
                <h1>Guilherme Chehade</h1>
                <h2>Desenvolvedor Full-Stack Jr.</h2>
            </div>

            <div className='about-container'>
                <h1>Olá, mundo!</h1>
                <div className='about-text'>
                    <p>
                    Sou apaixonado por aprender coisas novas, gosto de mergulho, paraquedismo, já fui fotógrafo e DJ em uma balada de indie rock em SP, jogo Ultimate Frisbee há mais de 10 anos (um esporte incrível e quase desconhecido no Brasil).
                    </p>
                    <br/>
                    <p>
                    E se me falar de qualquer coisa que eu nunca tenha ouvido, provavelmente vou querer aprender também.
                    </p>
                </div>
            </div>

        </main>
    )
}

export default About;