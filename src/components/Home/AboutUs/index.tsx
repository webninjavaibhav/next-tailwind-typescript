import Typography from '@/components/common/Typography/Typography';
import Image from 'next/image';
import React from 'react';
import AboutusImg from '@/assets/png/aboutusImg.png';

const AboutUs = () => {
  return (
    <section className='my-[80px] md:my-[120px] aboutus-bg-image'>
      <div className='grid md:grid-cols-1 grid-cols-2 gap-[120px] md:gap-[60px]'>
        <div className='p-4 sm:p-0'>
          <div className='relative h-[600px] md:h-auto'>
            <Typography
              tag='h1'
              fontWeight='bold'
              className='uppercase'
              lineHeight='tight'
            >
              About Us
            </Typography>
            <div className='flex'>
              <Image
                className='absolute top-[96px] left-[202px] md:hidden'
                src={AboutusImg}
                width={373}
                height={373}
                alt='Picture of the author'
              />
            </div>
            <div className='flex flex-col mt-[24px] gap-[10px]'>
              <Typography
                tag='p'
                fontWeight='normal'
                lineHeight='snug'
                className='opacity-[0.69]'
              >
                Instagram
              </Typography>
              <Typography
                tag='p'
                fontWeight='normal'
                lineHeight='snug'
                className='opacity-[0.69]'
              >
                LinkedIn
              </Typography>
            </div>
          </div>
        </div>
        <div className='p-4 sm:p-0'>
          <Typography
            tag='p'
            fontWeight='normal'
            lineHeight='snug'
            className='opacity-[0.69]'
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Typography>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
