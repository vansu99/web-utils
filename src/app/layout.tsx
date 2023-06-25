'use client';

import Link from 'next/link';
import routes from '@/routes';
import '../common/styles/globals.css';
import { Inter } from 'next/font/google';
import { getTimeNowVN } from '@/helpers';
import { useMemo, useState } from 'react';

const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '600'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [nowHours] = useState(new Date(getTimeNowVN()));

  const greeting = useMemo(() => {
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
    <html lang='en' suppressHydrationWarning={true}>
      <body suppressHydrationWarning={true} className={inter.className}>
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
                    className='inline-block px-[2.4rem] py-4 text-[1.6rem] font-medium text-white transition-colors hover:text-first'
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
        {children}
        <footer className='border-t-[1px] border-first p-8 shadow-md'>
          <div className='flex flex-col items-center justify-center'>
            <p className='mb-4 text-[1.5rem] font-medium text-white'>
              Author: <span className='text-magic'>Evan</span>
            </p>
            <a
              className='text-[1.5rem] text-white transition-colors duration-300 hover:text-first'
              href='https://github.com/vansu99'
              target='_blank'
            >
              Github
            </a>
          </div>
        </footer>
      </body>
    </html>
  );
}
