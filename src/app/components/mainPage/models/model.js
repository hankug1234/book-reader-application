import { Outlet } from "react-router-dom";
import { useState } from "react";
import "../css/train.css"
import ResizableCard from "../../../utils/components/resizableCard/resizableCard";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import DefaultEffect from "../../../utils/components/textEffect/defaultEffect";

const Model = ()=>{
    const [isDataSelection, setIsDataSelection] = useState(false)
    const onclick = ()=>{
        setIsDataSelection(true)
        console.log("click")
    }
    const unclick = () => {
        setIsDataSelection(false)
    }

    const path = useLocation().pathname

    const rvcImage = useSelector((state) => state.rvcTrain.image)
    const ttsImage = useSelector((state) => state.ttsTrain.image)
    const rvcTrain = useSelector((state) => state.rvcTrain)
    const ttsTrain = useSelector((state) => state.ttsTrain)

    const infoFilter = (s) => {
        return !(s.indexOf("modelName") >= 0) && !(s.indexOf("image") >= 0)
    }

    return (
        <div className="train">
            <div>
                <ResizableCard width={300} height={500}>
                    <img src={path.indexOf("rvc") >= 0 ? rvcImage : ttsImage} style={{width:"300px", height:"500px",zIndex:100}} alt="default"/>
                    <DefaultEffect name={path.indexOf("rvc") > 0 ? rvcTrain.modelName : ttsTrain.modelName} 
                    type={path.indexOf("rvc") > 0 ? "RVC" : "TTS"} 
                    infos={path.indexOf("rvc") > 0 
                    ? Object.entries(rvcTrain).map((items)=>`${items[0]} : ${items[1]}`).filter((s)=>infoFilter(s)===true)
                    : Object.entries(ttsTrain).map((items)=>`${items[0]} : ${items[1]}`).filter((s)=>infoFilter(s)===true)}
                    width={"300px"} />
                </ResizableCard>
            </div>
            <div  className="model-train-form">
                <Outlet context={[onclick,unclick,isDataSelection]}/>
            </div>
        </div>
    );
}

export default Model