'use client';
import Image from 'next/image';
import React from 'react';
import Payment from './Payment';
import TrackerBar from './trackerBar';

interface FundTrackerProps {
  fundName: string;
  fundGoal: number;
  fundCurrent: number;
  description?: string;
  link?: string;
  linkText?: string;
}

const FundTracker = ({ fundName, fundGoal, fundCurrent, description, link, linkText }: FundTrackerProps) => {
  return (
    <div className='max-w-[500px] border-2 border-gray-300 border-dashed p-2'>
      <h1 className='flex flex-row items-center gap-2'>
        <Image
          src='/Diaper.svg'
          alt={fundName}
          width={20}
          height={20}
        />
        {fundName} {' '}
        Fund Tracker
      </h1>
      <TrackerBar fundGoal={fundGoal} fundCurrent={fundCurrent} />
      {description && <p>{description}</p>}
      Read More:{link && <a className='text-blue-500 underline' href={link} target="_blank" rel="noopener noreferrer">{linkText}</a>}
      <br />
      <Payment fundName={fundName} />
    </div>
  );
};

export default FundTracker;
