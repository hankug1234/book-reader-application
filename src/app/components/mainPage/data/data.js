import { useState } from "react";
import { Link } from "react-router-dom";
import "../css/train.css"
import ResizableCard from "../../../utils/components/resizableCard/resizableCard";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

const Data = ()=>{

    const path = useLocation().pathname
    const rvcRegist = useSelector((state) => state.rvcRegist)
    const ttsRegist = useSelector((state) => state.ttsRegist)
    const infoFilter = (s) => {
        return !(s.indexOf("dataSetName") >= 0) && !(s.indexOf("description") >=0 )
    }

    return (
        <div className="train">
            <div>
                <ResizableCard width={300} height={500} lotate={false} overlay={false}>
                    <h1 className={"dataType"}>{path.indexOf("rvc") >= 0 ? "RVC DATA" : "TTS DATA"}</h1>
                    {
                    path.indexOf("rvc") >= 0 
                    ? Object.entries(rvcRegist).map((items)=>`${items[0]} : ${items[1]}`).filter((s)=>infoFilter(s)===true)
                    .map((s,i)=><h1 style={{bottom:`${70 - 5*i}%`}} className={"dataInfo"}>{s}</h1>)
                    : Object.entries(ttsRegist).map((items)=>`${items[0]} : ${items[1]}`).filter((s)=>infoFilter(s)===true)
                    .map((s,i)=><h1 style={{bottom:`${70 - 5*i}%`}} className={"dataInfo"}>{s}</h1>)
                    }
                    <label for={"dataDescription"} className={"descriptionLabel"}>{"description:"}</label>
                    <div id={"dataDescription"} className={"dataDescription"}>{path.indexOf("rvc") >= 0 ? rvcRegist.description : ttsRegist.description}</div>
                    <h1 className={"dataName"}>{path.indexOf("rvc") >= 0 ? rvcRegist.data_set_name : ttsRegist.data_set_name}</h1>
                    <div style={{width: "300px",height: "500px", backgroundColor: "black", position:"absolute", top:"0%" }}/>
                </ResizableCard>
            </div>
            <div  className="model-train-form">
                <div>
                    <Link className={ path.indexOf("rvc") >= 0 ? "topnav-link-current" : "topnav-link"} to="/rvc-data-register">RVC</Link>
                    <Link className={ path.indexOf("tts") >= 0 ? "topnav-link-current" : "topnav-link"} to="/tts-data-register">TTS</Link>
                </div>
                <Outlet/>
            </div>
        </div>
    );
}

export default Data