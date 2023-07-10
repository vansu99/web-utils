/* eslint-disable @next/next/no-img-element */
import { getPostDetail } from '@/lib';
import { ImageResponse } from 'next/server';

export const size = {
  width: 1200,
  height: 630,
};

export const alt = 'Topic';
export const contentType = 'image/png';

export default async function og({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  const post = await getPostDetail(slug);

  return new ImageResponse(
    (
      <div tw='relative flex w-full h-full flex items-center justify-center'>
        {/* Background */}
        <div tw='absolute flex inset-0'>
          <img tw='flex flex-1' src={post?.imageURL + '&w=1200&h=630&auto=format&q=75'} alt={post?.title!!} />
          {/* Overlay */}
          <div tw='absolute flex inset-0 bg-black bg-opacity-50' />
        </div>
        <div tw='flex flex-col text-neutral-50'>
          <div tw='text-[2rem] font-bold'>{post?.title}</div>
          <p tw='text-[1.5rem] font-bold'>{post?.meta?.description}</p>
        </div>
      </div>
    ),
    size
  );
}
