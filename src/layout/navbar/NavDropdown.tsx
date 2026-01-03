import { arrowDownGrey } from "../../assets/header";
import type { NavDropdownVariant, NavMenu } from "../../types/navbar.types";
import './navDropDown.css';


interface NavDropdownProps {
  menuItem: NavMenu;
  variant?: NavDropdownVariant;
}

const NavDropdown: React.FC<NavDropdownProps> = ({ menuItem, variant = "stock" }) => {
  return (
    <li className={`nav-dropdown nav-dropdown--${variant}`}>
      <a className="nav-dropdown__link" href={menuItem.href}>
        {menuItem.title}
      </a>

      <img
        className="nav-dropdown__icon"
        src={arrowDownGrey}
        alt="arrow-down"
      />

      <ul className={`nav-dropdown__menu nav-dropdown__menu--${variant}`}>
        {menuItem.items.map((item, index) => (
          <li key={index}>
            <a href={item.href}>{item.label}</a>
          </li>
        ))}
      </ul>
    </li>
  );
};

export default NavDropdown;
