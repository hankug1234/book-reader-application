import { useForm, SubmitHandler } from "react-hook-form"
import { Outlet } from "react-router-dom";
import { useState } from "react";
import "../css/train.css"
import ResizableCard from "../../../utils/components/resizableCard/resizableCard";
import useBase64 from "../../../utils/hooks/convertBase64";

const Train = ()=>{
    const [isDataSelection, setIsDataSelection] = useState(false)
    const onclick = ()=>{
        setIsDataSelection(true)
        console.log("click")
    }
    const unclick = () => {
        setIsDataSelection(false)
    }
    const [base64, setBase64] = useBase64("")

    return (
        <div className="train">
            <div>
                <ResizableCard width={300} height={500}>
                    <img src={base64} style={{width:"300px", height:"500px"}} alt="default"/>
                </ResizableCard>
            </div>
            <div  className="model-train-form">
                <Outlet context={[setBase64,onclick,unclick,isDataSelection]}/>
            </div>
        </div>
    );
}

export default Train 