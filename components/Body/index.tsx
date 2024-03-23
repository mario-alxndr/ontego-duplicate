'use client';

// Node Modules
import * as React from 'react';

// Components
import { Filter } from '../Filter';
import { ListItem } from '../ListItem';

// Data
import { productListConfig } from '@/app/scrappedData';

// Styles
import styles from './index.module.css';
import { TProduct } from '@/lib/type/product';

export const Body = () => {
  // Filter State
  const [selection, setSelection] = React.useState<string[]>([]);
  const [selectedDeviceType, setSelectedDeviceType] = React.useState<string[]>([]);
  const [selectedManufacturer, setSelectedManufacturer] = React.useState<string[]>([]);
  const [selectedOperationArea, setSelectedOperationArea] = React.useState<string[]>([]);
  const [price, setPrice] = React.useState<ReadonlyArray<number>>([
    0, 3500,
  ])
  const [weight, setWeight] = React.useState<ReadonlyArray<number>>([
    0, 1300,
  ])

  const hanldeChangeSelection = (newValue: string[]) => {
    setSelection(newValue)
  };

  const handleChangeDeviceType = (newValue: string[]) => {
    setSelectedDeviceType(newValue)
  };

  const handleChangeManufactuer = (newValue: string[]) => {
    setSelectedManufacturer(newValue)
  };

  const handleChangeOperationArea = (newValue: string[]) => {
    setSelectedOperationArea(newValue)
  };

  const handleResetFilter = () => {
    setSelection([]);
    setSelectedDeviceType([]);
    setSelectedManufacturer([]);
    setSelectedOperationArea([]);
  }

  const handleChangePrice = (newValue: ReadonlyArray<number>) => {
    setPrice(newValue)
  }

  const handleChangeWeight = (newValue: ReadonlyArray<number>) => {
    setWeight(newValue)
  }

  // Filter Data
  const filterredScrappedData = React.useMemo(() => {
    return productListConfig.filter((productRecord: TProduct) => {
      // Selection Filter
      let isMatchSelection = true;

      if(selection.length === 2 && !productRecord.isFavorite && !productRecord.isRentalAvailable) isMatchSelection = false;
      else if(selection[0] === 'favorites' && !productRecord.isFavorite) isMatchSelection = false;
      else if(selection[0] === 'rental' && !productRecord.isRentalAvailable) isMatchSelection = false;

      // Device
      const isMatchDevice = true;

      // // Manufacturer Option
      const isMatchManufacturer = selectedManufacturer.length > 0 ? 
        !!selectedManufacturer.find(
          (selectedManufactur) => productRecord.productName.toLowerCase().includes(selectedManufactur.toLowerCase())
        ) : 
        true;
    
      // Operation Area
      const isMatchOperationArea = selectedOperationArea.length > 0 ? 
          productRecord.operationArea.filter((operationAreaData) => {
            return selectedOperationArea.indexOf(operationAreaData) !== -1;
          }).length > 0 ? true : false 
        : true;

      if(
        // Selection Filter
        isMatchSelection &&

        // Manufacturer Filter
        isMatchManufacturer &&

        // Device Filter
        isMatchDevice &&

        // Operation Area Filter
        isMatchOperationArea
      ) {
        return productRecord;
      }
    });
  }, [
    JSON.stringify(selection),
    JSON.stringify(selectedDeviceType),
    JSON.stringify(selectedManufacturer),
    JSON.stringify(selectedOperationArea),
  ]);

  console.log('filterredScrappedData', filterredScrappedData);

  return (
    <div className={styles.body_container}>
      <Filter
        selection={selection}
        selectedDeviceType={selectedDeviceType}
        selectedManufacturer={selectedManufacturer}
        selectedOperationArea={selectedOperationArea}
        onChangeSelection={hanldeChangeSelection}
        onChangeDeviceType={handleChangeDeviceType}
        onChangeManufactuer={handleChangeManufactuer}
        onChangeOperationArea={handleChangeOperationArea}
        onClickResetFilter={handleResetFilter}
        price={price}
        onChangePrice={handleChangePrice}
        weight={weight}
        onChangeWeight={handleChangeWeight}
      />
      <ListItem />
    </div>
  )
};
