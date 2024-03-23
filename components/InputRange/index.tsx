'use client'

// Node Modules
import React from 'react';
// @ts-ignore
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";

// Styles
import styles from './index.module.css';

type TInputRange = {
  value: number[];
  format?: string;
  max: number;
  min: number;
  step: number;
  onChange: (newValue: number[]) => void;
  title: string;
}

export const InputRange = (props: TInputRange) => {
  const { format, max, min, step, title, value, onChange } = props;

  return (
    <div className={styles.input_range_container}>
      <p className={styles.input_range_title}>{title}</p>
      <div className={styles.input_range_wrapper}>
        <p className={styles.input_min}>
          {value[0]}
        </p>
          {!!format && (<p className={styles.format}>{format}</p>)}
        <RangeSlider 
          min={min}
          max={max}
          step={step}
          onInput={onChange}
          value={value} 
        />
        <p className={styles.input_max}>
          {value[1]}
        </p>
        {!!format && (<p className={styles.format}>{format}</p>)}
      </div>
    </div>
  )
}
