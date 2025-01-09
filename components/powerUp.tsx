'use client';
import React, { useState } from 'react';
import './powerUp.css';
import axios from 'axios';
import Image from 'next/image';

const PowerUp = () => {
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const [expand, setExpand] = useState(false);
  const [loading, setLoading] = useState(false)

  const handleExpand = () => {
    setExpand(!expand);
  };

  const handleDogRequest = () => {
    setLoading(true)

    axios
      .get('https://dog.ceo/api/breeds/image/random')
      .then(function (response) {
        // handle success
        setImageUrls((prev) => [...prev, response.data.message]);
        setLoading(false)
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
      });
  };

  return (
    <>
      <div
        className='container'
        onClick={() => {
          handleExpand();
        }}
      >
        <div className='power_bar'>
          <div className='status_bar'></div>
        </div>
      </div>

      <div
        className='project_section'
        style={{
          height: expand ? 'auto' : '0',
          opacity: expand ? 1 : 0,
          transition: 'height 0.3s ease, opacity 0.3s ease',
          overflow: 'hidden',
          margin: expand ? '50px 0' : '0'
        }}
      >
        <div className='button_section'>
          <button
            className='button'
            onClick={() => {
              handleDogRequest();
            }}
          >
           {loading? '...' : 'More dogs!'}
          </button>
          <button
            className='button'
            onClick={() => {
              setImageUrls([]);
            }}
          >
            Less dogs!
          </button>
        </div>
        <div className='image_grid'>
          {imageUrls.length
            ? imageUrls.map((el, index) => {
                return (
                  <Image
                    key={index}
                    src={el}
                    width={300}
                    height={300}
                    alt='image of dog'
                  />
                );
              })
            : null}
        </div>
      </div>
    </>
  );
};

export default PowerUp;
