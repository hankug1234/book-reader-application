import { Link } from "react-router-dom"
import { Outlet } from "react-router-dom"
import { useLocation } from "react-router-dom"

const Datas = ()=>{

    const path = useLocation().pathname

    return(
        <div>
            <div className={"dataTypeSelect"}>
                <Link className={ path.indexOf("rvc") >= 0 ? "topnav-link-current" : "topnav-link"} to="/datas/rvc">RVC</Link>
                <Link className={ path.indexOf("tts") >= 0 ? "topnav-link-current" : "topnav-link"} to="/datas/tts">TTS</Link>
            </div>
            <Outlet/>
        </div>
    )

}

export default Datas