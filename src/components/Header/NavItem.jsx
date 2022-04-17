import React from 'react';
import './css/NavItem.css';
function NavItem({ name }) {
    const styleName = { 'border-bottom-color': '"#ee5f73;"' };
    return (<div className='desktop-navContent'>
            <div className='desktop-navLink'>
                <a href="#" data-index="0" data-color="#ee5f73" data-type="navElements" className="desktop-main">
                    {name}
                </a>
            </div>
            
        </div>);
}
export default NavItem;
