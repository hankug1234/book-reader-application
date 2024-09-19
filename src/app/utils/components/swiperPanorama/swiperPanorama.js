import { Swiper, SwiperSlide } from 'swiper/react';
import Card from './card';
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
        <div style={{position: "absolute", top:"13%", left:"-27%", zIndex: 100, opacity:"100%"}}>
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            loop={true}
            coverflowEffect={{
              rotate: 12,
              stretch: 0,
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
                [...Array(9).keys()].map( path =>{
                return (
                    <SwiperSlide key={path}>
                        <Card url={path}/>
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