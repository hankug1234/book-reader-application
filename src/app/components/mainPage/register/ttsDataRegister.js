import { useForm, SubmitHandler } from "react-hook-form"
import DatasetUploader from "../../../utils/components/fileUpload/datasetUpload"
import "../css/regist.css"

const TtsDataRegister = () => {

    return (
        <>
            <form>
                <br/>
                <input placeholder='TTS dataset name' className="InputField-regist"/>
                <br/>
                <br/>
                <br/>
                <label for="freeform">Description:</label>
                <br/>
                <textarea id="freeform" name="freeform" rows="4" cols="25">
                </textarea>
                <br/>
                <br/>
                <br/>
                <DatasetUploader name={"DATASET"}/>
                <br/>
                <DatasetUploader name={"CONFIG FILE"}/>
                <br/>
                <DatasetUploader name={"DATASET LIST"}/>
            </form>
        </>
    )
}

export default TtsDataRegister