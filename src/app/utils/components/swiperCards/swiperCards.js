import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Pagination } from 'swiper/modules';

import 'swiper/css'
import 'swiper/css/grid';
import 'swiper/css/pagination';
import './css/swiperCards.css';

import Card from "../card/card";
import checkImage from './images/check.png'

import { useState } from "react";


const SwiperCards = ({perview,row,space,isCheckable,callback}) => {

    const [clicked, setClicked] = useState(new Set([]))

    const cardClick = (e,key) => {
      setClicked((s)=>{
        var ns = new Set([...s])
        if(s.has(key)){
          ns.delete(key)
        }else{
          ns.add(key)
        }
        console.log(isCheckable, clicked.has(key))
        return ns
      })
      callback ? callback() : (()=>false)()
    }

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
              [...Array(16).keys()].map(key =>{
                return (
                  <SwiperSlide key={key}>
                    <Card cardClick={(e) => {cardClick(e,key)}}>
                      {
                        isCheckable && clicked.has(key)? <img src={checkImage} alt="check" className="check-image"/> : <></>
                      }
                    </Card>
                  </SwiperSlide>
                )
              })
            }
          </Swiper>
        </>
      );
}

export default SwiperCards 