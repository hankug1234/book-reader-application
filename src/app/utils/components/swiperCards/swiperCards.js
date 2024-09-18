import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Pagination } from 'swiper/modules';

import 'swiper/css'
import 'swiper/css/grid';
import 'swiper/css/pagination';
import './css/swiperCards.css';

import Card from "./card";


const SwiperCards = ({perview,row,space}) => {
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
            <SwiperSlide>
              <Card url={"./utils/components/swiperCards/images/card.png"}/>
            </SwiperSlide>
            <SwiperSlide>
              <Card url={"./utils/components/swiperCards/images/card.png"}/>
            </SwiperSlide>
            <SwiperSlide>
              <Card url={"./utils/components/swiperCards/images/card.png"}/>
            </SwiperSlide>
            <SwiperSlide>
              <Card url={"./utils/components/swiperCards/images/card.png"}/>
            </SwiperSlide>
            <SwiperSlide>
              <Card url={"./utils/components/swiperCards/images/card.png"}/>
            </SwiperSlide>
            <SwiperSlide>
              <Card url={"./utils/components/swiperCards/images/card.png"}/>
            </SwiperSlide>
            <SwiperSlide>
              <Card url={"./utils/components/swiperCards/images/card.png"}/>
            </SwiperSlide>
            <SwiperSlide>
              <Card url={"./utils/components/swiperCards/images/card.png"}/>
            </SwiperSlide>
            <SwiperSlide>
              <Card url={"./utils/components/swiperCards/images/card.png"}/>
            </SwiperSlide>
            <SwiperSlide>
              <Card url={"./utils/components/swiperCards/images/card.png"}/>
            </SwiperSlide>
            
          </Swiper>
        </>
      );
}

export default SwiperCards 