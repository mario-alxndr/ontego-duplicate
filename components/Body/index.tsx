'use client';

// Node Modules
import * as React from 'react';

// Components
import { Filter } from '../Filter';
import { ListItem } from '../ListItem';

// Styles
import styles from './index.module.css';

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
