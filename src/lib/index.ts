import type { PostType } from '@/types';
import { dataTopics } from '@/common/mockData/topics';

export function getPostDetail(slug: string): Promise<PostType> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const post = dataTopics.find((topic) => topic.link === slug) as PostType;
      resolve(post);
    }, 1000);
  });
}
