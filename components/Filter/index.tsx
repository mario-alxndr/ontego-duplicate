'use client';

// Node Modules
import * as React from 'react';
import cn from 'classnames';

// Component
import { Chip } from '../Chip';

// Styles
import styles from './index.module.css';

export const Filter = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleClickToggleFilter = () => {
    setIsOpen(!isOpen);
  };

  const additionalFilterClassnames = cn(styles.additional_filter, {
    [styles.hide]: !isOpen
  });

  return (
    <div className={styles.filter_container}>
      <div className={styles.filter_row}>
        <div className={styles.filter_row_content}>
          <p className={styles.filter_label}>Selection</p>
          <Chip>All devices</Chip>
          <Chip>Our favorites</Chip>
          <Chip>Rental equipment</Chip>
        </div>
      </div>
      <div className={styles.filter_row}>
        <div className={styles.filter_row_content}>
          <p className={styles.filter_label}>Device Type</p>
          <Chip>handheld computer</Chip>
          <Chip>Smartphone</Chip>
          <Chip>Forklift terminal/tablet</Chip>
          <Chip>Wearable/handheld scanner</Chip>
          <Chip>Printer</Chip>
        </div>
      </div>
      <div className={additionalFilterClassnames}>
        <div className={styles.filter_row}>
          <div className={styles.filter_row_content}>
            <p className={styles.filter_label}>Manufacturer</p>
            <Chip>ACD</Chip>
            <Chip>Advantech</Chip>
            <Chip>Bixolone</Chip>
            <Chip>Casio</Chip>
            <Chip>Cat</Chip>
            <Chip>Cipherlab</Chip>
            <Chip>Datalogic</Chip>
            <Chip>Cowardly</Chip>
            <Chip>Getac</Chip>
            <Chip>Gigaset</Chip>
            <Chip>Honeywell</Chip>
            <Chip>i.Safe Mobile</Chip>
            <Chip>iData</Chip>
            <Chip>Keyence</Chip>
            <Chip>KoemTac</Chip>
            <Chip>Newland</Chip>
            <Chip>Panasonic</Chip>
            <Chip>Point Mobile</Chip>
            <Chip>ProGlobe</Chip>
            <Chip>Samsung</Chip>
            <Chip>zebra</Chip>
          </div>
        </div>
        <div className={styles.filter_row}>
          <div className={styles.filter_row_content}>
            <p className={styles.filter_label}>operation area</p>
            <Chip>Warehouse & Production</Chip>
            <Chip>Beverage logistics</Chip>
            <Chip>maintenance</Chip>
            <Chip>Field Service</Chip>
            <Chip>Healthcare</Chip>
            <Chip>Explosion proof</Chip>
          </div>
        </div>
      </div>
      <div className={styles.filter_bottom}>
        <p className={styles.filter_caption}>All information/prices without guarantee</p>
        <div>
          <p className={styles.reset_button}>reset filter</p>
          <p className={styles.toggle_button} onClick={handleClickToggleFilter}>
            {isOpen ? 'Hide filters' : 'Show more filters'}
          </p>
        </div>
      </div>
    </div>
  )
};
