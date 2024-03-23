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
  max: number;
  min: number;
  step: number;
  onChange: (newValue: number[]) => void;
  title: string;
}

export const InputRange = (props: TInputRange) => {
  const { max, min, step, value, onChange } = props;

  return (
    <div className={styles.input_range_wrapper}>
      <RangeSlider 
        min={min}
        max={max}
        step={step}
        onInput={onChange}
        value={value} 
      />
    </div>
  )
}
