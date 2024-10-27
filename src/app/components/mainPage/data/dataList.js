import SwiperCards from "../../../utils/components/swiperCards/swiperCards";
import { useSelector } from "react-redux";
import RegistedCardFormat from "../../../utils/components/registCardFormat/registCardFormat";

const registedDataFormater = (data,type,width,height)=>{
    return (
        <RegistedCardFormat registedData={data} type={type} width={width} height={height} />
    )
}

const RvcDataList = ({row=2,column=4})=>{

    const dataUrl = useSelector(state=>state.urls.data_page_rvc)

    return (
        <div>
            <SwiperCards row={row} column={column} isCheckable={false} dataUrl={dataUrl} formater={(data)=>registedDataFormater(data,"RVC",200,300)}/>
        </div>
    );
}

const TtsDataList = ({row=2,column=4})=>{

    const dataUrl = useSelector(state=>state.urls.data_page_tts)

    return (
        <div>
            <SwiperCards row={row} column={column} isCheckable={false} dataUrl={dataUrl} formater={(data)=>registedDataFormater(data,"RVC",200,300)}/>
        </div>
    );
}


export {RvcDataList, TtsDataList}