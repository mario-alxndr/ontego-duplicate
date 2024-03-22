import * as React from 'react';
import styles from './index.module.css';

export interface NavSubmenuProps {
  children: React.ReactNode;
  href: string;
  handleMouseEnter: (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => void;
  menuChange: () => void;
  activeSubMenu: boolean;
}

export const NavSubmenu: React.FC<NavSubmenuProps> = ({
  children,
  href,
  handleMouseEnter,
  menuChange,
  activeSubMenu,
}) => (
  <a
    href={href}
    className={activeSubMenu ? styles.nav_submenu_active : styles.nav_submenu}
    onMouseEnter={handleMouseEnter}
    onMouseLeave={menuChange}
  >
    {children}
  </a>
);
