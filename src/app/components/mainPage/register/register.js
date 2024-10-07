import { useForm, SubmitHandler } from "react-hook-form"
import { Outlet } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../css/train.css"
import ResizableCard from "../../../utils/components/resizableCard/resizableCard";
import { useLocation } from "react-router-dom";

const Register = ()=>{

    const location = useLocation().pathname

    return (
        <div className="train">
            <div>
                <ResizableCard width={300} height={500}/>
            </div>
            <div  className="model-train-form">
                <div>
                    <Link className={ location.indexOf("rvc") >= 0 ? "topnav-link-current" : "topnav-link"} to="/rvc-data-register">RVC</Link>
                    <Link className={ location.indexOf("tts") >= 0 ? "topnav-link-current" : "topnav-link"} to="/tts-data-register">TTS</Link>
                </div>
                <Outlet/>
            </div>
        </div>
    );
}

export default Register 