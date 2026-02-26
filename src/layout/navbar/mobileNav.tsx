import { useState } from 'react';
import { Collapse, Drawer, Select } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import logoWithText from '/logo-with-text.svg';
import { getNavMenu } from './navData';
import './mobileNav.css';
import { FaBars } from 'react-icons/fa6';
import AppearanceSettings from '../../components/appearance-setting/appearance-setting';
import { Link } from 'react-router-dom';
import LoanModal from '../../components/credit-calculator/loan-modal';
import SearchInput from '../../components/search-input/search-input';
import { useLanguage } from '../../hooks/useLanguage';
import { useTranslation } from 'react-i18next';

const MobileNav = () => {
    const [open, setOpen] = useState(false);
    const [activeTab, setActiveTab] = useState('application');

    const toggleDrawer = () => setOpen(!open);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { lang, setLang } = useLanguage();
    const { t } = useTranslation('layout', { keyPrefix: 'navbar' });
    const menuData = getNavMenu(t);

    const showModal = (tabKey: string) => {
        setActiveTab(tabKey);
        setIsModalOpen(true);
    };

    return (
        <div className="mobile_header_container">
            <div className="mobile_header_bar">
                <Link to="/" style={{ display: 'inline-block' }}>
                    <img src={logoWithText} className="logo" alt="logo" />
                </Link>
                
                <div className='action-wrapper'>
                    <SearchInput />
                    <AppearanceSettings />
                </div>
                <div className="burger_button" onClick={toggleDrawer}>
                    {open ? (
                        <CloseOutlined className="close_icon" />
                    ) : (
                        <FaBars />
                    )}
                </div>
            </div>

            <Drawer
                placement="top"
                closable={false}
                onClose={() => setOpen(false)}
                open={open}
                size={'large'}
                className="mobile_dropdown_drawer"
                style={{ marginTop: '70px' }} 
            >

                <Collapse ghost accordion expandIconPosition="end" className="mobile_nav_collapse">
                    {menuData.map((menuItem, index) => (
                        <Collapse.Panel 
                            header={<span className="panel_title">{menuItem.title}</span>} 
                            key={index}
                        >
                            <ul className="mobile_submenu_list">
                                {menuItem.items.map((item, subIndex) => (
                                    <li key={subIndex}>
                                        <a href={item.url} onClick={() => setOpen(false)}>
                                            {item.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </Collapse.Panel>
                    ))}
                </Collapse>
                
                <div className="language_switcher_container">
                    <Select
                        defaultValue="uzb"
                        variant="borderless"
                        className="lang_select"
                        popupClassName="lang_dropdown"
                        value={lang}
                        onChange={(val) => setLang(val as 'uzb' | 'rus' | 'eng')}
                    >
                        <Select.Option value="uzb"><span className="flag_item">🇺🇿 O'zbekcha</span></Select.Option>
                        <Select.Option value="rus"><span className="flag_item">🇷🇺 Русский</span></Select.Option>
                        <Select.Option value="eng"><span className="flag_item">🇺🇸 English</span></Select.Option>
                    </Select>
                </div>
                <div className="drawer_footer_actions">
                    <button onClick={() => showModal('application')} className="btn_apply">{t('actions.application')}</button>
                    <button onClick={() => showModal('credit-calculator')} className="btn_calc">{t('actions.calculator')}</button>
                </div>
                
            </Drawer>
            <LoanModal 
                isOpen={isModalOpen} 
                onClose={() => setIsModalOpen(false)} 
                activeTab={activeTab}
                setActiveTab={setActiveTab}
            />
        </div>
    );
}

export default MobileNav;