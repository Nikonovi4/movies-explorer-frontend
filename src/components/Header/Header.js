import { NavLink } from 'react-router-dom'
import Logo from '../../images/logo.svg'


const Header = ({children}) => {
  return (
    <header className = "header">
      <NavLink to="/" className="header__link">
      <img alt='logo' src = {Logo} className ="header__logo" />
      </NavLink>
      {children}
    </header>
  )
}

export default Header
