import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import "../css/train.css"
import ResizableCard from "../../../utils/components/resizableCard/resizableCard";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import RegistedCardFormat from "../../../utils/components/registCardFormat/registCardFormat";


const Register = ()=>{

    const path = useLocation().pathname
    const rvcRegist = useSelector((state) => state.rvcRegist)
    const ttsRegist = useSelector((state) => state.ttsRegist)

    return (
        <div className="train">
            <div>
                <ResizableCard width={360} height={530} lotate={false} overlay={false}>
                    <RegistedCardFormat registedData={path.indexOf("rvc") >= 0 ? rvcRegist : ttsRegist} type={path.indexOf("rvc") >= 0 ? "RVC" : "TTS"} width={360} height={530} />
                </ResizableCard>
            </div>
            <div  className="model-train-form">
                <div>
                    <Link className={ path.indexOf("rvc") >= 0 ? "topnav-link-current" : "topnav-link"} to="/regist/data/rvc">RVC</Link>
                    <Link className={ path.indexOf("tts") >= 0 ? "topnav-link-current" : "topnav-link"} to="/regist/data/tts">TTS</Link>
                </div>
                <Outlet/>
            </div>
        </div>
    );
}

export default Register 