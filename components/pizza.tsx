'use client';
import React, { useState } from 'react';
import './pizza.css';
import Image from 'next/image'


export default function Pizza() {
  const [expand, setExpand] = useState(false);

  const handleExpand = () => {
    setExpand(!expand);
    console.log('expand', expand);
  };

  return (
    <>
      <div
        className='slice'
        onClick={handleExpand}
      >
        <div className='crust'></div>
        <div
          className='toppings tomato'
          style={{ bottom: '20%', left: '40%' }}
        ></div>
        <div
          className='toppings tomato'
          style={{ top: '20%', right: '40%' }}
        ></div>
        <div
          className='toppings olives'
          style={{ top: '50%', left: '60%' }}
        ></div>
        <div
          className='toppings olives'
          style={{ top: '10%', left: '10%' }}
        ></div>
        <div
          className='toppings mushroom'
          style={{ top: '40%', left: '40%' }}
        ></div>
        <div
          className='toppings mushroom'
          style={{ top: '10%', right: '10%' }}
        ></div>
        <div
          className='toppings mushroom'
          style={{ top: '20%', left: '20%' }}
        ></div>
      </div>
      <div
        className='project_grid'
        style={{
          height: expand ? '600px' : '0',
          opacity: expand ? 1 : 0,
          transition: 'height 0.3s ease, opacity 0.3s ease',
          overflow: 'hidden',
        }}
      >
        <div><Image src='/UIAdventure.png' alt='UI sample of booking platform' width={600} height={300} style={{borderRadius: '4px'}}/></div>
        <div><Image src='/chromeExtn.png' alt='UI sample chrome extension' width={500} height={300} style={{borderRadius: '4px'}}/></div>
        <div><Image src='/imageEditing.png' alt='UI sample of image editor' width={500} height={300} style={{borderRadius: '4px'}}/></div>
      </div>
    </>
  );
}
