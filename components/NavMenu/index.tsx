import * as React from 'react';
import styles from './index.module.css';

export interface NavMenuProps {
  children: React.ReactNode;
  handleMouseEnter: (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => void;
  menuChange: () => void;
  activeMenu: boolean;
}

export const NavMenu: React.FC<NavMenuProps> = ({
  children,
  handleMouseEnter,
  menuChange,
  activeMenu,
}) => (
  <a
    className={activeMenu ? styles.nav_menu_active : styles.nav_menu}
    onMouseEnter={handleMouseEnter}
    onMouseLeave={menuChange}
  >
    {children}
  </a>
);
