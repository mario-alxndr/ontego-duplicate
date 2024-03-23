'use client'

// Node Modules
import * as React from 'react';

// Styles
import styles from './index.module.css';

export interface ChipProps {
  children: React.ReactNode;
  type?: 'active_filter' | 'inactive_filter' | 'rental_chip';
  onClick?: () => void;
}

export const Chip: React.FC<ChipProps> = ({
  children,
  type = 'inactive_filter',
  onClick
}) => {
  const getChipStyle = () => {
    switch (type) {
      case 'active_filter':
        return styles.active_filter;
      case 'inactive_filter':
        return styles.inactive_filter;
      case 'rental_chip':
        return styles.rental_chip;
      default:
        return styles.inactive_filter;
    }
  };

  return <div className={getChipStyle()} onClick={onClick}>{children}</div>;
};
