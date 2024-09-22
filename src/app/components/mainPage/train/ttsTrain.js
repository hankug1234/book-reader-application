import { useForm, SubmitHandler } from "react-hook-form"
import RadioButtons from "../../../utils/components/radioGroup/radioGroup"
import { useState } from "react"
import CardSelectionPage from "../../../utils/components/cardSelection/cardSelection"
import { Link } from "react-router-dom"

const TtsTrain = () => {

    const [isDataSelection, setIsDataSelection] = useState(false)
    const onclikc = ()=>{
        setIsDataSelection(true)
    }
    const unclick = () => {
        setIsDataSelection(false)
    }

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
                    <input placeholder='TTS model name' className="InputField"/>
                    <br/>
                    <br/>
                    <br/>
                    <RadioButtons label={"Language"} tags={['EN','JP','KR']}/>
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

export default TtsTrain