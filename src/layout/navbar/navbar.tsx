import './navbar.css';
import logoWithText from '/logo-with-text.svg';
import NavDropdown from './NavDropdown';
import { getNavMenu } from './navData';
import MobileNav from './mobileNav';
import AppearanceSettings from '../../components/appearance-setting/appearance-setting';
import { GrLanguage, GrLocation } from 'react-icons/gr';
import { Select } from 'antd';
import { FiPhone } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import LoanModal from '../../components/credit-calculator/loan-modal';
import SearchInput from '../../components/search-input/search-input';
import { useLanguage } from '../../hooks/useLanguage';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
    const [isSticky, setIsSticky] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [activeTab, setActiveTab] = useState('application');
    const { lang, setLang } = useLanguage();
    const { t } = useTranslation('layout', { keyPrefix: 'navbar' });
    const menuData = getNavMenu(t);

    const showModal = (tabKey: string) => {
        setActiveTab(tabKey);
        setIsModalOpen(true);
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 250);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={`nav_wrapper_bg ${isSticky ? 'is-sticky' : ''}`}>
            <header className="site-header">
                <div className="container site-header__container">
                    <div className="site-header__top">
                        <Link to="/" style={{ display: 'inline-block' }}>
                            <img src={logoWithText} alt="logo" width="170" height="30" />
                        </Link>

                        <SearchInput />

                        <img className="menu_top" src="./images/header/menu.svg" alt="menu"/>
                        
                        <div className="media">
                            <div className="site-header__top-info">
                                <AppearanceSettings />
                                <a 
                                    href="https://yandex.uz/maps/-/CPAv5C3L" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="site-header__top-info-location-link"
                                >
                                    <GrLocation className='site-header__top-info-location-icon' />
                                </a>
                                <div className="lang_wrapper">
                                    <GrLanguage className="lang_icon" />
                                    <Select defaultValue="uzb" variant="borderless" className="lang_select" value={lang}
                                        onChange={(val) => setLang(val as 'uzb' | 'rus' | 'eng')}
                                    >
                                        <Select.Option value="uzb"><span className="flag_item">O'zb</span></Select.Option>
                                        <Select.Option value="rus"><span className="flag_item">Рус</span></Select.Option>
                                        <Select.Option value="eng"><span className="flag_item">Eng</span></Select.Option>
                                    </Select>
                                </div>
                            </div>
                            <a href='tel:+998782981235' className="site-header-top-right">
                                <div className="site-header-top-right-call">
                                    <FiPhone className="site-header-top-right-phone-icon" />
                                </div>
                                <div className="site-header-top-right-contact">
                                    <p className="site-header-top-right-contact-text">{t('contact_us')}</p>
                                    <h2 className="site-header-top-right-contact-title">+998 78 298-12-35</h2>
                                </div>
                            </a>
                        </div>
                    </div>
                    <hr className='line'/>
                    <div className="site-header__bottom">
                        <ul className="site-header__bottom-list">
                            {menuData.map((menu, index) => (
                                <NavDropdown key={index} menuItem={menu} variant={menu.variant ?? "stock"} />
                            ))}
                        </ul>
                        <div className="site-header__bottom-button-group">
                            <button onClick={() => showModal('application')} className="site-header__bottom-button-group-apply">{t('actions.application')}</button>
                            <button onClick={() => showModal('credit-calculator')} className="site-header__bottom-button-group-creditcalc">{t('actions.calculator')}</button>
                        </div>
                    </div>
                </div>
                <MobileNav />
            </header>
            <LoanModal 
                isOpen={isModalOpen} 
                onClose={() => setIsModalOpen(false)} 
                activeTab={activeTab} 
                setActiveTab={setActiveTab} 
            />
        </div>
    );
};

export default Navbar;