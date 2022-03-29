import './styles.css'
import sociais from './sociais'


function Footer () {
  return (
    <footer>
      <div className='footer'>
        {sociais.map(({ name, image, link }) => (
          <a href={link} target="_blank" rel="noopener noreferrer">
            <img src={image} alt={name} className="image-sociais"/>
          </a>
        ))}
      </div>
    </footer>

  )
}

export default Footer;