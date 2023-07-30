import type { ROUTE } from '@/types';

export const routes: ROUTE[] = [
  {
    name: 'About',
    path: '/about',
  },
  {
    name: 'Topics',
    path: '/topics',
  },
  {
    name: 'Utils',
    path: '/util-funcs',
  },
  {
    name: 'Components',
    path: '/compts',
  },
];

export const REFETCH_INTERVAL_TIME = 30 * 60 * 1000; // 30mins
