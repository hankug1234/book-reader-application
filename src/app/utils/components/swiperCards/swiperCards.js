import { Swiper, SwiperSlide } from "swiper/react";
import {Pagination,Navigation} from 'swiper/modules';

import 'swiper/css'
import 'swiper/css/grid';
import 'swiper/css/pagination';
import './css/swiperCards.css';

import ResizableCard from "../resizableCard/resizableCard";
import checkImage from './images/check.png'

import { useState, useEffect} from "react";
import { useDatasPageSelect } from "../../hooks/crud";

const CardTable = ({row=2,column=4,isCheckable,callback,datas,slidIndex})=>{
  const [clicked, setClicked] = useState(new Set([]))
    const cardClick = (e,key) => {
      setClicked((s)=>{
        var ns = new Set([...s])
        if(s.has(key)){
          ns.delete(key)
        }else{
          ns.add(key)
        }
        return ns
      })
      callback ? callback() : (()=>false)()
    }

  return (
    <div className={"table"}>
      {
        [...Array(row)]?.map((e1,i)=> {
          return (
            <div key={i} className={"row"}>
              {
                [...Array(column)]?.map((e2,j) => {
                    return (
                      <div key={j} className={"cell"}>
                        <ResizableCard width={200} height={300} cardClick={(e) => {cardClick(e,slidIndex*row*column + (i*column + j))}}>
                            {
                              isCheckable && clicked?.has((i*column + j)) ? <img src={checkImage} alt="check" className="check-image"/> : <></>
                            }
                            {
                              datas[0] === "loading"
                              ? "loading"
                              :`${datas[(i*column + j)]?.data_set_id}`
                            }
                        </ResizableCard>
                      </div>
                    )
                })
              }
            </div>
          )
        } )
      }
    </div>
  )
}


const SwiperCards = ({row,column, isCheckable=false, dataUrl, callback = () => {return false}}) => {

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
      if(newDatas?.data?.length == row*column && currentIndex === lastIndex){
          setLastIndex(oldState => oldState + 1)
      }
      console.log(`reach end index : ${lastIndex}`)
    }

    const {data:datas,isLoading} = useDatasPageSelect([dataUrl+startIndex+"_"+(row*column)]
    ,dataUrl,startIndex,(row*column),loadSuccess)

    const loadCurrentSlides  = (swiper) => {

          const index = swiper.activeIndex
          const start = index*row*column
          setStartIndex(start)
          setCurrentIndex(index)
    }

    return (
        <>
          <Swiper
            resistance={true}
            navigation={true}
            onActiveIndexChange={loadCurrentSlides}
            pagination={{
              clickable: true,
            }}
            slidesPerView={1}
            modules={[Pagination,Navigation]}
            watchOverflow={false}
            loop={false}
            observer={true}
            observeParents={true}
            onSwiper={setSwiperInstance}
            className="mySwiper swiperCards"
          >
            {
              [...Array(lastIndex+1)]?.map((_,key) =>{
                return (
                  <SwiperSlide key={key}>
                    <CardTable isCheckable={isCheckable} datas={isLoading ? ["loading"] : datas.data} row={row} column={column} callback={callback} slidIndex={key}/>
                  </SwiperSlide>
                )
              })
            }
          </Swiper>
        </>
      );
}

export default SwiperCards 