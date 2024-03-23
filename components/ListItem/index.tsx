// Node Modules
import * as React from 'react';

// Components
import { ItemCard } from '../ItemCard';

// Types
import { TProduct } from '@/lib/type/product';

// Styles
import styles from './index.module.css';

type TListItem = {
  filterredScrappedData: TProduct[]
};

export const ListItem = (props: TListItem) => {
  const { filterredScrappedData } = props;

  return (
    <div className={styles.list_item_container}>
      <div className={styles.list_item_content}>
        {filterredScrappedData.map((filterredData, index) => {
          return (
            <ItemCard key={`${filterredData}-${index}`} item={filterredData}/>
          )
        })}
      </div>
    </div>
  )
}
