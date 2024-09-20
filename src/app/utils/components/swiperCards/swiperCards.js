import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Pagination } from 'swiper/modules';

import 'swiper/css'
import 'swiper/css/grid';
import 'swiper/css/pagination';
import './css/swiperCards.css';

import Card from "../card/card";


const SwiperCards = ({perview,row,space,url}) => {
    return (
        <>
          <Swiper
            slidesPerView={perview}
            grid={{
              rows: row,
            }}
            spaceBetween={space}
            pagination={{
              clickable: true,
            }}
            modules={[Grid, Pagination]}
            className="mySwiper"
          >
            {
              [...Array(perview * row).keys()].map(key =>{
                return (
                  <SwiperSlide key={key}>
                    <Card url={url}/>
                  </SwiperSlide>
                )
              })
            }
          </Swiper>
        </>
      );
}

export default SwiperCards 