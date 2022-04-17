import React from 'react';
import DesktopActions from './DesktopActions';
import LogoContainer from './LogoContainer';
import NavBar from './NavBar';
import './css/DesktopContainer.css';
function DesktopContainer() {
    return (<header className="desktop-container" id="desktop-header-cnt" data-reactid="3">

        <div className="desktop-bound" data-reactid="14">
            <LogoContainer />
            <NavBar />
            <DesktopActions />
        </div>
        </header>);
}
export default DesktopContainer;
