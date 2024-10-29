import SwiperPanorama from "../../../utils/components/swiperPanorama/swiperPanorama";
import { useSelector } from "react-redux";
import ModelCardFormat from "../../../utils/components/modelCardFormat/modelCardFormat";

const formater = (width,height,type,trainData) => {
    return (
        <ModelCardFormat width={width} height={height} trainInfo={trainData} modelImage={trainData.image} type={type}/>
    )
}

const TtsModelList = ()=>{
    const dataUrl = useSelector((state)=>state.urls.model_page_tts)
    return (
        <div>
            <SwiperPanorama dataUrl={dataUrl} formater={formater} type={"TTS"}/>
        </div>
    );
}

const RvcModelList = ()=>{
    const dataUrl = useSelector((state)=>state.urls.model_page_rvc)
    return (
        <div>
            <SwiperPanorama dataUrl={dataUrl} formater={formater} type={"RVC"}/>
        </div>
    );
}

export {TtsModelList, RvcModelList}
