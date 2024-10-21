import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Pagination } from 'swiper/modules';

import 'swiper/css'
import 'swiper/css/grid';
import 'swiper/css/pagination';
import './css/swiperCards.css';

import ResizableCard from "../resizableCard/resizableCard";
import checkImage from './images/check.png'

import { useState } from "react";

const CardTable = ({row,column,isCheckable,callback,datas})=>{
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
        [...Array(row)].map((_,i)=> {
          return (
            <div key={i} className={"row"}>
              {
                [...Array(column)].map((_,j) => {
                    return (
                      <div key={j} className={"cell"}>
                         <ResizableCard width={200} height={300} cardClick={(e) => {cardClick(e,(i*column + j))}}>
                            {
                              isCheckable && clicked.has((i*column + j))? <img src={checkImage} alt="check" className="check-image"/> : <></>
                            }
                            {
                              `${(i*column + j)}`
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


const SwiperCards = ({row=2,column=5, isCheckable,slids, callback = () => {}, onSlideChange = () => {}}) => {

    return (
        <>
          <Swiper
            onSlideChange={onSlideChange}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper swiperCards"
          >
            {
              slids?.map((slid,key) =>{
                return (
                  <SwiperSlide key={key}>
                    <CardTable isCheckable={isCheckable} datas={slid} row={row} column={column} callback={callback}/>
                  </SwiperSlide>
                )
              })
            }
          </Swiper>
        </>
      );
}

export default SwiperCards 