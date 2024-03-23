// Node Modules
import * as React from 'react';
import cn from 'classnames';

// Styles
import styles from './index.module.css';

type TChipSelectProps = {
  isActive?: boolean;
  label: string;
  name: string;
  onClick?: () => void;
};

export const ChipSelect = (props: TChipSelectProps) => {
  const { isActive = false, label, name, onClick } = props;
  
  const chipSelectClassname = cn(styles.chip_container, {
    [styles.active]: isActive,
  });

  return (
    <div className={chipSelectClassname} onClick={onClick}>
      {label}
    </div>
  )
};