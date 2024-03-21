// Node Modules
import * as React from 'react';

// Styles
import styles from './index.module.css';

export interface NavMenuProps {
  children: React.ReactNode;
}

export const NavMenu: React.FC<NavMenuProps> = ({ children }) => (
  <a className={styles.nav_menu}>
    {children}
  </a>
);
