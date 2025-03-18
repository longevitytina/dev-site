'use client';
import FundTracker from '@/components/fundTracker';
import Image from 'next/image';
import styles from './registry.module.css';

export default function Registry() {
  return (
    <div className={`${styles.body} font-sans`}>
      <div className='flex flex-col items-center justify-center p-2'>
        <div className='flex flex-row items-center gap-2'>
          <Image
            className={styles.bounceAlt}
            src='/rattle-baby-svgrepo-com.svg'
            alt='Logo'
            width={40}
            height={40}
          />

          <Image
            className={styles.bounce}
            src='/baby-girl-svgrepo-com.svg'
            alt='Logo'
            width={40}
            height={40}
          />
          <h1 className='text-2xl font-bold'>Aurora Sophie Taylor-Maniez</h1>
          <Image
            className={styles.bounce}
            src='/flower-svgrepo-com.svg'
            alt='Logo'
            width={40}
            height={40}
          />
          <Image
            className={styles.bounceAlt}
            src='/pacifier-svgrepo-com.svg'
            alt='pacifier'
            width={40}
            height={40}
          />
        </div>
        <p className='text-lg'>August 12, 2025</p>

        <div className='flex flex-row gap-4 flex-wrap justify-center'>
          <Image
            src='/11weeks.jpg'
            alt='Aurora'
            width={500}
            height={500}
          />
          <Image
            src='/t_m.jpeg'
            alt='Aurora'
            width={500}
            height={500}
          />
        </div>
      </div>

      <div className='flex flex-col items-center justify-center text-center w-full'>
        <h1 className='text-xl font-semibold'>
          Want to contribute? We appreciate any and all gifts!
        </h1>
        <p className='text-md'>
          We LOVE secondhand! To try and reduce environmental and financial
          impact, we have some ideas, take a peek:
        </p>
      </div>

      <div className='flex flex-col items-center justify-center w-full md:max-w-[1200px] m-auto py-2'>
        <div className='border-2 border-gray-300 border-dashed p-2 mt-4 w-full'>
          <div className='flex flex-row items-center gap-2'>
            <Image
              src='/shopping-bag-svgrepo-com.svg'
              alt='Shopping Bag'
              width={40}
              height={40}
            />
            <strong>Registry:</strong>
            <a
              className='text-blue-500 underline'
              href='https://my.babylist.com/wfjeyhvzx'
              target='_blank'
              rel='noopener noreferrer'
            >
              babylist.com/wfjeyhvzx
            </a>
          </div>
          <br />
          <div className='flex flex-row items-center gap-2'>
            <Image
              src='/baby-shoes-svgrepo-com.svg'
              alt='shoe'
              width={40}
              height={40}
            />{' '}
            <strong>Clothing:</strong> There are some item ideas on the
            registry, but we&apos;d love anything you find cute, useful or
            secondhand.
          </div>
          <br />
          <div className='flex flex-row items-center gap-2'>
            <Image
              src='/giraffe-toy-svgrepo-com.svg'
              alt='Giraffe'
              width={40}
              height={40}
            />{' '}
            <strong>Toys:</strong> We&apos;re not sure what we need, but
            we&apos;d love anything you find cute, useful or secondhand.
          </div>
        </div>
        <p className='w-full border-2 border-gray-300 border-dashed p-2 mt-4 flex flex-row items-center gap-2'>
          {' '}
          <Image
            src='/envelope-svgrepo-com.svg'
            alt='Mail'
            width={40}
            height={40}
          />{' '}
          <strong>Mail:</strong> If you want to send us hand-me-downs, crafts,
          pictures, notes, doodles:
          <br /> 654 Precita Ave, San Francisco, CA 94110
        </p>
      </div>
      <div className='flex py-2 items-center justify-center'>
        <FundTracker
          fundName='Big Purchases'
          fundGoal={2550}
          fundCurrent={200}
        />
      </div>
    </div>
  );
}
