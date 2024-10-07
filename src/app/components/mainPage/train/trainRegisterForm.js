import { useState } from "react"
import CardSelectionPage from "../../../utils/components/cardSelection/cardSelection"
import { Link } from "react-router-dom"
import { Outlet } from "react-router-dom"
import { useOutletContext } from "react-router-dom"
import { useLocation } from "react-router-dom"

const TrainRegisterForm = () => {

    const [onclick,unclick,isDataSelection] = useOutletContext()
    const location = useLocation().pathname

    return (
        <>
        {
            isDataSelection
            ?
            <CardSelectionPage callback={unclick}/>
            :
            <>
                 <div>
                    <Link className={ location.indexOf("rvc") >= 0 ? "topnav-link-current" : "topnav-link"} to="/rvc-train">RVC</Link>
                    <Link className={ location.indexOf("tts") >= 0 ? "topnav-link-current" : "topnav-link"} to="/tts-train">TTS</Link>
                </div>
                <Outlet context={[onclick]}/>
            </>

        }
        </>
    )
}

export default TrainRegisterForm