'use client';
import FundTracker from '@/components/fundTracker';
import Image from 'next/image';
import styles from './registry.module.css';
import { useEffect, useState } from 'react';

const ACCESS_CODE = process.env.NEXT_PUBLIC_ACCESS_CODE;

export default function Registry() {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [input, setInput] = useState('');

  useEffect(() => {
    // Check if access cookie exists
    if (document.cookie.includes('access_granted=true')) {
      setIsUnlocked(true);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.toLowerCase() === ACCESS_CODE) {
      document.cookie = 'access_granted=true; path=/; max-age=86400'; // Cookie lasts 1 day
      setIsUnlocked(true);
    } else {
      alert('Incorrect code. Try again.');
    }
  };

  if (!isUnlocked) {
    return (
      <div className='flex flex-col items-center justify-center h-screen font-sans'>
        <div>
          <form
            onSubmit={handleSubmit}
            className='flex flex-row items-center gap-2'
          >
            <input
              type='text'
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder='Enter Password'
              required
              className='border p-2 rounded text-black'
            />
            <button
              type='submit'
              className='bg-pink-200 text-black px-4 py-2 rounded'
            >
              Unlock
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className={`${styles.body} font-sans`}>
      <div className='flex flex-col items-center justify-center text-center p-2'>
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
            src='/auroa11weeks.jpg'
            alt='ultrasound image'
            width={300}
            height={300}
            className='object-cover'
          />
          <Image
            src='/marcTina.jpg'
            alt='Marc and Tina'
            width={300}
            height={300}
            className='object-cover'
          />
          <Image
            src='/auroa19weeks.jpg'
            alt='ultrasound image'
            width={300}
            height={300}
            className='object-cover'
          />
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

        <div className='flex border-2 border-gray-300 border-dashed p-2 mt-4 w-full md:max-w-[1200px] m-auto'>
          <div className='flex flex-row items-center gap-2'>
            <Image
              src='/chat-chat-svgrepo-com.svg'
              alt='Chat bubble'
              width={40}
              height={40}
            />
            <strong>Updates:</strong>
            <div className='border p-2 rounded text-black text-left overflow-y-auto h-[800px] w-full'>
              <strong>7/16/25: 36-Week Checkup</strong>
              <p>
                Final ultrasound! Aurora is head down, facing down, and growing
                on track. We&apos;re so grateful that the pregnancy has been
                smooth and uneventful. FOUR more weeks to go!
                <br />
              <div className='flex flex-col md:flex-row gap-2'>
                <Image
                  src='/tina34weeks.jpg'
                  alt='pregnant tina 34 weeks'
                  width={300}
                  height={300}
                  className='object-cover'
                />
                <Image
                  src='/20weeks.jpg'
                  alt='ultrasound image'
                  width={200}
                  height={200}
                  className='object-cover'
                />
                <Image
                  src='/marcTinaDorking.jpg'
                  alt='pregnant tina 34 weeks'
                  width={300}
                  height={300}
                  className='object-cover'
                />
                </div>
                <br />
              </p>
              <br />
              <strong>7/8/25: Shotgun Wedding!</strong>
              <p>
                Today we got married! We had a small ceremony with a friends at
                the San Francisco City Hall. It was an amazing day, just the way
                we wanted it. We are so grateful to have our community in San
                Francisco to support us and surround Aurora with incredible role
                models.
                <br />
                <Image
                  src='/wedding1.JPG'
                  alt='tina and Marc wedding'
                  width={1000}
                  height={500}
                  className='object-cover'
                />
                <br />
              <div className='flex flex-row gap-2'>

                <Image
                  src='/wedding2.JPG'
                  alt='tina and Marc wedding'
                  width={500}
                  height={300}
                  className='object-cover'
                />
                <Image
                  src='/bikeWedding.JPG'
                  alt='bike wedding'
                  width={800}
                  height={300}
                  className='object-cover'
                />
                </div>
              </p>
              <br />
              <strong>7/1/25: Second Doula meeting</strong>
              <p>
                Another info dump from our Doula meeting. We learned about the
                different stages of labor and what to expect. We learned
                different prepping techniques to try and encourage Aurora to
                stay in the right position for birth.
                <br />
                <br />
              </p>
              <br />
              <strong>6/18/25: 32-Week Checkup</strong>
              <p>
                We had a heart rate check and everything is looking great!
                Aurora is growing right on track! Aurora is so active, her kicks
                are becoming very frequent and STRONG. The Nurse Practitioner
                said Aurora is peaking for kick strength and they will start
                becoming softer as she takes up more space.
                <br />
                Tina is having a harder time getting comfortable at night due to
                acid reflux, but she is getting better at managing it. Eight
                more weeks to go!
                <br />
              </p>
              <br />
              <strong>6/17/25: Our first Doula meeting</strong>
              <p>
                We had our first meeting with our Doula Heather, she is a
                wonderful person and we are so excited to have her join us on
                this journey. She provided us with a lot of information and
                resources to help us prepare for the birth of our baby and what
                to expect at the hospital. So much to learn!
                <br />
              </p>
              <br />
              <strong>6/14/25: Elopement photoshoot</strong>
              <p>
                We had a photoshoot with our friend and photographer, who took
                some amazing photos in Golden Gate Park, we have so many
                beautiful photos to choose from!
              </p>
              <br />
              <Image
                src='/tinaMarcElope.jpg'
                alt='tina and Marc'
                width={300}
                height={300}
                className='object-cover'
              />
              <br />
              <strong>
                6/3/25-6/10/25: Visiting family and friends in Vegas
              </strong>
              <p>
                Tina took a week trip to Vegas to visit family and friends. She
                spent a lot of time with her granny and reconnected with her old
                friends. She relaxed at the MGM Grand in the lazy river with her
                Brother Billy, Sister-in-law Marissa, nephews Logan and Lucas
                and some of her old friends.
              </p>

              <br />
              <div className='flex flex-col md:flex-row gap-2'>
                <Image
                  src='/30-weekPool.JPG'
                  alt='tina at pool'
                  width={300}
                  height={300}
                  className='object-cover'
                />
                <Image
                  src='/GrannyTina30week.jpg'
                  alt='granny and tina'
                  width={300}
                  height={300}
                  className='object-cover'
                />
                <Image
                  src='/LindaTina30week.jpg'
                  alt='linda and tina'
                  width={300}
                  height={300}
                  className='object-cover'
                />
                <Image
                  src='/arianeTina30week.jpg'
                  alt='ariane and tina'
                  width={300}
                  height={300}
                  className='object-cover'
                />
                <Image
                  src='/ariane2Tina30week.jpg'
                  alt='ariane and tina'
                  width={300}
                  height={300}
                  className='object-cover'
                />
              </div>
              <br />
              <strong>5/21/25: 28-Week Checkup</strong>
              <p>
                We listened to Aurora&apos;s heartbeat, our Nurse Practitioner
                was slightly concerned that it was a bit fast. So Tina went to
                the bigger hospital to get a longer 20 minute heart rate check.
                Everything was within normal range, it was probably just a
                random spike.
                <br />
              </p>
              <br />
              <strong>5/11/25: First Mother&apos;s Day!</strong>
              <p>
                Had a lovely time with my house mates, who made a big brunch for
                us to be moms! Such a yummy spread and tons of love in the house
                <br />
                <Image
                  src='/26-week-mother-day.jpg'
                  alt='friends at gala'
                  width={400}
                  height={400}
                  className='object-cover'
                />
              </p>
              <br />
              <strong>4/24/25: 24-Week - Checkup</strong>
              <p>
                We listened to Aurora&apos;s heartbeat, and it was strong and
                rhythmic at 140bpm. She&apos;s growing right on track. She kept
                wiggling out the way when the doctor pressed the microphone
                against her, there was a final straw and Aurora kicked the
                microphone off of my stomach. We were cracking up!
                <br />
                Tina had a few blood draws to check her glucose levels and
                immunity response levels. Everything is looking good
                fortunately!
              </p>
              <br />
              <strong>4/16/25: 23-Week - Little Kicks</strong>
              <p>
                Aurora is having more and more fun with her kicks. Tina no
                longer confuses them for gas bubbles. There have been some
                moments where she&apos;s been able to feel the kicks from the
                outside. Tina&apos;s belly keeps on growing, she may not be able
                to ride her road bike anymore! 🚲
                <br />
              </p>
              <br />
              <strong>4/4/25: 21-Week - Out to the Gala</strong>
              <p>
                Tina and Aurora went with the house gang to the gala to
                celebrate with friends. Aurora was a little shy but had a great
                time. Full tummy display in the evening gown.
              </p>
              <Image
                src='/gala.jpg'
                alt='friends at gala'
                width={400}
                height={400}
                className='object-cover'
              />
              <br />
              <strong>4/2/25: 21-Week - Is that a kick?</strong>
              <p>
                The beginning of movement! It&apos;s a little kick that Tina
                keeps wondering if it&apos;s a gas bubble or Aurora. But after a
                few days of it rythmically happening, she&apos;s pretty sure
                it&apos;s a kick.
              </p>
              <br />
              <strong>3/21/25: 19-Week Ultrasound - half way there!</strong>
              <p>
                45 minutes of the ultrasound technician poking around to check
                every organ system and body part. Aurora didn&apos;t appreciate
                the poking; she kept twisting, turning, and running around. But
                we were able to see lots of brain and heart angles. Everything
                is growing right on track. Check out these cute pics of
                Aurora&apos;s little butt(upward facing angle), face, and feet!
              </p>
              <div className='flex flex-col md:flex-row gap-2'>
                <Image
                  src='/auroa19weeksbutt.jpg'
                  alt='ultrasound image'
                  width={200}
                  height={200}
                  className='object-cover'
                />
                <Image
                  src='/auroa19weeksface.jpg'
                  alt='ultrasound image'
                  width={200}
                  height={200}
                  className='object-cover'
                />
                <Image
                  src='/auroa19weeksfeet.jpg'
                  alt='ultrasound image'
                  width={200}
                  height={200}
                  className='object-cover'
                />
              </div>
              <p>Tina&apos;s belly is growing and really showing now!</p>
              <div className='flex flex-row gap-2'>
                <Image
                  src='/20weeks.jpg'
                  alt='ultrasound image'
                  width={200}
                  height={200}
                  className='object-cover'
                />
                <Image
                  src='/5weeks.jpg'
                  alt='ultrasound image'
                  width={200}
                  height={200}
                  className='object-cover'
                />
              </div>
              <br />
              <strong>2/26/25: 16-Week Heartbeat Listening</strong>
              <p>
                We got to hear the heartbeat for the first time! It was about
                145/minute, everything sounded normal and rhythmic. It was
                really cool to get to hear Aurora&apos;s healthy little heart 💗
              </p>
              <br />
              <strong>1/24/25: 11-Week Ultrasound</strong>
              <p>
                We got to see Aurora&apos;s little hands and her heartbeat. This
                was a really special day, she&apos;s no longer a little blob!
                Tina cried a little. All the genetic tests pass with low risk of
                Spina bifida or other neural tube defects.
              </p>
              <Image
                src='/auroa11weeks.jpg'
                alt='ultrasound image'
                width={200}
                height={200}
                className='object-cover'
              />
              <br />
              <strong>12/24/25: 7-Week Ultrasound</strong>
              <p>
                The best Christmas present! We got to see Aurora for the first
                time. She was about 1cm long and had a tiny heartbeat; She was
                just a little blob and yolk sack but it was a special day to
                remember. We found out her birthday is estimated for August
                12th; close to her mom&apos;s on August 8th. Another feisty Leo
                🦁
                <br />
                Genetic testing passed with low risk of chromosomal
                abnormalities. So Grateful!
              </p>
              <Image
                src='/aurora7weeks.jpg'
                alt='ultrasound image'
                width={200}
                height={200}
                className='object-cover'
              />
            </div>
          </div>
        </div>
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
          <strong>Contact:</strong> If you want to send us hand-me-downs,
          crafts, pictures, notes, doodles. We&apos;d love to chat and see
          pictures of you. Text or email us!
          <br />
          <br /> 654 Precita Ave, San Francisco, CA 94110
          <br /> longevity.tina@gmail.com
          <br /> 415-779-2256
        </p>
      </div>
      <div className='flex py-2 items-center justify-center'>
        <FundTracker
          fundName='Big Purchases'
          fundGoal={5000}
          fundCurrent={3100}
        />
      </div>
    </div>
  );
}
