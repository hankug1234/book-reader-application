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
import { useState} from 'react';

const SwiperPanorama = ({dataUrl,formater=()=>{},width=270,height=450,type,slideAppender}) => {

    const [lastIndex,setLastIndex] = useState(0)
    const [currentIndex,setCurrentIndex] = useState(0)
    const [offset, setOffset] = useState(5)
    const [slides, setSlides] = useState({sequence:[]})

    const loadSuccess = (newDatas) => {
      if(newDatas?.data?.length > 0 && slideAppender(setSlides,slides,newDatas.data)){
          setLastIndex(oldState => oldState + newDatas?.data?.length)
          if(offset === 5){
            setOffset(1)
          }
      }
    }
    const appendix = currentIndex === lastIndex ? 1 : 0
    const {isLoading} = useDatasPageSelect([dataUrl+currentIndex+"_"+offset+appendix]
    ,dataUrl,currentIndex,offset+appendix,loadSuccess)

    const loadCurrentSlides  = (swiper) => {
          console.log(swiper.activeIndex?swiper.activeIndex:0)
          setCurrentIndex(swiper.activeIndex?swiper.activeIndex:0)
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

            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
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
                [...Array(lastIndex).keys()].map( (value, index) =>{
                return (
                    <SwiperSlide key={index}>
                      <div className="paranomaCard">
                        <ResizableCard width={width} height={height} cardClick={cardClick}>
                          {
                            formater(width,height,type,slides[slides.sequence[index]])
                          }
                        </ResizableCard>
                      </div>
                    </SwiperSlide>
              
                    )
                  }
                )
            }
          </Swiper>
        </div>
      </>
  );
}

export default SwiperPanorama