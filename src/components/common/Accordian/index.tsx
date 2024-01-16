'use client';

import React, { useState } from 'react';
import PluseIcon from '@/assets/svg/Pluseicon';
import { accordionData } from '@/constants/accordian';
import MinusIcon from '@/assets/svg/Minus';
import Typography from '../Typography/Typography';

const Accordion = () => {
  const [activeStateArray, setActiveStateArray] = useState<number | null>(1);
  const accordianSection = (data: {
    id: number;
    title: string;
    content: string;
  }) => {
    return (
      <div className='accordionItem'>
        <div
          className={`accordionTitle ${
            activeStateArray === data.id ? 'accordion__open' : ''
          }`}
          onClick={() => {
            console.log('data id - ', data.id);
            setActiveStateArray(activeStateArray === data.id ? null : data.id);
          }}
        >
          <div className='headingContainer'>
            <div className='accordionHeading'>{data.title}</div>
            <div className='accordionIcon'>
              {activeStateArray === data.id ? <PluseIcon /> : <MinusIcon />}
            </div>
          </div>
        </div>
        {activeStateArray === data.id && (
          <div className='accordionDescription'>{data.content}</div>
        )}
        <div></div>
      </div>
    );
  };
  return (
    <React.Fragment>
      <div className='max-w-[1450px] m-auto mt-[160px] '>
        <div className='mb-[60px] sm:px-[12px]'>
          <Typography
            tag='h1'
            fontWeight='bold'
            className='uppercase'
            lineHeight='tight'
          >
            lorem ipsum dolor
          </Typography>
        </div>
      </div>
      <div className='accordion'>
        {accordionData?.map((data) => accordianSection(data))}
      </div>
    </React.Fragment>
  );
};

export default Accordion;
