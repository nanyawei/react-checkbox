import React, { useState, useEffect } from 'react';
import cls from 'classnames';
import { PREFIXClS } from './common';

export type ValueType = string;

export interface CheckboOptionType {
  label: string;
  value: ValueType;
  disabled?: boolean;
}

export interface BasicCheckboxProps<T> {
  prefix?: string;
  className?: string;
  defaultChecked?: boolean;
  children?: React.ReactNode;
  disabled?: boolean;
  required?: boolean;
  checked?: boolean;
  onClick?: React.MouseEventHandler<HTMLElement>;
  onChange?: (e: T) => void;
  value?: ValueType;
  partial?: boolean; // 是否为半选状态
}

export interface CheckboxChangeEventTarget extends BasicCheckboxProps<CheckboxChangeEvent> {
  checked: boolean;
  value?: ValueType;
}

export interface CheckboxChangeEvent {
  target: CheckboxChangeEventTarget;
  stopPropagation: () => void;
  preventDefault: () => void;
  nativeEvent: MouseEvent;
}

const Checkbox: React.FC<BasicCheckboxProps<CheckboxChangeEvent>> = (props) => {
  const {
    children, disabled, required, checked = false, onClick, onChange,
    className, defaultChecked = false,
    value, prefix = PREFIXClS, partial= false
  } = props;
  const [checkboxChecked, setCheckboxChecked] = useState(false);

  useEffect(() => {
    setCheckboxChecked(() => 'checked' in props ? checked : defaultChecked);
  }, [checked, defaultChecked]);

  const classString = cls(`${prefix}-label`, className, {
    [`${prefix}-checked`]: checkboxChecked,
    [`${prefix}-disabled`]: disabled,
    [`${prefix}-partial`]: partial
  });

  return <label className={classString}>
    <span className={`${prefix}-input-box`}>
      <input
        type='checkbox'
        checked={checkboxChecked}
        required={required}
        disabled={disabled}
        onClick={(e: React.MouseEvent<HTMLInputElement, MouseEvent>) => onClick && onClick(e)}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setCheckboxChecked(e.target.checked);
          if (disabled) return;
          if (onChange) {
            onChange({
              target: {
                ...props,
                checked: e.target.checked,
                value: value || undefined
              },
              stopPropagation() { e.stopPropagation() },
              preventDefault() { e.preventDefault() },
              nativeEvent: e.nativeEvent as MouseEvent
            })
          }
        }}
        value={value}
      />
      <span className={`${prefix}-input-inner`}></span>
    </span>
    <span className={`${prefix}-content-box`}>{children}</span>
  </label>
};

Checkbox.displayName = 'Checkbox';
export default Checkbox;
