import React from 'react';
import Link from 'next/link';
import type { PostType } from '@/types';
import BlurImage from '@/components/BlurImage';
import { placeholderBlurhash } from '@/helpers';

type SinglePostProps = {
  topic: PostType;
};

export default function SinglePost({ topic }: SinglePostProps) {
  return (
    <Link href={`/topics/${topic.link}`} className='flex flex-col'>
      <figure className='group relative mx-auto overflow-hidden rounded-2xl'>
        <BlurImage
          src={
            topic.imageURL ??
            'https://images.pexels.com/photos/707571/pexels-photo-707571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          }
          className='h-full w-full object-cover object-center group-hover:scale-105 group-hover:duration-300'
          placeholder='blur'
          width={400}
          height={400}
          sizes='(max-width: 50px) 2vw, 70vw'
          blurDataURL={placeholderBlurhash}
          alt={topic.title ?? 'demo image'}
        />
      </figure>
      <div className='px-4 py-6'>
        <h3 className='hover-text-underline mb-4 inline-block text-[1.8rem] font-medium text-white'>{topic.title}</h3>
        <p className='text-truncate text-[1.4rem] text-gray'>{topic.description}</p>
      </div>
    </Link>
  );
}
