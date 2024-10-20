import SwiperCards from "../../../utils/components/swiperCards/swiperCards";
import { useSelector } from "react-redux";
import { useDatasPageSelect } from "../../../utils/hooks/crud";
import { useState} from "react";

const RvcDataList = ()=>{

    const dataUrl = useSelector(state=>state.urls.data_page_rvc)
    const [pageRange, setPageRange] = useState([0,19])
    const {data,isLoading} = useDatasPageSelect(["rvcDatas"],dataUrl,pageRange[0],pageRange[1])


    const onSlideChange = (swiper) => {
        const index = swiper.activeIndex
        const start = index*20;
        const end = start + 19
        setPageRange([start,end])
    }

    return (
        <div>
            <SwiperCards perview="5" row="2" space="5" datas={isLoading ? ["loading..."] : data?.data} onSlideChange={onSlideChange}/>
        </div>
    );
}

const TtsDataList = ()=>{

    const dataUrl = useSelector(state=>state.urls.data_page_tts)
    const [pageRange, setPageRange] = useState([0,19])
    const {data,isLoading} = useDatasPageSelect(["ttsDatas"],dataUrl,pageRange[0],pageRange[1])


    const onSlideChange = (swiper) => {
        const index = swiper.activeIndex
        const start = index*20;
        const end = start + 19
        setPageRange([start,end])
    }

    console.log(data)

    return (
        <div>
            <SwiperCards perview="5" row="2" space="5" datas={isLoading ? ["loading..."] : data?.data} onSlideChange={onSlideChange}/>
        </div>
    );
}

export {RvcDataList, TtsDataList}