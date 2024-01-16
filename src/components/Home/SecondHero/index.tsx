import React from 'react';
import Typography from '../../common/Typography/Typography';
import Image from 'next/image';
import SecondHeroImg from '@/assets/png/secondheroimg.png';
import SheildTickIcon from '@/assets/svg/SheildTick';
import DataFlowIcon from '@/assets/svg/DataFlow';
import BarChart from '@/assets/svg/BarChart';

const SecondHero = () => {
  return (
    <section className='mt-[80px] mb-[140px] sm:mb-0'>
      <div>
        <div className='mb-[60px]'>
          <Typography
            tag='h1'
            fontWeight='bold'
            className='uppercase'
            lineHeight='tight'
          >
            lorem ipsum dolor set
          </Typography>
        </div>
        <div className='grid grid-cols-3 sm:grid-cols-1 gap-4 sm:gap-[26px]'>
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
              <SheildTickIcon />
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
              <DataFlowIcon />
            </div>
          </div>
          <div className='sm:hidden'></div>
          <div className='sm:hidden'></div>
          <div className='sm:hidden'></div>
          <div className='sm:hidden'></div>
          <div className='sm:hidden'></div>
          <div>
            <div className='flex'>
              <Image
                src={SecondHeroImg}
                width={410}
                height={410}
                alt='Picture of the author'
              />
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
              <BarChart />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecondHero;
