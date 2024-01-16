'use client';

import LogoIcon from '@/assets/svg/logo';
import React, { useState } from 'react';
import Typography from '../common/Typography/Typography';
import Link from 'next/link';
import Slide from '../Home/Slide';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='flex items-center justify-between sm:flex-col flex-wrap w-full relative'>
      <div className='flex justify-between w-full'>
        <div className='flex items-center gap-4 py-[13px] px-[35px]'>
          <LogoIcon />
          <span className=''>Lorem </span>
        </div>
        <div className='hidden sm:block py-[10px] px-[35px]'>
          <button
            className='flex items-center px-3 py-2 text-gray-200 hover:text-white'
            onClick={toggleMenu}
          >
            <svg
              className='fill-current h-[24px] w-[24px]'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              {isOpen ? (
                <path
                  d='M18 6L6 18M6 6L18 18'
                  stroke='white'
                  stroke-width='2'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
              ) : (
                <path
                  d='M3 9H21M3 16H21'
                  stroke='white'
                  stroke-width='2'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
              )}
            </svg>
          </button>
        </div>
      </div>
      <div
        className={`w-full flex-grow sm:items-center sm:w-auto  ${
          isOpen ? 'block mobile-nav' : ' hidden'
        }`}
      >
        <div className='text-sm lg:flex-grow sm:flex sm:flex-col gap-[24px] w-full p-[12px]'>
          <Link
            href='/about'
            className='hidden mt-4 text-[18px] font-bold sm:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4 uppercase'
          >
            lorem ipsum
          </Link>
          <Link
            href='/about'
            className='hidden mt-4 text-[18px] font-bold sm:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4 uppercase'
          >
            lorem ipsum
          </Link>
          <Link
            href='/about'
            className='hidden mt-4 text-[18px] font-bold sm:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4 uppercase'
          >
            lorem ipsum
          </Link>
          <Link
            href='/about'
            className='hidden mt-4 text-[18px] font-bold sm:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4 uppercase'
          >
            lorem ipsum
          </Link>
          <Link
            href='/about'
            className='hidden mt-4 text-[18px] font-bold sm:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4 uppercase'
          >
            lorem ipsum
          </Link>
          <div className='flex justify-between opacity-[0.40]'>
            <Link
              href=''
              className='hidden mt-4 text-[18px] font-bold sm:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4 uppercase'
            >
              lorem ipsum
            </Link>
            <Link
              href='/about'
              className='hidden mt-4 text-[18px] font-bold sm:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4 uppercase'
            >
              lorem ipsum
            </Link>
          </div>
        </div>
        <div className='absolute bottom-[60px] left-0 right-0'>
          <Slide />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
