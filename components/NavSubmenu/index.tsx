import * as React from 'react';
import styles from "./index.module.css";

export interface NavSubmenuProps {
  children: React.ReactNode;
  href: string;
}

export const NavSubmenu: React.FC<NavSubmenuProps> = ({ children, href }) => (
  <a href={href} className={styles.nav_submenu}>
    {children}
  </a>
);
