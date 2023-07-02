import React from 'react';
import Carousel from '../../Components/Carousel';
import baseDomain, { subRouteAnime, subRouteTop } from '../../Constansts/appSetting';
import useFetch from '../../Helpers/hooks/useFetch';
import fallbackData from "../../Constansts/fallback.json"

const Home = () => {

  const { data , error, isLoading } = useFetch(
    `${baseDomain}${subRouteTop}${subRouteAnime}?filter=airing`
  );

  return (
    <>
      {isLoading ? (
        <div className='modal' >
        <div className='loader' ></div>
        </div>
      ) : error ? (
        <div>          {fallbackData?.anime.map((item: any) => (
          <p key={item.id} >{item.title}</p>
        ))}</div>
      ) : (
        <div>
        {data && <Carousel data={data.data} />}
        </div>
      )}
    </>
  );
};

export default Home;
