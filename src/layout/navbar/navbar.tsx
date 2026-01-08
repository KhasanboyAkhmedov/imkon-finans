import './navbar.css';
import logoWithText from '/logo-with-text.svg';
import { glass, globus, location, phone} from '../../assets/header';
import NavDropdown from './NavDropdown';
import { navMenu } from './navData';
import MobileNav from './mobileNav';

const Navbar = () => {

    return (
        <div className="nav_wrapper_bg">
            <header className="site-header">
                <div className="container site-header__container">
                    <div className="site-header__top">
                        <img src={logoWithText} alt="logo" width="170" height="30" />
                        <input className="header_inp" type="text" placeholder="Qidiruv" />
                        <img className="menu_top" src="./images/header/menu.svg" alt="menu"/>
                        <div className="media">
                            <div className="site-header__top-info">
                                <img className="site-header__top-info-glass"
                                    src={glass}
                                    alt="site-header-top-glass" />
                                <img className="site-header__top-info-location"
                                    src={location}
                                    alt="location" />
                                <div className="site-header__top-info-translate">
                                    <img className="site-header__top-info-translate-img"
                                        src={globus} alt="Globus" />
                                    <select name="languages" id="languages">
                                        <option value="uzb">Uzbek</option>
                                        <option value="eng">English</option>
                                        <option value="rus">Russia</option>
                                    </select>
                                </div>
                            </div>
                            <div className="site-header-top-right">
                                <div className="site-header-top-right-call">
                                    <img className="site-header-top-right-img"
                                        src={phone} alt="phone" />
                                </div>
                                <div className="site-header-top-right-contact">
                                    <p className="site-header-top-right-contact-text">Biz bilan bog‘laning</p>
                                    <h2 className="site-header-top-right-contact-title">+998 74 228-32-12</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className='line'/>
                    <div className="site-header__bottom">
                        <ul className="site-header__bottom-list">
                            {navMenu.map((menu, index) => (
                                <NavDropdown
                                    key={index}
                                    menuItem={menu}
                                    variant={menu.variant ?? "stock"}
                                />
                            ))}
                        </ul>
                        <div className="site-header__bottom-button-group">
                            <button className="site-header__bottom-button-group-apply">
                                <a href="#kredit_arizasi">Ariza yuborish</a>
                            </button>
                            <button className="site-header__bottom-button-group-creditcalc">
                                <a href="#kredit_arizasi">Kredit kalkulyatori</a>
                            </button>
                        </div>
                    </div>
                </div>
                <MobileNav  />
            </header>
        </div>
    );
};

export default Navbar;
