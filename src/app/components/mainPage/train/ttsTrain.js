import { useForm, SubmitHandler } from "react-hook-form"
import RadioButtons from "../../../utils/components/radioGroup/radioGroup"
import { useOutletContext } from "react-router-dom"
import FileUploader from "../../../utils/components/fileUpload/fileUpload"

const TtsTrain = () => {

    const [setBase64,onclick] = useOutletContext()

    return (
        <>
        {
            <form>
                <br/>
                <input placeholder='TTS model name' className="InputField"/>
                <br/>
                <br/>
                <br/>
                <RadioButtons label={"Language"} tags={['EN','JP','KR']}/>
                <br/>
                <br/>
                <FileUploader setBase64={setBase64}/>
                <br/>
                <br/>
                <button className="selection-button" onClick={onclick}>
                    {
                        "SELECT TRAIN DATAS"
                    }
                </button>
            </form>

        }
        </>
    )
}

export default TtsTrain