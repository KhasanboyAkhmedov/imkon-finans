import './navbar.css';
import logoWithText from '/logo-with-text.svg';
import NavDropdown from './NavDropdown';
import { navMenu } from './navData';
import MobileNav from './mobileNav';
import AppearanceSettings from '../../components/appearance-setting/appearance-setting';
import { GrLanguage, GrLocation } from 'react-icons/gr';
import { Select } from 'antd';
import { FiPhone } from 'react-icons/fi';

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
                                <AppearanceSettings />
                                <a 
                                    href="https://yandex.uz/maps/org/196915386086/?ll=72.354256%2C40.765394&z=16.28" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="site-header__top-info-location-link"
                                >
                                    <GrLocation className='site-header__top-info-location-icon' />
                                </a>
                                <div className="lang_wrapper">
                                    <GrLanguage className="lang_icon" />
                                    <Select
                                        defaultValue="uz"
                                        variant="borderless"
                                        className="lang_select"
                                        popupClassName="lang_dropdown"
                                        onChange={(val) => console.log("Lang:", val)}
                                    >
                                        <Select.Option value="uz">
                                            <span className="flag_item">O'zb</span>
                                        </Select.Option>
                                        <Select.Option value="ru">
                                            <span className="flag_item">Рус</span>
                                        </Select.Option>
                                        <Select.Option value="en">
                                            <span className="flag_item">Eng</span>
                                        </Select.Option>
                                    </Select>
                                </div>
                            </div>
                            <a href='tel:+998742283212' className="site-header-top-right">
                                <div className="site-header-top-right-call">
                                    <FiPhone className="site-header-top-right-phone-icon" />
                                </div>
                                <div className="site-header-top-right-contact">
                                    <p className="site-header-top-right-contact-text">Biz bilan bog‘laning</p>
                                    <h2 className="site-header-top-right-contact-title">+998 74 228-32-12</h2>
                                </div>
                            </a>
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
