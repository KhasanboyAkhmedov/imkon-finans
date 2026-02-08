import React from 'react';
import { Dropdown } from 'antd';
import type { MenuProps } from 'antd';
import { arrowDownGrey } from "../../assets/header";
import './navDropDown.css';
import type { NavDropdownVariant, NavMenu } from '../../types/navbar.types';

interface NavDropdownProps {
  menuItem: NavMenu;
  variant?: NavDropdownVariant;
}

const NavDropdown: React.FC<NavDropdownProps> = ({ menuItem, variant = "stock" }) => {
  const items: MenuProps['items'] = menuItem.items.map((item, index) => ({
    key: index,
    label: (
      <a href={item.url} rel="noopener noreferrer">
        {item.label}
      </a>
    ),
  }));

  return (
    <li className="nav-dropdown-item">
      <Dropdown
        menu={{ items }}
        placement="bottomLeft"
        trigger={['hover']}
        overlayClassName="custom-nav-dropdown"
      >
        <div className={`nav-dropdown-trigger nav-dropdown--${variant}`}>
          <span className="nav-dropdown__link">
            {menuItem.title}
          </span>
          <img
            className="nav-dropdown__icon"
            src={arrowDownGrey}
            alt="arrow-down"
          />
        </div>
      </Dropdown>
    </li>
  );
};

export default NavDropdown;