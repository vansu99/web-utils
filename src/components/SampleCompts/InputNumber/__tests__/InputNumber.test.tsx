import * as React from 'react';
import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';
import InputNumber from '@/components/SampleCompts/InputNumber';

describe('InputNumber', () => {
  test('renders input element with correct props', () => {
    const { getByPlaceholderText } = render(
      <InputNumber id='inputNumber' name='inputNumber' placeholder='Enter your quantity' value='10' />
    );
    const inputElement = getByPlaceholderText('Enter your quantity') as HTMLInputElement;

    // The element is exists in DOM
    expect(inputElement).toBeInTheDocument();
    expect(inputElement.value).toBe('10');
    expect(inputElement.disabled).toBeFalsy();
    expect(inputElement.placeholder).toBe('Enter your quantity');
  });

  test('calls onChangeInput when input value changes', () => {
    const handleChangeInput = jest.fn();
    const { getByPlaceholderText } = render(
      <InputNumber
        id='inputNumber'
        name='inputNumber'
        placeholder='Enter your quantity'
        value={'10'}
        onChangeInput={handleChangeInput}
      />
    );
    const inputElement = getByPlaceholderText('Enter your quantity') as HTMLInputElement;

    fireEvent.change(inputElement, { target: { value: '20' } });

    // Checking if the handleChangeInput function is called once
    expect(handleChangeInput).toHaveBeenCalledTimes(1);
    // Checking if the handleChangeInput function is called with the argument is 20
    expect(handleChangeInput).toHaveBeenCalledWith('20');
  });

  test('does not call onChangeInput when input is disabled', async () => {
    const handleChangeInput = jest.fn();
    const { getByPlaceholderText } = render(
      <InputNumber
        id='inputNumber'
        name='inputNumber'
        placeholder='Enter your quantity'
        value={'10'}
        disabled
        onChangeInput={handleChangeInput}
      />
    );
    const inputElement = getByPlaceholderText('Enter your quantity') as HTMLInputElement;

    if (!inputElement.disabled) {
      fireEvent.change(inputElement, { target: { value: '20' } });
    }

    expect(handleChangeInput).not.toHaveBeenCalled();
  });

  test('calls onBlur when input loses focus', () => {
    const handleBlur = jest.fn();
    const { getByPlaceholderText } = render(
      <InputNumber
        id='inputNumber'
        name='inputNumber'
        placeholder='Enter your quantity'
        value={'10'}
        onBlur={handleBlur}
      />
    );
    const inputElement = getByPlaceholderText('Enter your quantity') as HTMLInputElement;

    fireEvent.blur(inputElement);

    expect(handleBlur).toHaveBeenCalledTimes(1);
  });

  test('calls onFocus when input gains focus', () => {
    const handleFocus = jest.fn();
    const { getByPlaceholderText } = render(
      <InputNumber
        id='inputNumber'
        name='inputNumber'
        placeholder='Enter your quantity'
        value={'10'}
        onFocus={handleFocus}
      />
    );
    const inputElement = getByPlaceholderText('Enter your quantity') as HTMLInputElement;

    fireEvent.focus(inputElement);

    expect(handleFocus).toHaveBeenCalledTimes(1);
  });

  test('renders helper text when helperText prop is provided', () => {
    const { getByText } = render(
      <InputNumber id='inputNumber' name='inputNumber' value={'10'} helperText='Enter a number' />
    );
    const helperTextElement = getByText('Enter a number');

    expect(helperTextElement).toBeInTheDocument();
  });

  test('does not render helper text when helperText prop is not provided', () => {
    const { queryByText } = render(<InputNumber id='inputNumber' name='inputNumber' value={'10'} />);
    const helperTextElement = queryByText('Enter a number');

    expect(helperTextElement).toBeNull();
  });
});
