import type { Metadata } from 'next';
import { getPostDetail } from '@/lib';
import { notFound } from 'next/navigation';
import BlurImage from '@/components/BlurImage';
import { placeholderBlurhash, getTimeFromNow } from '@/helpers';

interface TopicDetailProps {
  params: { slug: string };
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  try {
    const detail = await getPostDetail(params.slug);
    return {
      title: detail.title,
      description: detail.description,
      alternates: {
        canonical: `https://web-utils-sutv.vercel.app/topics/${detail.link}`,
      },
    };
  } catch (error) {
    return {
      title: 'Not Found',
      description: 'The page is looking for does not exist',
    };
  }
}

export default async function TopicDetail({ params }: TopicDetailProps) {
  const detail = await getPostDetail(params.slug);

  if (!detail) notFound();

  return (
    <main className='container'>
      <div className='flex flex-col py-[6rem]'>
        <h2 className='mb-2 text-[4rem] leading-snug text-white'>{detail?.title}</h2>
        <p className='mb-4 text-[1.8rem] font-medium text-gray'>{getTimeFromNow(detail?.date as Date)} - 3 min read</p>
        <div className='mt-[4rem]'>
          <figure className='relative mx-auto aspect-4/3 h-full w-full overflow-hidden rounded-2xl md:aspect-3/2'>
            <BlurImage
              src={
                detail?.imageURL ??
                'https://images.pexels.com/photos/707571/pexels-photo-707571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              }
              className='h-full w-full object-cover object-center'
              placeholder='blur'
              width={0}
              height={0}
              sizes='100vw'
              blurDataURL={placeholderBlurhash}
              alt={detail?.title ?? 'demo image'}
            />
          </figure>
        </div>
        <div className='mt-[6rem]'>
          <p className='text-[1.8rem] leading-normal text-white'>{detail?.description}</p>
        </div>
      </div>
    </main>
  );
}
