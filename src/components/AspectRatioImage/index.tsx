'use client';

import { ChangeEvent, FormEvent, useState } from 'react';
import { INPUT_NUMBER_REGEX } from '@/common/constants/regex';

type FormValueTypes = {
  width: string;
  height: string;
};

type RatioImageTypes = {
  aspectRatio: string;
  mode: 'portrait' | 'landscape' | string;
};

export default function AspectRatioImage() {
  const [errorMessage, setErrorMessage] = useState('');
  const [formValue, setFormValue] = useState<FormValueTypes>({
    width: '',
    height: '',
  });
  const [ratioImage, setRatioImage] = useState<RatioImageTypes>({
    aspectRatio: '',
    mode: '',
  });

  const handleChangeText = (event: ChangeEvent<HTMLInputElement>) => {
    const currentValue = event.target.value.replace(INPUT_NUMBER_REGEX, '');
    setFormValue({
      ...formValue,
      [event.target.name]: currentValue,
    });
  };

  const handleSubmitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrorMessage('');

    const width = parseInt(formValue.width);
    const height = parseInt(formValue.height);

    if (isNaN(width) || isNaN(height)) {
      setErrorMessage('Invalid width or height entered');
      return;
    }

    if (width === 0 || height === 0) {
      setErrorMessage('Please enter valid width and height values');
      return;
    }

    let aspectRatio: string;
    let mode: string;

    if (width === height) {
      aspectRatio = '1 : 1';
      setRatioImage({
        ...ratioImage,
        mode: 'landscape',
        aspectRatio,
      });
    } else {
      let [dividend, divisor, isPortrait] = height > width ? [height, width, true] : [width, height, false];
      mode = isPortrait ? 'portrait' : 'landscape';

      let gcd = -1;
      while (gcd === -1) {
        const remainder = dividend % divisor;
        if (remainder === 0) {
          gcd = divisor;
        } else {
          dividend = divisor;
          divisor = remainder;
        }
      }

      const hr = width / gcd;
      const vr = height / gcd;
      aspectRatio = `${hr} : ${vr}`;
      setRatioImage({
        mode,
        aspectRatio,
      });
    }
  };

  return (
    <div className='flex gap-6'>
      <div className='w-1/2'>
        <form
          onSubmit={handleSubmitForm}
          className='rounded-md border-[0.4rem] border-solid border-second bg-white p-8'
        >
          {errorMessage ? (
            <p className='mb-4 block rounded-md bg-[#F24C3D]/90 px-4 py-3 text-[1.5rem] text-white'>{errorMessage}</p>
          ) : null}

          <div className='mb-6'>
            <label htmlFor='width' className='mb-2 block text-[1.7rem] font-medium'>
              Width (px)
            </label>
            <input
              type='text'
              id='width'
              name='width'
              value={formValue.width}
              onChange={handleChangeText}
              placeholder='Please enter your width value here'
              className='w-full rounded-md border border-solid p-4 text-[1.4rem] outline-none'
            />
          </div>
          <div className='mb-6'>
            <label htmlFor='height' className='mb-2 block text-[1.7rem] font-medium'>
              Height (px)
            </label>
            <input
              type='text'
              id='height'
              name='height'
              value={formValue.height}
              onChange={handleChangeText}
              placeholder='Please enter your height value here'
              className='w-full rounded-md border border-solid p-4 text-[1.4rem] outline-none'
            />
          </div>
          <button
            type='submit'
            className='bg-button inline-block select-none rounded-md p-8 py-4 text-center text-[1.5rem] text-white outline-none'
          >
            Calculate
          </button>
        </form>
      </div>
      <div className='w-1/2'>
        <div className='h-full rounded-md border-[0.4rem] border-solid border-second bg-white p-8'>
          <p className='mb-2 text-[1.6rem] font-medium'>
            Aspect Ratio: <span>{ratioImage.aspectRatio}</span>
          </p>
          <p className='text-[1.6rem] font-medium'>
            Mode: <span>{ratioImage.mode}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
