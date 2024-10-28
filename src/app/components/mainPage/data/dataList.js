import SwiperCards from "../../../utils/components/swiperCards/swiperCards";
import { useSelector } from "react-redux";
import RegistedCardFormat from "../../../utils/components/registCardFormat/registCardFormat";

const registedDataFormater = (data,type,width,height)=>{
    return (
        <RegistedCardFormat registedData={data} type={type} width={width} height={height} />
    )
}

const RvcDataList = ({row=2,column=4,width,height})=>{

    const dataUrl = useSelector(state=>state.urls.data_page_rvc)

    return (
        <div>
            <SwiperCards row={row} column={column} isCheckable={false} width={width} height={height} dataUrl={dataUrl} formater={(data,width,height)=>registedDataFormater(data,"RVC",width,height)}/>
        </div>
    );
}

const TtsDataList = ({row=2,column=4,width,height})=>{

    const dataUrl = useSelector(state=>state.urls.data_page_tts)

    return (
        <div>
            <SwiperCards row={row} column={column} isCheckable={false} width={width} height={height} dataUrl={dataUrl} formater={(data,width,height)=>registedDataFormater(data,"RVC",width,height)}/>
        </div>
    );
}


export {RvcDataList, TtsDataList}