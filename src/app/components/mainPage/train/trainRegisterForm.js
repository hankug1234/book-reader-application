import { Link } from "react-router-dom"
import { Outlet } from "react-router-dom"
import { useOutletContext } from "react-router-dom"
import { useLocation } from "react-router-dom"

const TrainRegisterForm = () => {

    const [onclick] = useOutletContext()
    const location = useLocation().pathname

    return (
            <>
                 <div>
                    <Link className={ location.indexOf("rvc") >= 0 ? "topnav-link-current" : "topnav-link"} to="/train/rvc">RVC</Link>
                    <Link className={ location.indexOf("tts") >= 0 ? "topnav-link-current" : "topnav-link"} to="/train/tts">TTS</Link>
                </div>
                <Outlet context={[onclick]}/>
            </>
    )
}

export default TrainRegisterForm