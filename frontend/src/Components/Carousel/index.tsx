import React, { useState } from 'react';
import './style.scss';
import { starRated, starUnRated } from '../../Assets/icons/star';



const Carousel = ({
  data = [
    {
      id: 0,
      title: '',
      title_english:'',
      synopsis: '',
      images: {
        jpg: {
          image_url: '',
          small_image_url: '',
          large_image_url: '',
        },
        webp: {
          image_url: '',
          small_image_url: '',
          large_image_url: '',
        },
      },
    },
  ],
}) => {
  const [next, setNext] = useState<number>(0);

  const handleNext = () => {
    if (next === 9) return setNext(0);
    setNext((prev) => prev + 1);
  };
  const handlePrev = () => {
    if (next === 0) return setNext(9);
    setNext((prev) => prev - 1);
  };

  const ellipses = (description: string) => {
    return description.length > 280
        ? description.substring(0, 280) + '...'
        : description;

  };
  return (
    <div className='carousel'>
      <div
        className='carousel-item'
      >
        <div className='carousel-bg' >
            <img src={data[next].images.webp.large_image_url} alt={data[next].title_english} />
        </div>
        <div id='carousel-overlay'>
          <div className='carousel-item-details'>
            <p className='text ranking'>{` Trending #${next + 1}`}</p>
            <p className='titleLarge title'>{data[next].title_english}</p>
            <p
              className='text1 description'
              dangerouslySetInnerHTML={{
                __html: ellipses(data[next].synopsis),
              }}
            ></p>
            <p className='ratings'>
              {starRated}
              {starRated}
              {starRated}
              {starRated}
              {starUnRated}
            </p>
          </div>
        </div>
      </div>
      <div className='carousel-buttons'>
        <button onClick={handlePrev}>&#8592;</button>
        <button onClick={handleNext}>&#8594;</button>
      </div>
    </div>
  );
};

export default Carousel;
