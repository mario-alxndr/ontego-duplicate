// Node Modules
import * as React from 'react';
import { createRoot } from 'react-dom/client'
import { useRanger, Ranger } from '@tanstack/react-ranger'

type InputRangeProps = {
  values: ReadonlyArray<number>;
  onChangeValue: (newValue: ReadonlyArray<number>) => void;
};

export const InputRange = (props: InputRangeProps) => {
  const { values, onChangeValue } = props;

  const rangerRef = React.useRef<HTMLDivElement>(null)
  const rangerInstance = useRanger<HTMLDivElement>({
    getRangerElement: () => rangerRef.current,
    values,
    min: 0,
    max: 100,
    stepSize: 5,
    onChange: (instance: Ranger<HTMLDivElement>) =>
      onChangeValue(instance.sortedValues),
  })
  
  return (
    <div
      ref={rangerRef}
      style={{
        position: 'relative',
        userSelect: 'none',
        height: '4px',
        background: '#ddd',
        boxShadow: 'inset 0 1px 2px rgba(0,0,0,.6)',
        borderRadius: '2px',
      }}
    >
      {rangerInstance
        .handles()
        .map(
          (
            {
              value,
              onKeyDownHandler,
              onMouseDownHandler,
              onTouchStart,
              isActive,
            },
            i,
          ) => (
            <button
              key={i}
              onKeyDown={onKeyDownHandler}
              onMouseDown={onMouseDownHandler}
              onTouchStart={onTouchStart}
              role="slider"
              aria-valuemin={rangerInstance.options.min}
              aria-valuemax={rangerInstance.options.max}
              aria-valuenow={value}
              style={{
                position: 'absolute',
                top: '50%',
                left: `${rangerInstance.getPercentageForValue(value)}%`,
                zIndex: isActive ? '1' : '0',
                transform: 'translate(-50%, -50%)',
                width: '14px',
                height: '14px',
                outline: 'none',
                borderRadius: '100%',
                background: 'linear-gradient(to bottom, #eee 45%, #ddd 55%)',
                border: 'solid 1px #888',
              }}
            />
          ),
        )}
    </div>
  )
};

const root = createRoot(document.getElementById('root')!)

root.render(
  <React.StrictMode>
    <InputRange values={[]} onChangeValue={(newValue) => {}} />
  </React.StrictMode>,
)
