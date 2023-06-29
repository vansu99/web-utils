import React, { forwardRef } from 'react';
import type { InputNumberProps } from './type';

const InputNumber: React.ForwardRefRenderFunction<HTMLInputElement, InputNumberProps> = (props, ref) => {
  const {
    id,
    name,
    value,
    max,
    onBlur,
    onFocus,
    min = 0,
    focus = false,
    onChangeInput,
    helperText = '',
    disabled = false,
    placeholder = '',
    rounded = '0.4rem',
    customClassInput = '',
  } = props;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const regexNumber =
      /[\u00C0-\u1EF9a-zA-ZＡ-ｚ０-９ぁ-んァ-ン!-\/:-@[-`{-~\s,[\u3000-\u303F]|[\u3040-\u309F]|[\u30A0-\u30FF]|[\uFF00-\uFFEF]|[\u4E00-\u9FAF]|[\u2605-\u2606]|[\u2190-\u2195]|\u203B]/g;
    const currentValue = event.target.value.replace(regexNumber, '');

    // emit value
    onChangeInput?.(currentValue);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    onBlur?.(e);
  };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    onFocus?.(e);
  };

  return (
    <div className={customClassInput}>
      <input
        id={id}
        ref={ref}
        type='text'
        name={name}
        value={value}
        disabled={disabled}
        onBlur={handleBlur}
        onFocus={handleFocus}
        onChange={handleChange}
        placeholder={placeholder}
        className={`w-full overflow-hidden rounded-[${rounded}] border border-solid p-4 text-[1.5rem] leading-[1.4] outline-none focus:border-first`}
      />
      {helperText ? <span className='mt-1 block text-[1.3rem] leading-[1.3] text-third'>{helperText}</span> : null}
    </div>
  );
};

export default forwardRef(InputNumber);
