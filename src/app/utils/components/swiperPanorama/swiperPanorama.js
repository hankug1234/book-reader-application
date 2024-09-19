import { Swiper, SwiperSlide } from 'swiper/react';
import Card from './card';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './css/swiperPanorama.css';

import { EffectCoverflow, Pagination} from 'swiper/modules';

const SwiperPanorama = (url) => {
  return (
    
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {
            [...Array(9).keys()].map( path =>{
            return (
                <SwiperSlide key={path}>
                    <Card url={path}/>
                </SwiperSlide>
            )
            })
        }
      </Swiper>
  );
}

export default SwiperPanorama