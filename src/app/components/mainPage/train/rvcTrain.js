import { useForm, SubmitHandler } from "react-hook-form"
import { Link } from "react-router-dom"
import { useState } from "react"
import CardSelectionPage from "../../../utils/components/cardSelection/cardSelection"
import FileUploader from "../../../utils/components/fileUpload/fileUpload"
import { useOutletContext } from "react-router-dom"

const RvcTrain = () => {

    const [isDataSelection, setIsDataSelection] = useState(false)
    const onclikc = ()=>{
        setIsDataSelection(true)
    }
    const unclick = () => {
        setIsDataSelection(false)
    }

    const [setBase64] = useOutletContext();

    return (
        <>
        {
            isDataSelection
            ?
            <CardSelectionPage callback={unclick}/>
            :
            <>
                <div>
                    <Link className="topnav-link" to="/rvc">RVC</Link>
                    <Link className="topnav-link" to="/tts">TTS</Link>
                </div>
                <form>
                    <br/>
                    <input placeholder='RVC model name' className="InputField"/>
                    <br/>
                    <br/>
                    <br/>
                    <input placeholder='Batch size' className="InputField"/>
                    <br/>
                    <br/>
                    <br/>
                    <input placeholder='Save epoch' className="InputField"/>
                    <br/>
                    <br/>
                    <br/>
                    <input placeholder='Total epoch' className="InputField"/>
                    <br/>
                    <br/>
                    <br/>
                    <FileUploader setBase64={setBase64}/>
                    <br/>
                    <br/>
                    <br/>
                    <button className="selection-button" onClick={onclikc}>
                        {
                            "select train datas"
                        }
                    </button>
                </form>
            </>
        }
        </>
    )
}

export default RvcTrain