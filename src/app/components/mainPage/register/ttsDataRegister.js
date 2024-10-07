import { useForm, SubmitHandler } from "react-hook-form"
import DatasetUploader from "../../../utils/components/fileUpload/datasetUpload"

const TtsDataRegister = () => {

    return (
        <>
            <form>
                <br/>
                <input placeholder='TTS dataset name' className="InputField-regist"/>
                <br/>
                <br/>
                <br/>
                <DatasetUploader name={"DATASET"}/>
                <br/>
                <br/>
                <DatasetUploader name={"CONFIG FILE"}/>
                <br/>
                <br/>
                <DatasetUploader name={"DATASET LIST"}/>
            </form>
        </>
    )
}

export default TtsDataRegister