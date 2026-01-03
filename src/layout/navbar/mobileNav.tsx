import { useState } from 'react';
import logoWithText from '/logo-with-text.svg';
import { menu } from '../../assets/header';
import './mobileNav.css';
const MobileNav = () => {
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <div className="mobile_header">
            <img src={logoWithText} className="logo" alt="logo"/>
            <img onClick={() => setMobileOpen(true)} className="burger" src={menu} alt="menu"/>
        </div>
    )
}

export default MobileNav