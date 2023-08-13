import Logo from '../../images/logo.svg'
import HeaderMenu from '../HeaderMenu/HeaderMenu'

const Header = ({children}) => {
  return (
    <div className = "header">
      <img alt='logo' src = {Logo} className ="header__logo" />
      <HeaderMenu />
      {children}
    </div>
  )
}

export default Header
