// Node Modules
import * as React from 'react';

// Styles
import styles from "./index.module.css";

export interface NavItemProps {
  children: React.ReactNode;
  href: string;
}

export const NavItem: React.FC<NavItemProps> = ({ children, href }) => (
  <a href={href} className={styles.nav_item}>
    {children}
  </a>
);
