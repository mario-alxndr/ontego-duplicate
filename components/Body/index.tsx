// Node Modules
import * as React from 'react';

// Components
import { Filter } from '../Filter';
import { ListItem } from '../ListItem';

// Styles
import styles from './index.module.css';

export const Body = () => (
  <div className={styles.body_container}>
    <Filter />
    <ListItem />
  </div>
);
