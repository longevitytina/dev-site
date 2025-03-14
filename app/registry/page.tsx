'use client';
import FundTracker from '@/components/fundTracker';
import Image from 'next/image';
import styles from './registry.module.css';

export default function Registry() {
  return (
    <div className={`${styles.body} w-full m-2 font-sans`}>
      <div className='flex flex-col items-center justify-center'>
        <h1 className='text-2xl font-bold'>Aurora Sophie Taylor-Maniez</h1>
        <p className='text-lg'>August 12, 2025</p>
        <div className='flex flex-row gap-4'>
          <Image
            src='/11weeks.jpg'
            alt='Aurora'
            width={500}
            height={500}
          />
          <Image
            src='/11weeks.jpg'
            alt='Aurora'
            width={500}
            height={500}
          />
        </div>
      </div>

      <div className='flex flex-col items-center justify-center'>
        <h1 className='text-xl font-semibold'>
          Want to contribute? We appreciate any and all gifts!
        </h1>
        <p className='text-md'>
          We LOVE secondhand! To try and reduce environmental and financial
          impact, we have some ideas, take a peek:
        </p>
        {/* big items trackers (stroller, crib, car seat, etc) */}
        <p className='border-2 border-gray-300 border-dashed p-2 mt-4'>Registry for used/new items:
        <a className='text-blue-500 underline' href='https://my.babylist.com/wfjeyhvzx' target='_blank' rel='noopener noreferrer'>babylist.com/wfjeyhvzx</a>
        <br />
        Track what we&apos;ve purchased and what we still need!
        </p>
        <p className='border-2 border-gray-300 border-dashed p-2 mt-4'>Mail us hand-me-downs, homemade crafts, pictures, notes, doodles:
        <br />
        654 Precita Ave, San Francisco, CA 94110
        </p>
      </div>
      <div className='flex flex-row gap-4 my-4 justify-center'>
        <FundTracker
          fundName='Diaper'
          fundGoal={1000}
          fundCurrent={200}
          description='We want to use a composting diaper service for our baby wipes and diaper trash. This is about the same cost as diapers - $120/month.'
          link='https://dypersf.com/how-it-works'
          linkText='DyperSF'
        />
        <FundTracker
          fundName='Diaper'
          fundGoal={1000}
          fundCurrent={200}
          description='We want to use a composting diaper service for our baby wipes and diaper trash. This is about the same cost as diapers - $120/month.'
          link='https://dypersf.com/how-it-works'
          linkText='DyperSF'
        />
      </div>

    </div>
  );
}
