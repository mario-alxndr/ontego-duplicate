'use client';

// Node Modules
import * as React from 'react';
import cn from 'classnames';
import Image from 'next/image';

// Components
import { ItemCard } from '../ItemCard';

// Types
import { TProduct } from '@/lib/type/product';

// Styles
import styles from './index.module.css';
import { Chip } from '../Chip';

type TListItem = {
  filterredScrappedData: TProduct[];
};

export const ListItem = (props: TListItem) => {
  const { filterredScrappedData } = props;

  const [activeIndex, setActiveIndex] = React.useState<number | false>();

  const handleClickDetail = (index: number | false) => {
    if (activeIndex === index) {
      setActiveIndex(false);
    } else {
      setActiveIndex(index);
    }
  };

  const AdditionalScrapData = (Math.floor(filterredScrappedData.length / 4) + 1) * 4 - filterredScrappedData.length;
  const additionalData = new Array(AdditionalScrapData).fill(undefined);

  return (
    <div className={styles.list_item_container}>
      <div className={styles.list_item_content}>
        {[...filterredScrappedData, ...additionalData].map((filterredData, index) => {
          const itemDetailClassname = cn(styles.item_detail, {
            [styles.show]:
              typeof activeIndex === 'number' &&
              Math.floor(activeIndex / 4) === Math.floor(index / 4),
          });

          const parsedActiveIndex =
            typeof activeIndex !== 'number' ? 0 : activeIndex;

          return (
            <>
              {!!filterredData ? (
                <ItemCard onClick={() => handleClickDetail(index)} key={`${filterredData}-${index}`} item={filterredData}/>
              ) : <div/> }
              {(index + 1) % 4 === 0 && (
                <div className={itemDetailClassname}>
                  <i
                    className={styles.item_detail_close_icon}
                    onClick={() => handleClickDetail(false)}
                  />
                  <div className={styles.item_detail_content}>
                    <Image
                      src={filterredScrappedData[parsedActiveIndex].imageUrl}
                      alt={`image-url-${index}`}
                      width={215}
                      height={255}
                    />
                    <div className={styles.item_description}>
                      <p className={styles.item_title}>
                        {filterredScrappedData[parsedActiveIndex].productName}
                      </p>
                      <div className={styles.item_body}>
                        <ul>
                          <li>
                            <p className={styles.list_item_description}>
                              Price:
                              {` from ${filterredScrappedData[parsedActiveIndex].price} euros`}
                            </p>
                          </li>
                          <li>
                            <p className={styles.list_item_description}>
                              Display:
                              {` ${filterredScrappedData[parsedActiveIndex].display} inches`}
                            </p>
                          </li>
                          <li>
                            <p className={styles.list_item_description}>
                              Weight:
                              {` ${filterredScrappedData[parsedActiveIndex].weight} grams`}
                            </p>
                          </li>
                          <li>
                            <p className={styles.list_item_description}>
                              {`${filterredScrappedData[parsedActiveIndex].availableAccesorry}`}
                            </p>
                          </li>
                        </ul>
                      </div>
                      <div className={styles.item_operation_area}>
                        {filterredScrappedData[
                          parsedActiveIndex
                        ].operationArea.map((operationAreaData, index) => (
                          <Chip
                            key={`${operationAreaData}-${index}`}
                            type="inactive_filter"
                          >
                            {operationAreaData}
                          </Chip>
                        ))}
                      </div>
                    </div>
                    <div className={styles.item_our_assessment}>
                      <div className={styles.our_assessment_title}>
                        Unsere Einschätzung
                      </div>
                      {filterredScrappedData[parsedActiveIndex].ourAssessment}
                    </div>
                  </div>
                  <div className={styles.item_link_container}>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      className={styles.item_link}
                    >
                      To Manufacturer
                    </a>
                    <div className={styles.link_icon} />
                    <div/>
                  </div>
                </div>
              )}
            </>
          );
        })}
      </div>
    </div>
  );
};
