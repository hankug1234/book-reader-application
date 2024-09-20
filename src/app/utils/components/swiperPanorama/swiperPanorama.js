import { Swiper, SwiperSlide } from 'swiper/react';
import Card from '../card/card';
import MusicNoteCircle from '../musicNoteCircleBackground/musicNoteCircle';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './css/swiperPanorama.css';

import { EffectCoverflow, Pagination} from 'swiper/modules';

const SwiperPanorama = (url) => {
  
    return (
      <>
        <MusicNoteCircle/>
        <div className="swiperPanorama">
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={false}
            slidesPerView={5}
            loop={true}
            speed={1000}
            coverflowEffect={{
              rotate: 12,
              stretch: 32,
              depth: 100,
              modifier: -1,
              slideShadows: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper"
          >
            {
                [...Array(12).keys()].map( path =>{
                return (
                    <SwiperSlide key={path}>
                      <div className="paranomaCard">
                        <Card url={path}/>
                      </div>
                    </SwiperSlide>
                )
                })
            }
          </Swiper>
        </div>
      </>
  );
}

export default SwiperPanorama