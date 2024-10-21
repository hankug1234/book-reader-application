import { Swiper, SwiperSlide } from "swiper/react";
import {Pagination } from 'swiper/modules';

import 'swiper/css'
import 'swiper/css/grid';
import 'swiper/css/pagination';
import './css/swiperCards.css';

import ResizableCard from "../resizableCard/resizableCard";
import checkImage from './images/check.png'

import { useState, useEffect } from "react";
import { useDatasPageSelect } from "../../hooks/crud";

const CardTable = ({row,column,isCheckable,callback,datas,slidIndex})=>{
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
                              `${datas[(i*column +j)]}`
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


const SwiperCards = ({row=2,column=5, isCheckable, dataUrl, callback = () => {}}) => {

    const [pageRange, setPageRange] = useState([[0,row*column]])
  
    const [lastIndex,setLastIndex] = useState(0)
    const {data,isLoading} = useDatasPageSelect([dataUrl+pageRange[pageRange.length-1][0]+"_"+pageRange[pageRange.length-1][1]]
      ,dataUrl,pageRange[pageRange.length-1][0],pageRange[pageRange.length-1][1])
    const [slids,setSlids] = useState([])

    useEffect(()=>{
      if(data?.data?.length > 0 && isLoading === false){
          setSlids( (oldState)=>{return [...oldState,data]} )
      }
    },[data])

    const loadMoreSlides  = () => {
        if(slids && slids[slids.length-1]?.data?.length > 0){
            const index = lastIndex+1
            const start = index*row*column;
            const end = start + row*column - 1
            setPageRange(oldState => [...oldState,[start,end]])
            setLastIndex(index)
        }
    }

    return (
        <>
          <Swiper
            onReachEnd={loadMoreSlides}
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
                    <CardTable isCheckable={isCheckable} datas={slid.data} row={row} column={column} callback={callback} slidIndex={key}/>
                  </SwiperSlide>
                )
              })
            }
          </Swiper>
        </>
      );
}

export default SwiperCards 