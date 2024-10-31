import SwiperPanorama from "../../../utils/components/swiperPanorama/swiperPanorama";
import { useSelector } from "react-redux";
import ModelCardFormat from "../../../utils/components/modelCardFormat/modelCardFormat";

const formater = (width,height,type,trainData) => {
    return (
        <ModelCardFormat width={width} height={height} trainInfo={trainData} modelImage={trainData.image} type={type}/>
    )
}

const slideAppender = (setSlides,slides,datas)=>{
    var result = false 

    var newState = {...slides};
    datas.forEach((data)=>{
        if(Object.keys(slides).includes(`${data.id}`)){
            newState[`${data.id}`] = data 
        }else{
            newState[`${data.id}`] = data 
            newState.sequence.push(`${data.id}`)
            result = true
        }
    })

    setSlides(newState)
    return result;
}

const TtsModelList = ()=>{
    const dataUrl = useSelector((state)=>state.urls.model_page_tts)
    return (
        <div>
            <SwiperPanorama dataUrl={dataUrl} formater={formater} type={"TTS"} slideAppender={slideAppender}/>
        </div>
    );
}

const RvcModelList = ()=>{
    const dataUrl = useSelector((state)=>state.urls.model_page_rvc)
    return (
        <div>
            <SwiperPanorama dataUrl={dataUrl} formater={formater} type={"RVC"} slideAppender={slideAppender}/>
        </div>
    );
}

export {TtsModelList, RvcModelList}
