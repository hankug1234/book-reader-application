import { useForm, SubmitHandler } from "react-hook-form"
import DatasetUploader from "../../../utils/components/fileUpload/datasetUpload"
import "../css/regist.css"
import { useDispatch,useSelector } from "react-redux"
import {setDataSetName,setDataSet,setDescription,setConfig,setFileList} from '../../../../features/regist/ttsRegistSlice'

const TtsDataRegister = () => {

    const {register} = useForm()
    const ttsRegister = useSelector((state)=>state.ttsRegist)
    const dispatch = useDispatch()

    return (
        <>
            <form>
                <br/>
                <input
                {...register("modelDataSet", { required: true })}
                value={ttsRegister.dataSetName}
                onChange={(e)=>dispatch(setDataSetName(e.target.value))}  
                placeholder='TTS dataset name' className="InputField-regist"/>
                <br/>
                <br/>
                <br/>
                <label for="freeform">Description:</label>
                <br/>
                <textarea 
                placeholder='TTS dataset description'
                value={ttsRegister.description}
                onChange={(e)=>dispatch(setDescription(e.target.value))}
                id="freeform" name="freeform" rows="4" cols="25">
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