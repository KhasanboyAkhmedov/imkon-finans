import logoWithText from '/logo-with-text.svg';
import { menu } from '../../assets/header';
import './mobileNav.css';

const MobileNav = () => {

    return (
        <div className="mobile_header">
            <img src={logoWithText} className="logo" alt="logo"/>
            <img className="burger" src={menu} alt="menu"/>
        </div>
    )
}

export default MobileNav