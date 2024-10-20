import { useForm, SubmitHandler } from "react-hook-form"
import DatasetUploader from "../../../utils/components/fileUpload/datasetUpload"
import "../css/regist.css"
import { useDispatch,useSelector } from "react-redux"
import {setDataSetName,setDataSet,setDescription,setConfig,setFileList} from '../../../../features/regist/ttsRegistSlice'
import { useInsert } from "../../../utils/hooks/crud"
import { useEffect } from "react"
import RequestUploader from "../../../utils/components/fileUpload/requestUpload"

const TtsDataRegister = () => {

    const {register, handleSubmit} = useForm()
    const ttsRegister = useSelector((state)=>state.ttsRegist)
    const url = useSelector((state)=>state.urls.regist_tts_data)
    const dispatch = useDispatch()

    const {mutate: post,isSuccess: success, isLoading:loading} = useInsert([])

    const submit = (_) => {
        post({url:url, data:JSON.stringify(ttsRegister)})
    }

    const ttsRegistClear = () => {
        dispatch(setDataSet(null))
        dispatch(setConfig(null))
        dispatch(setFileList(null))
        dispatch(setDataSetName(""))
        dispatch(setDescription(""))
    }

    useEffect(()=>{
        if(success){
            ttsRegistClear()
        }
    },[success])

    return (
        <>
            <form onSubmit={handleSubmit(submit)}>
                <br/>
                <input
                {...register("modelDataSet", { required: true })}
                value={ttsRegister.data_set_name}
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
                <DatasetUploader name={"DATASET"} upload={(dataSet)=>dispatch(setDataSet(dataSet))}/>
                <br/>
                <DatasetUploader name={"CONFIG FILE"} upload={(config)=>dispatch(setConfig(config))}/>
                <br/>
                <DatasetUploader name={"FILE LIST"} upload={(fileList)=>dispatch(setFileList(fileList))}/>
                <br/>
                {
                    loading?"loading":<RequestUploader/>
                }
            </form>
        </>
    )
}

export default TtsDataRegister