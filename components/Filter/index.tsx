'use client';

// Node Modules
import * as React from 'react';
import cn from 'classnames';

// Component
import { Chip } from '../Chip';
import { InputRange } from '../InputRange';

// Lib
import { DEVICE_TYPE_OPTION, MANUFACTURER_OPTION, OPERATION_AREA_OPTION, SELECTION_OPTION } from '@/lib/constant/options';

// Styles
import styles from './index.module.css';

type TFilter = {
  price: number[],
  selection: string[],
  selectedDeviceType: string[],
  selectedManufacturer: string[],
  selectedOperationArea: string[],
  onChangeSelection: (newValue: string[]) => void,
  onChangeDeviceType: (newValue: string[]) => void,
  onChangeManufactuer: (newValue: string[]) => void,
  onChangeOperationArea: (newValue: string[]) => void,
  onChangePrice: (newValue: number[]) => void;
  onChangeWeight: (newValue: number[]) => void;
  onClickResetFilter: () => void,
  weight: number[],
};

export const Filter = (props: TFilter) => {
  const {
    price,
    selection,
    selectedDeviceType,
    selectedManufacturer,
    selectedOperationArea,
    onChangeSelection,
    onChangeDeviceType,
    onChangeManufactuer,
    onChangeOperationArea,
    onChangePrice,
    onChangeWeight,
    onClickResetFilter,
    weight,
  } = props;
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
          {SELECTION_OPTION.map((selectionOption) => {
            const { label, name } = selectionOption;
            
            const handleClickSelection = () => {
              if(name === 'all') {
                onChangeSelection(['all']);
              } else if(selection.includes(name)) {
                const newSelection = selection.filter((selectionOption) => selectionOption !== name);
                onChangeSelection(newSelection);
              } else {
                const newSelection = selection.filter((selectionOption) => selectionOption !== 'all');
                onChangeSelection([...newSelection, name]);
              }
            };

            const type = selection.includes(name) ? 'active_filter' : 'inactive_filter';

            return (
              <Chip
                key={`selection-${name}`}
                onClick={handleClickSelection}
                type={type}
              >
                {label}
              </Chip>
            )
          })}
        </div>
      </div>
      <div className={styles.filter_row}>
        <div className={styles.filter_row_content}>
          <p className={styles.filter_label}>Device Type</p>
          {DEVICE_TYPE_OPTION.map((selection) => {
            const { label, name } = selection;
            
            const handleClickSelection = () => {
              if(selectedDeviceType.includes(name)) {
                const newSelection = selectedDeviceType.filter((selectionOption) => selectionOption !== name);
                onChangeDeviceType(newSelection);
              } else {
                onChangeDeviceType([...selectedDeviceType, name]);
              }
            };

            const type = selectedDeviceType.includes(name) ? 'active_filter' : 'inactive_filter';

            return (
              <Chip 
                key={`device-${name}`}
                onClick={handleClickSelection}
                type={type}
              >
                {label}
              </Chip>
            )
          })}
        </div>
      </div>
      <div className={additionalFilterClassnames}>
        <div className={styles.filter_row}>
          <div className={styles.filter_row_content}>
            <p className={styles.filter_label}>Manufacturer</p>
            {MANUFACTURER_OPTION.map((selection) => {
              const { label, name } = selection;
              
              const handleClickSelection = () => {
                if(selectedManufacturer.includes(name)) {
                  const newSelection = selectedManufacturer.filter((selectionOption) => selectionOption !== name);
                  onChangeManufactuer(newSelection);
                } else {
                  onChangeManufactuer([...selectedManufacturer, name]);
                }
              };

              const type = selectedManufacturer.includes(name) ? 'active_filter' : 'inactive_filter';

              return (
                <Chip 
                  key={`manufactur-${name}`}
                  onClick={handleClickSelection}
                  type={type}
                >
                  {label}
                </Chip>
              )
            })}
          </div>
        </div>
        <div className={styles.filter_row}>
          <div className={styles.filter_row_content}>
            <p className={styles.filter_label}>operation area</p>
            {OPERATION_AREA_OPTION.map((selection) => {
              const { label, name } = selection;
              
              const handleClickSelection = () => {
                if(selectedOperationArea.includes(name)) {
                  const newSelection = selectedOperationArea.filter((selectionOption) => selectionOption !== name);
                  onChangeOperationArea(newSelection);
                } else {
                  onChangeOperationArea([...selectedOperationArea, name]);
                }
              };

              const type = selectedOperationArea.includes(name) ? 'active_filter' : 'inactive_filter';

              return (
                <Chip 
                  key={`operation-area-${name}`}
                  type={type}
                  onClick={handleClickSelection}
                >
                  {label}
                </Chip>
              )
            })}
          </div>
        </div>
        <div className={styles.filter_range_container}>
          <InputRange 
            min={0}
            max={3500}
            step={20}
            value={price} 
            onChange={onChangePrice}
            title={'Price'}
          />
          <InputRange 
            min={35}
            max={1300}
            step={20}
            value={weight} 
            onChange={onChangeWeight}
            title={'Weight'}
          />
        </div>
      </div>
      <div className={styles.filter_bottom}>
        <p className={styles.filter_caption}>All information/prices without guarantee</p>
        <div>
          <p className={styles.reset_button} onClick={onClickResetFilter}>reset filter</p>
          <p className={styles.toggle_button} onClick={handleClickToggleFilter}>
            {isOpen ? 'Hide filters' : 'Show more filters'}
          </p>
        </div>
      </div>
    </div>
  )
};
