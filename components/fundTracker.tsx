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
        <p>Prefer to cash contribute? This fund is for all big items, most are being hunted down secondhand and buying locally!</p>
        <ul>
          <li>
            $500 - Car seat/bases, bassinet, toddler seat, stroller combo; we
            found a great secondhand deal!{' '}
          </li>
          <li>
            $1000 - Dypersf Composting Diaper Service with supplies (diapers, wipes, liners) for 1 year
          </li>
          <li>
            $200 - Stokke Tripp Trapp highchair adjustable for all age phases
          </li>
          <li>
            $250 - Baby monitor with camera
          </li>
          <li>
            $200 - Playpen fence
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
