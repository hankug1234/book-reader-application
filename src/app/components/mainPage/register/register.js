import { useForm, SubmitHandler } from "react-hook-form"
import { Outlet } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../css/train.css"
import ResizableCard from "../../../utils/components/resizableCard/resizableCard";

const Register = ()=>{

    

    return (
        <div className="train">
            <div>
                <ResizableCard width={300} height={500}/>
            </div>
            <div  className="model-train-form">
                <div>
                    <Link className="topnav-link" to="/rvc-data-register">RVC</Link>
                    <Link className="topnav-link" to="/tts-data-register">TTS</Link>
                </div>
                <Outlet/>
            </div>
        </div>
    );
}

export default Register 