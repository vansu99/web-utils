import React from 'react';
import SinglePost from '../../containers/post/SinglePost';
import { dataTopics } from '@/common/mockData/topics';

export const metadata = {
  title: 'Topics',
  description: 'About topics',
};

export default function Topics() {
  return (
    <main className='container'>
      <div className='min-h-[55vh] py-[5rem]'>
        <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
          {dataTopics.map((topic) => (
            <SinglePost key={topic.id} topic={topic} />
          ))}
        </div>
      </div>
    </main>
  );
}
