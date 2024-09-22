import { useForm, SubmitHandler } from "react-hook-form"
import { Outlet } from "react-router-dom";
import { useState } from "react";
import "../css/train.css"
import ResizableCard from "../../../utils/components/resizableCard/resizableCard";
import useBase64 from "../../../utils/hooks/convertBase64";

const Train = ()=>{

    const [base64, setBase64] = useBase64("")

    return (
        <div className="train">
            <div>
                <ResizableCard width={400} height={600}>
                    <img src={base64} style={{width:"400px", height:"600px"}} alt="default"/>
                </ResizableCard>
            </div>
            <div  className="model-train-form">
                <Outlet context={[setBase64]}/>
            </div>
        </div>
    );
}

export default Train 