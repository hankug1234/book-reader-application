import SwiperCards from "../../../utils/components/swiperCards/swiperCards";
import { useSelector } from "react-redux";

const RvcDataList = ({row=2,column=4})=>{

    const dataUrl = useSelector(state=>state.urls.data_page_rvc)

    return (
        <div>
            <SwiperCards row={row} column={column} isCheckable={false} dataUrl={dataUrl}/>
        </div>
    );
}

const TtsDataList = ({row=2,column=4})=>{

    const dataUrl = useSelector(state=>state.urls.data_page_tts)

    return (
        <div>
            <SwiperCards row={row} column={column} isCheckable={false} dataUrl={dataUrl}/>
        </div>
    );
}


export {RvcDataList, TtsDataList}