'use client'

// Node Modules
import * as React from 'react';
import Image from 'next/image';

// Component
import { NavMenu } from './../../components/NavMenu';
import { NavSubmenu } from '../NavSubmenu';
import { NavItem } from '../NavItem';

// Lib
import { navMenu } from '../../lib/data/scrappedData';

// Styles
import styles from './index.module.css';

export interface NavBarProps {}

export const NavBar = () => {
  const [activeMenu, setActiveMenu] = React.useState<string>('');
  const [activeSubMenu, setActiveSubMenu] = React.useState<string>('');

  const handleMouseEnterMenu = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    setActiveMenu(event.currentTarget.textContent || '');
  };

  const handleMouseEnterSubMenu = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    setActiveSubMenu(event.currentTarget.textContent || '');
  };

  React.useEffect(() => {
    console.log(activeMenu, activeSubMenu);
  }, [activeMenu, activeSubMenu]);

  return (
    <nav className={styles.nav_bar}>
      <div className={styles.top_nav_bar_container}>
        <div className={styles.top_nav_bar}>
          <div className={styles.top_logo}>
            <Image
              src="https://ontego.de/images/commsult/logos/Ontego_Business_Mobi.svg"
              alt="logo"
              width={165}
              height={22}
            />
          </div>
          <div className={styles.nav_menu_container}>
            {navMenu.map((item, index) => (
              <NavMenu
                key={index + item.menu + 'top'}
                handleMouseEnter={handleMouseEnterMenu}
                menuChange={() => setActiveMenu('')}
                activeMenu={
                  activeMenu === item.menu
                    ? true
                    : activeMenu === '' && item.menu === 'Products'
                    ? true
                    : false
                }
              >
                {item.menu}
              </NavMenu>
            ))}
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
      </div>
      <div
        className={
          activeMenu && activeMenu === 'Products'
            ? styles.bot_nav_bar_container_active
            : styles.bot_nav_bar_container
        }
        onMouseEnter={() => setActiveMenu(activeMenu)}
        onMouseLeave={() => setActiveMenu('')}
      >
        <div className={styles.bot_nav_bar}>
          <div className={activeMenu ? styles.bot_logo_active :  styles.bot_logo}>
            <Image
              src="https://ontego.de/images/commsult/logos/Ontego_subline.svg"
              alt="logo"
              width={104}
              height={55}
            />
          </div>
          <div className={styles.nav_submenu_container}>
            {navMenu.map((item, index) => {
              if (
                item.menu === activeMenu ||
                (activeMenu === '' && item.menu === 'Products')
              )
                return (
                  <>
                    <div key={index + item.menu} className={styles.nav_submenu}>
                      {item.submenu.map((subitem, subindex) => (
                        <div
                          key={subindex + subitem.subMenu}
                          className={activeMenu ? styles.vertical_submenu : styles.submenu}
                        >
                          <NavSubmenu
                            key={subindex + subitem.subMenu}
                            href={subitem.link}
                            handleMouseEnter={handleMouseEnterSubMenu}
                            menuChange={() => setActiveSubMenu('')}
                            activeSubMenu={
                              activeSubMenu === subitem.subMenu
                                ? true
                                : activeSubMenu === '' &&
                                  subitem.subMenu === 'Mobile Devices'
                                ? true
                                : false
                            }
                          >
                            {subitem.subMenu}
                          </NavSubmenu>
                          {activeMenu && (
                            <div
                              className={
                                styles.nav_menu_item_vertical_container
                              }
                              onMouseEnter={() =>
                                setActiveSubMenu(subitem.subMenu)
                              }
                              onMouseLeave={() => {
                                setActiveSubMenu('');
                              }}
                            >
                              {subitem.item.map((item, index) => (
                                <NavItem
                                  key={index + item.item}
                                  href={item.link}
                                >
                                  {item.item}
                                </NavItem>
                              ))}
                            </div>
                          )}
                          {!activeMenu && activeSubMenu === subitem.subMenu && (
                            <div
                              className={styles.nav_menu_item_container}
                              onMouseEnter={() =>
                                setActiveSubMenu(activeSubMenu)
                              }
                              onMouseLeave={() => {
                                setActiveSubMenu('');
                              }}
                            >
                              {navMenu
                                .find(
                                  (item) =>
                                    item.menu === activeMenu ||
                                    (activeMenu === '' &&
                                      item.menu === 'Products')
                                )
                                ?.submenu.find(
                                  (subitem) => subitem.subMenu === activeSubMenu
                                )
                                ?.item.map((subitem, index) => (
                                  <NavItem
                                    key={index + subitem.item}
                                    href={subitem.link}
                                  >
                                    {subitem.item}
                                  </NavItem>
                                ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </>
                );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};
