import { Outlet } from "react-router-dom";
import { useState } from "react";
import "../css/train.css"
import ResizableCard from "../../../utils/components/resizableCard/resizableCard";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

const Train = ()=>{
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

    return (
        <div className="train">
            <div>
                <ResizableCard width={300} height={500}>
                    <img src={path.indexOf("rvc") > 0 ? rvcImage : ttsImage} style={{width:"300px", height:"500px"}} alt="default"/>
                </ResizableCard>
            </div>
            <div  className="model-train-form">
                <Outlet context={[onclick,unclick,isDataSelection]}/>
            </div>
        </div>
    );
}

export default Train 