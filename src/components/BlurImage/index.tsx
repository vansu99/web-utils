'use client';

import clsx from 'clsx';
import Image from 'next/image';
import { useState } from 'react';

import type { ComponentProps } from 'react';

export type WithClassName<T = {}> = T & {
  className?: string;
};

interface BlurImage extends WithClassName, ComponentProps<typeof Image> {
  alt: string;
}

export default function BlurImage(props: BlurImage) {
  const [isLoading, setLoading] = useState(true);

  return (
    <Image
      {...props}
      alt={props.alt}
      width={props.width ?? 16}
      height={props.height ?? 9}
      className={clsx(
        'block duration-700 ease-in-out',
        props.className,
        isLoading ? 'scale-105 blur-lg' : 'scale-100 blur-0'
      )}
      onLoadingComplete={() => setLoading(false)}
    />
  );
}
