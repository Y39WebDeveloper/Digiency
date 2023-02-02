import './NavbarMenuItem.css'

const NavbarMenuItem = (props) => {
  return (
    <li className='nav-item'><a href={`#${props.target}`}>{props.value}</a></li>
  )
}

export default NavbarMenuItem