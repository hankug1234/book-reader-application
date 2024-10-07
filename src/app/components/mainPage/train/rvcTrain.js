import { useForm, SubmitHandler } from "react-hook-form"
import FileUploader from "../../../utils/components/fileUpload/fileUpload"
import { useOutletContext } from "react-router-dom"

const RvcTrain = () => {

    const [setBase64,onclick] = useOutletContext()

    return (
        <>
        {
            <form>
                <br/>
                <input placeholder='RVC model name' className="InputField-train"/>
                <br/>
                <br/>
                <br/>
                <input placeholder='Batch size' className="InputField-train"/>
                <br/>
                <br/>
                <br/>
                <input placeholder='Save epoch' className="InputField-train"/>
                <br/>
                <br/>
                <br/>
                <input placeholder='Total epoch' className="InputField-train"/>
                <br/>
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

export default RvcTrain