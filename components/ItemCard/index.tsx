'use client';
// Node Modules
import * as React from 'react';

// Styles
import styles from './index.module.css';
import { TProduct } from '@/lib/type/product';
import { Chip } from '@/components/Chip';

export interface ItemCardProps {
  item: TProduct;
}

export const ItemCard: React.FC<ItemCardProps> = ({ item }) => {
  const [hoverState, setHoverState] = React.useState(false);
  const handleOnMouseEnter = () => {
    setHoverState(true);
  };
  const handleOnMouseLeave = () => {
    setHoverState(false);
  };

  return (
    <div className={styles.card_container}>
      {(item.isFavorite || item.isRentalAvailable) && (
        <div className={styles.chip_container}>
          {item.isRentalAvailable && (
            <div className={styles.chip_item}>
              <Chip type={'rental_chip'}>Rental</Chip>
            </div>
          )}
          {item.isFavorite && (
            <div className={styles.chip_item}>
              <Chip type={'active_filter'}>Favourite</Chip>
            </div>
          )}
        </div>
      )}
      <div
        className={styles.image_container}
        onMouseEnter={handleOnMouseEnter}
        onMouseLeave={handleOnMouseLeave}
      >
        <div
          className={styles.card_image}
          style={{
            backgroundImage: `url('${item.imageUrl}')`,
          }}
        ></div>
        <div
          className={hoverState ? styles.card_overlay : styles.card_overlay_off}
        />
      </div>
      <div className={styles.card_text}>{item.productName}</div>
    </div>
  );
};
