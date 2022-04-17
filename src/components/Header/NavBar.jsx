import React from 'react';
import NavItem from './NavItem';
import './css/NavBar.css';
const navItemList = ['Men', 'Women', 'KIDS', 'Home & Living', 'Beauty', 'Studio'];
function NavBar() {
    return (<nav className="desktop-navbar">
            <div className='desktop-navLinks'>
                {navItemList.map(item => (<NavItem name={item}/>))}
            </div>
        </nav>);
}
export default NavBar;
