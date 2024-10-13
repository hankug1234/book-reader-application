import { useState } from "react"
import CardSelectionPage from "../../../utils/components/cardSelection/cardSelection"
import { Link } from "react-router-dom"
import { Outlet } from "react-router-dom"
import { useOutletContext } from "react-router-dom"

import { useLocation } from "react-router-dom"

const ModelInfoForm = () => {

    const [onclick,unclick,isDataSelection] = useOutletContext()
    const path = useLocation().pathname
    
    return (
        <>
        {
            isDataSelection
            ?
            <CardSelectionPage callback={unclick}/>
            :
            <>
                 <div>
                    <Link className={ path.indexOf("info") >= 0 ? "topnav-link-current" : "topnav-link"} to={`/model-info/${path.indexOf("rvc") >= 0 ? "rvc" : "tts"}`}>INFO</Link>
                    <Link className={ path.indexOf("learnning") >= 0 ? "topnav-link-current" : "topnav-link"}
                     to={`/model-learnning/${path.indexOf("rvc") >= 0 ? "rvc" : "tts"}`}>LEARNNING</Link>
                </div>
                <Outlet context={[onclick]}/>
            </>

        }
        </>
    )
}

export default ModelInfoForm