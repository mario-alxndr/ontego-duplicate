'use client';

// Node Modules
import * as React from 'react';
import cn from 'classnames';

// Component
import { ChipSelect } from '../ChipSelect';

// Lib
import { DEVICE_TYPE_OPTION, MANUFACTURER_OPTION, OPERATION_AREA_OPTION, SELECTION_OPTION } from '@/lib/constant/options';

// Styles
import styles from './index.module.css';

type TFilter = {
  selection: string[],
  selectedDeviceType: string[],
  selectedManufacturer: string[],
  selectedOperationArea: string[],
  onChangeSelection: (newValue: string[]) => void,
  onChangeDeviceType: (newValue: string[]) => void,
  onChangeManufactuer: (newValue: string[]) => void,
  onChangeOperationArea: (newValue: string[]) => void,
};

export const Filter = (props: TFilter) => {
  const {
    selection,
    selectedDeviceType,
    selectedManufacturer,
    selectedOperationArea,
    onChangeSelection,
    onChangeDeviceType,
    onChangeManufactuer,
    onChangeOperationArea,
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

            const isActive = selection.includes(name);

            return (
              <ChipSelect
                key={`selection-${name}`}
                isActive={isActive}
                label={label} 
                name={name}
                onClick={handleClickSelection}
              />
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

            const isActive = selectedDeviceType.includes(name);

            return (
              <ChipSelect 
                key={`device-${name}`}
                isActive={isActive}
                label={label} 
                name={name}
                onClick={handleClickSelection}
              />
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

              const isActive = selectedManufacturer.includes(name);

              return (
                <ChipSelect 
                  key={`manufactur-${name}`}
                  isActive={isActive}
                  label={label} 
                  name={name}
                  onClick={handleClickSelection}
                />
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

              const isActive = selectedOperationArea.includes(name);

              return (
                <ChipSelect 
                  key={`operation-area-${name}`}
                  isActive={isActive}
                  label={label} 
                  name={name}
                  onClick={handleClickSelection}
                />
              )
            })}
          </div>
        </div>
      </div>
      <div className={styles.filter_bottom}>
        <p className={styles.filter_caption}>All information/prices without guarantee</p>
        <div>
          <p className={styles.reset_button}>reset filter</p>
          <p className={styles.toggle_button} onClick={handleClickToggleFilter}>
            {isOpen ? 'Hide filters' : 'Show more filters'}
          </p>
        </div>
      </div>
    </div>
  )
};
