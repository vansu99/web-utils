import '../common/styles/globals.css';
import Navbar from '@/components/Navbar';
import { Inter } from 'next/font/google';
import { FacebookIcon, GMailIcon, GithubIcon, LinkedinIcon } from '@/components/Icons';

const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '600'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body suppressHydrationWarning className={inter.className}>
        <Navbar />
        {children}
        <footer className='border-t-[1px] border-first p-8'>
          <div className='flex flex-col items-center justify-center'>
            <p className='mb-2 text-[1.6rem] font-medium text-white'>
              Author: <span className='text-magic'>Evan</span>
            </p>
            <p className='mb-6 flex items-center text-center text-[1.4rem] text-white'>
              <span className='mr-2'>
                <GMailIcon />
              </span>{' '}
              Contact: vansutran99@gmail.com
            </p>
            <div className='flex items-center justify-center gap-4'>
              <a
                className='inline-block text-white transition-colors duration-300 hover:text-first'
                href='https://github.com/vansu99'
                target='_blank'
              >
                <GithubIcon />
              </a>
              <a
                className='inline-block text-white transition-colors duration-300 hover:text-first'
                href='https://github.com/vansu99'
                target='_blank'
              >
                <FacebookIcon />
              </a>
              <a
                className='inline-block text-white transition-colors duration-300 hover:text-first'
                href='https://github.com/vansu99'
                target='_blank'
              >
                <LinkedinIcon />
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
