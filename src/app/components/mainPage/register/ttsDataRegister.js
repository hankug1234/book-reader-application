import { useForm, SubmitHandler } from "react-hook-form"
import DatasetUploader from "../../../utils/components/fileUpload/datasetUpload"
import "../css/regist.css"
import { useDispatch,useSelector } from "react-redux"
import {setDataSetName,setDataSet,setDescription,setConfig,setFileList} from '../../../../features/regist/ttsRegistSlice'

const TtsDataRegister = () => {

    const {register} = useForm()
    const ttsRegister = useSelector((state)=>state.ttsRegist)
    const dispatch = useDispatch()
    const dataSetUpload = (file)=>{dispatch(setDataSet(file))}
    const configUpload = (file)=>{dispatch(setConfig(file))}
    const fileListUpload = (file)=>{dispatch(setFileList(file))}

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
                <DatasetUploader name={"DATASET"} upload={dataSetUpload}/>
                <br/>
                <DatasetUploader name={"CONFIG FILE"} upload={configUpload}/>
                <br/>
                <DatasetUploader name={"DATASET LIST"} upload={fileListUpload}/>
            </form>
        </>
    )
}

export default TtsDataRegister