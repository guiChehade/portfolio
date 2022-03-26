import './styles.css'
import logo from '../../assets/header/logo2.png'


function Header () {
  return (
    <header>

      
      <a href='#about'>
        <img
          className='logo'
          src={logo}
          alt='logo'
        />
      </a>
      <nav>
        <ul className='menu'>
          <li className='item-menu'><a className='link-menu' href='#about'>About</a></li>
          <li className='item-menu'><a className='link-menu' href='#projects'>Projetos</a></li>
          <li className='item-menu'><a className='link-menu' href='#skills'>Skills</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;