import './Navbar.css'
import { Logo, NavbarMenuItem, SecondaryButton, CollapseKit } from '../'

import NavigationItem from '../../Data/NavigationItem';

const Navbar = () => {
    const Items = NavigationItem.map(Item => {
        return <NavbarMenuItem key={Item.id} value={Item.value} target={Item.target} />
    });
  return (
    <>
        <nav className='navbar'>
            <Logo/>
            <CollapseKit>
                <div className='navbar-menu'>
                    <ul className='navbar-nav'>
                        {Items}
                    </ul>
                    <SecondaryButton>Let's Talk</SecondaryButton>
                </div>
            </CollapseKit>
        </nav>
    </>
  )
}

export default Navbar