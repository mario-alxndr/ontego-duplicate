// Node Modules
import * as React from 'react';

// Styles
import styles from './index.module.css';

export const Chip = ({ children }: React.PropsWithChildren<any>) => {
  return (
    <div className={styles.chip_container}>
      {children}
    </div>
  )
};
