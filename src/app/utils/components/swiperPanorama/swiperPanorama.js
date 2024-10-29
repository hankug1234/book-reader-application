import { Swiper, SwiperSlide } from 'swiper/react';
import ResizableCard from '../resizableCard/resizableCard';
import MusicNoteCircle from '../musicNoteCircleBackground/musicNoteCircle';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './css/swiperPanorama.css';

import { EffectCoverflow, Pagination} from 'swiper/modules';
import { useNavigate } from 'react-router-dom';

import { useDatasPageSelect } from '../../hooks/crud';
import { useState, useEffect } from 'react';

const SwiperPanorama = ({dataUrl,formater=()=>{},width=270,height=450,type}) => {


    const [startIndex, setStartIndex] = useState(0)
    const [lastIndex,setLastIndex] = useState(0)
    const [currentIndex,setCurrentIndex] = useState(0)
    const [swiperInstance, setSwiperInstance] = useState(null);

    useEffect(() => {
      if (swiperInstance) {
        swiperInstance.update();
      }
    },[swiperInstance]);


    const loadSuccess = (newDatas) => {
      if(newDatas?.data?.length > 0 && currentIndex === lastIndex){
          setLastIndex(oldState => oldState + newDatas?.data?.length)
      }
    }

    const {data:datas,isLoading} = useDatasPageSelect([dataUrl+startIndex+"_"+5]
    ,dataUrl,startIndex,5,loadSuccess)

    const loadCurrentSlides  = (swiper) => {

          const index = swiper.activeIndex
          const start = index
          setStartIndex(start)
          setCurrentIndex(index)
    }
  
    const navigate = useNavigate()
    const cardClick = (e) => {
      navigate()
    }

    return (
      <>
        <MusicNoteCircle/>
        <div className="swiperPanorama">
          <Swiper

            resistance={true}
            navigation={true}
            onActiveIndexChange={loadCurrentSlides}

            watchOverflow={false}
            observer={true}
            observeParents={true}
            onSwiper={setSwiperInstance}

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
                [...Array(lastIndex).keys()].map( (path,index) =>{
                return (
                    <SwiperSlide key={path}>
                      <div className="paranomaCard">
                        <ResizableCard width={width} height={height} cardClick={cardClick}>
                          {
                            isLoading?"loading...":formater(width,height,type,datas.data[index])
                          }
                        </ResizableCard>
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