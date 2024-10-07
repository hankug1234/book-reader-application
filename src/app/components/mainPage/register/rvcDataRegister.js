import { useForm, SubmitHandler } from "react-hook-form"
import DatasetUploader from "../../../utils/components/fileUpload/datasetUpload"

const RvcDataRegister = () => {

    return (
        <>
            <form>
                <br/>
                <input placeholder='RVC dataset name' className="InputField-regist"/>
                <br/>
                <br/>
                <br/>
                <DatasetUploader name={"DATASET"}/>
            </form>
        </>
    )
}

export default RvcDataRegister