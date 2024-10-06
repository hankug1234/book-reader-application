import { useState } from "react"
import CardSelectionPage from "../../../utils/components/cardSelection/cardSelection"
import { Link } from "react-router-dom"
import { Outlet } from "react-router-dom"
import { useOutletContext } from "react-router-dom"

const TrainRegisterForm = () => {

    const [setBase64,onclick,unclick,isDataSelection] = useOutletContext()

    return (
        <>
        {
            isDataSelection
            ?
            <CardSelectionPage callback={unclick}/>
            :
            <>
                 <div>
                    <Link className="topnav-link" to="/rvc-train">RVC</Link>
                    <Link className="topnav-link" to="/tts-train">TTS</Link>
                </div>
                <Outlet context={[setBase64,onclick]}/>
            </>

        }
        </>
    )
}

export default TrainRegisterForm