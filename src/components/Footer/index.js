import './styles.css'
import instagram from '../../assets/footer/instagram.png'
import linkedin from '../../assets/footer/linkedin.png'
import github from '../../assets/footer/github.png'
import email from '../../assets/footer/email.png'


function Footer () {
  return (
    <footer>
      <div className='footer'>
        <a href='https://www.instagram.com/chehade123/'>
          <img
            className='instagram'
            src={instagram}
            alt='instagram'
          />
        </a>
        <a href='https://www.linkedin.com/in/guilherme-chehade-a18644a3/'>
          <img
            className='instagram'
            src={linkedin}
            alt='linkedin'
          />
        </a>
        <a href='https://github.com/guiChehade/'>
          <img
            className='github'
            src={github}
            alt='github'
          />
        </a>
        <a href='mailto:gui_chehade@hotmail.com'>
          <img
            className='email'
            src={email}
            alt='email'
          />
        </a>
      </div>
    </footer>

  )
}

export default Footer;