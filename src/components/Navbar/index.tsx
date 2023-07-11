'use client';

import clsx from 'clsx';
import React from 'react';
import Link from 'next/link';
import routes from '@/routes';
import { getTimeNowVN } from '@/helpers';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [nowHours] = React.useState(new Date(getTimeNowVN()));
  const pathname = usePathname();

  const checkActivePath = (path: string): boolean => {
    if (path === '/' && pathname !== path) {
      return false;
    }
    return pathname.startsWith(path);
  };

  const greeting = React.useMemo(() => {
    const currentHours = nowHours.getHours();

    if (currentHours < 11) {
      return '🌞 Good morning, Evan! ☕🧑‍💻';
    } else if (currentHours < 12) {
      return 'Hey Evan, you need to take a break! 🥪🥗🍱';
    } else if (currentHours < 18) {
      return '🛬 Good afternoon, Evan! 🧋🏸';
    } else {
      return '🌛 Hey bro, relax and chill! 🎮🎯';
    }
  }, [nowHours]);

  return (
    <React.Fragment>
      <header id='main-header'>
        <div className='py-[2rem] pt-[4rem]'>
          <Link href='/' className='text-magic block text-center text-[4rem]'>
            <span>LOGO</span>
          </Link>
          <p className='slogan mt-4 pb-12 text-center text-[1.6rem] text-white'>Stay hungry. Stay foolish</p>
        </div>
        <nav className='mx-auto mt-8 w-full max-w-[116.0rem] px-[2.4rem]'>
          <ul className='flex items-stretch justify-center overflow-hidden rounded-full border border-solid border-[rgba(12,235,235,0.28)] bg-[rgba(255,255,255,0.02)] px-6 py-2'>
            {routes.map((route) => (
              <li key={route.name}>
                <Link
                  href={route.path}
                  className={clsx(
                    'inline-block px-[2.4rem] py-4 text-[1.6rem] font-medium transition-colors hover:text-first',
                    checkActivePath(route.path) ? 'text-first' : 'text-white'
                  )}
                >
                  <span>{route.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <div className='mt-12'>
        <p className='block text-center text-[1.7rem] text-white'>{greeting}</p>
      </div>
    </React.Fragment>
  );
}
