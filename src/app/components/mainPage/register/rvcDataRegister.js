import { useForm, SubmitHandler } from "react-hook-form"
import DatasetUploader from "../../../utils/components/fileUpload/datasetUpload"
import "../css/regist.css"

const RvcDataRegister = () => {

    return (
        <>
            <form>
                <br/>
                <input placeholder='RVC dataset name' className="InputField-regist"/>
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
            </form>
        </>
    )
}

export default RvcDataRegister