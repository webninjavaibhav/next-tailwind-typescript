import React from 'react';
import Typography from '../../common/Typography/Typography';
import Image from 'next/image';
import HeroImg1 from '@/assets/png/heroImg1.png';
import HeroImg2 from '@/assets/png/heroImg2.png';
import AddUserIcon from '@/assets/svg/AddUser';
import ServerIcon from '@/assets/svg/ServerIcon';
import TargetIcon from '@/assets/svg/Target';
import PercentIcon from '@/assets/svg/Percent';
import CupChipIcon from '@/assets/svg/CupChip';

const HeroSection = () => {
  return (
    <section className='mb-[216px] sm:mb-[60px]'>
      <div className='mt-[156px] sm:mt-[60px]'>
        <div className='mb-[60px] sm:mb-[44px]'>
          <Typography
            tag='h1'
            fontWeight='bold'
            className='uppercase'
            lineHeight='tight'
          >
            lorem ipsum
          </Typography>
        </div>
        <div className='grid grid-cols-3 sm:grid-cols-1 gap-4 sm:gap-[60px]'>
          <div className='flex flex-col sm:gap-[4px]'>
            <Typography
              tag='h4'
              fontWeight='bold'
              className='uppercase mb-1'
              lineHeight='tight'
            >
              Lorem ipsum dolor
            </Typography>
            <div className='flex flex-col gap-[32px]'>
              <Typography
                tag='p'
                fontWeight='normal'
                lineHeight='snug'
                className='opacity-[0.69]'
              >
                Lorem ipsum dolor sit amet consectetur. In nibh nam vel lacus
                sit. Neque venenatis mattis est nibh sed quis vel quis eu. In
                tincidunt faucibus aliquet quis sed sed. Phasellus non at lacus
                convallis elementum. Suspendisse tincidunt congue sem turpis.
                Nulla eu lorem cras leo.
              </Typography>
              <AddUserIcon />
            </div>
          </div>

          <div className='flex flex-col sm:gap-[4px]'>
            <Typography
              tag='h4'
              fontWeight='bold'
              className='uppercase mb-1'
              lineHeight='tight'
            >
              Lorem ipsum dolor
            </Typography>
            <div className='flex flex-col gap-[32px]'>
              <Typography
                tag='p'
                fontWeight='normal'
                lineHeight='snug'
                className='opacity-[0.69]'
              >
                Lorem ipsum dolor sit amet consectetur. In nibh nam vel lacus
                sit. Neque venenatis mattis est nibh sed quis vel quis eu. In
                tincidunt faucibus aliquet quis sed sed. Phasellus non at lacus
                convallis elementum. Suspendisse tincidunt congue sem turpis.
                Nulla eu lorem cras leo.
              </Typography>
              <ServerIcon />
            </div>
          </div>
          <div className='flex flex-col sm:gap-[4px]'>
            <Image
              src={HeroImg1}
              width={410}
              height={410}
              alt='Picture of the author'
              className='mb-[40px]'
            />
            <Typography
              tag='h4'
              fontWeight='bold'
              className='uppercase mb-1'
              lineHeight='tight'
            >
              Lorem ipsum dolor
            </Typography>
            <div className='flex flex-col gap-[32px]'>
              <Typography
                tag='p'
                fontWeight='normal'
                lineHeight='snug'
                className='opacity-[0.69]'
              >
                Lorem ipsum dolor sit amet consectetur. In nibh nam vel lacus
                sit. Neque venenatis mattis est nibh sed quis vel quis eu. In
                tincidunt faucibus aliquet quis sed sed. Phasellus non at lacus
                convallis elementum. Suspendisse tincidunt congue sem turpis.
                Nulla eu lorem cras leo.
              </Typography>
              <TargetIcon />
            </div>
          </div>
          <div className='flex flex-col sm:gap-[4px]'>
            <Typography
              tag='h4'
              fontWeight='bold'
              className='uppercase mb-1'
              lineHeight='tight'
            >
              Lorem ipsum
            </Typography>
            <div className='flex flex-col gap-[32px]'>
              <Typography
                tag='p'
                fontWeight='normal'
                lineHeight='snug'
                className='opacity-[0.69]'
              >
                Lorem ipsum dolor sit amet consectetur. In nibh nam vel lacus
                sit. Neque venenatis mattis est nibh sed quis vel quis eu. In
                tincidunt faucibus aliquet quis sed sed. Phasellus non at lacus
                convallis elementum. Suspendisse tincidunt congue sem turpis.
                Nulla eu lorem cras leo.
              </Typography>
              <PercentIcon />
            </div>
          </div>
          <div className='flex flex-col sm:gap-[4px]'>
            <Typography
              tag='h4'
              fontWeight='bold'
              className='uppercase mb-1'
              lineHeight='tight'
            >
              dolor sit amet
            </Typography>
            <div className='flex flex-col gap-[32px]'>
              <Typography
                tag='p'
                fontWeight='normal'
                lineHeight='snug'
                className='opacity-[0.69]'
              >
                Lorem ipsum dolor sit amet consectetur. In nibh nam vel lacus
                sit. Neque venenatis mattis est nibh sed quis vel quis eu. In
                tincidunt faucibus aliquet quis sed sed. Phasellus non at lacus
                convallis elementum. Suspendisse tincidunt congue sem turpis.
                Nulla eu lorem cras leo.
              </Typography>
              <CupChipIcon />
            </div>
          </div>
          <div></div>
          <div></div>
          <div className=''>
            <div className='flex'>
              <Image
                src={HeroImg2}
                width={410}
                height={410}
                alt='Picture of the author'
              />
            </div>
          </div>
          <div>
            {' '}
            <Typography
              tag='h4'
              fontWeight='bold'
              className='uppercase mb-1'
              lineHeight='tight'
            >
              Lorem ipsum dolor
            </Typography>
            <div className='flex flex-col gap-[32px]'>
              <Typography
                tag='p'
                fontWeight='normal'
                lineHeight='snug'
                className='opacity-[0.69]'
              >
                Lorem ipsum dolor sit amet consectetur. In nibh nam vel lacus
                sit. Neque venenatis mattis est nibh sed quis vel quis eu. In
                tincidunt faucibus aliquet quis sed sed. Phasellus non at lacus
                convallis elementum. Suspendisse tincidunt congue sem turpis.
                Nulla eu lorem cras leo.
              </Typography>
              <CupChipIcon />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
