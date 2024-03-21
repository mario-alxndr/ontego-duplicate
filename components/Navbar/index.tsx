// Node Modules
import * as React from 'react';
import Image from 'next/image';

// Component
import { navMenu } from '../../lib/data/scrappedData';
import { NavMenu } from './../../components/NavMenu';

// Style
import styles from './index.module.css';

export interface NavBarProps {}

export const NavBar: React.FC<NavBarProps> = () => (
  <nav className={styles.top_nav_bar_container}>
    <div className={styles.top_nav_bar}>
      <Image
        src="https://ontego.de/images/commsult/logos/Ontego_Business_Mobi.svg"
        alt="logo"
        width={165}
        height={22}
      />
      <div className={styles.nav_menu_container}>
        {
          navMenu.map((item, index) => (
            <NavMenu key={index}>
              {item.menu}
            </NavMenu>
          ))
        }
      </div>
      <div className={styles.request_demo_button}>
        <p className={styles.request_demo_caption}>
          Request a demo
        </p>
        <img
          className={styles.request_demo_arrow}
          width={30}
          height={18}
        />
      </div>
    </div>
  </nav>
);
