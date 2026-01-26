import { useState } from 'react';
import { Collapse, Drawer, Select } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import logoWithText from '/logo-with-text.svg';
import { navMenu } from './navData';
import './mobileNav.css';
import { FaBars } from 'react-icons/fa6';

const MobileNav = () => {
    const [open, setOpen] = useState(false);

    const toggleDrawer = () => setOpen(!open);

    return (
        <div className="mobile_header_container">
            <div className="mobile_header_bar">
                <img src={logoWithText} className="logo" alt="logo" />
                
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
                height="auto"
                className="mobile_dropdown_drawer"
                style={{ marginTop: '70px' }} 
            >

                <Collapse ghost accordion expandIconPosition="end" className="mobile_nav_collapse">
                    {navMenu.map((menuItem, index) => (
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
                        defaultValue="uz"
                        variant="borderless"
                        className="lang_select"
                        popupClassName="lang_dropdown"
                        onChange={(val) => console.log("Lang:", val)}
                    >
                        <Select.Option value="uz">
                            <span className="flag_item">🇺🇿 O'zbekcha</span>
                        </Select.Option>
                        <Select.Option value="ru">
                            <span className="flag_item">🇷🇺 Русский</span>
                        </Select.Option>
                        <Select.Option value="en">
                            <span className="flag_item">🇺🇸 English</span>
                        </Select.Option>
                    </Select>
                </div>
                <div className="drawer_footer_actions">
                    <button className="btn_apply">Ariza yuborish</button>
                    <button className="btn_calc">Kredit kalkulyatori</button>
                </div>
            </Drawer>
        </div>
    );
}

export default MobileNav;