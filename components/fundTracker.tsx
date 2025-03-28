'use client';
import Image from 'next/image';
import React from 'react';
import Payment from './Payment';
import TrackerBar from './trackerBar';

interface FundTrackerProps {
  fundName: string;
  fundGoal: number;
  fundCurrent: number;
}

const FundTracker = ({ fundName, fundGoal, fundCurrent }: FundTrackerProps) => {
  return (
    <div className='w-full md:max-w-[1200px] border-2 border-gray-300 border-dashed flex md:flex-row flex-col md:items-center items-start p-2 gap-16'>
      <div>
        <p className='flex flex-row items-center gap-2'>
          <Image
            src='/diaper-svgrepo-com.svg'
            alt={fundName}
            width={20}
            height={20}
            className='w-10 h-10 my-2'
          />
          <strong>{fundName} Fund Tracker</strong>
        </p>
        <TrackerBar
          fundGoal={fundGoal}
          fundCurrent={fundCurrent}
        />
      <Payment />

      </div>
      <div>
        <p>This fund is for all big items, most are being hunted down secondhand and buying locally!</p>
        <ul>
          <li>
            $500 - Car seat/bases, bassinet, toddler seat, stroller combo; we
            found a great secondhand deal!{' '}
          </li>
          <li>
            $1000 -{' '}
            <a
              className='text-blue-500 underline'
              href='https://dypersf.com/how-it-works'
              target='_blank'
              rel='noopener noreferrer'
            >
              Composting Diaper Service
            </a>{' '}
            with supplies (diapers, wipes, liners) for 1 year{' '}
          </li>
          <li>
            {' '}
            $200 -{' '}
            <a
              className='text-blue-500 underline'
              href='https://goodbuygear.com/products/stokke-tripp-trapp-complete-high-chair-natural-dots-grey'
              target='_blank'
              rel='noopener noreferrer'
            >
              Stokke Tripp Trapp highchair{' '}
            </a>{' '}
            adjustable for all age phases{' '}
          </li>
          <li>
            $250 -{' '}
            <a
              className='text-blue-500 underline'
              href='https://a.co/d/8V5vJck'
              target='_blank'
              rel='noopener noreferrer'
            >
              Baby monitor with camera
            </a>
          </li>
          <li>
            $200 -{' '}
            <a
              className='text-blue-500 underline'
              href='https://a.co/d/8zln4ap'
              target='_blank'
              rel='noopener noreferrer'
            >
              Playpen fence
            </a>
          </li>
          <li>$100 - Baby gates</li>
          <li>$300 - Breast pump, insurance only covers a portion - boo!</li>
        </ul>
        <br />
      </div>
    </div>
  );
};

export default FundTracker;
