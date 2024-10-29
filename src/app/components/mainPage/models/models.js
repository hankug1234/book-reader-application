import { Outlet } from "react-router-dom";
import "../css/train.css"
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const Models = ()=>{
    const location = useLocation().pathname

    return (
            <>
                <Outlet/>
                 <div>
                    <Link className={ location.indexOf("rvc") >= 0 ? "topnav-link-current" : "topnav-link"} to="/models/rvc">RVC</Link>
                    <Link className={ location.indexOf("tts") >= 0 ? "topnav-link-current" : "topnav-link"} to="/models/tts">TTS</Link>
                </div>
            </>
    )
}

export default Models