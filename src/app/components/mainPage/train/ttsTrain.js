import { useForm, SubmitHandler } from "react-hook-form"
import RadioButtons from "../../../utils/components/radioGroup/radioGroup"
import { useOutletContext } from "react-router-dom"
import FileUploader from "../../../utils/components/fileUpload/fileUpload"
import { useSelector, useDispatch } from "react-redux"
import {setModelName,setBatchSize,setSaveEpoch,setTotalEpoch,setLanguage,setImageName} from '../../../../features/train/ttsTrainSlice';
import { setTtsImageAsync } from "../../../../features/train/ttsTrainSlice"
import { useInsert } from "../../../utils/hooks/crud"
import { useEffect } from "react"
import RequestUploader from "../../../utils/components/fileUpload/requestUpload"

const TtsTrain = () => {

    const ttsTrainState = useSelector((state) => state.ttsTrain)
    const {register,handleSubmit} = useForm(ttsTrainState)
    const dispatch = useDispatch()
    const [onclick] = useOutletContext()

    const url = useSelector((state)=>state.urls.train_tts)

    const {mutate: post,isSuccess: success, isLoading:loading} = useInsert([])

    const rvcRegistClear = ()=> {
        dispatch(setModelName(""))
        dispatch(setBatchSize(null))
        dispatch(setSaveEpoch(null))
        dispatch(setTotalEpoch(null))
        dispatch(setImageName(""))
        dispatch(setLanguage(""))
    }

    useEffect(()=>{
        if(success){
            rvcRegistClear()
        }
    },[success])

    const submit = (_) => {
        post({url:url, data:JSON.stringify(ttsTrainState)})
    }
    
    return (
        <>
        {
            <form onSubmit={handleSubmit(submit)}>
                <br/>
                <input {...register("modelName", { required: true })}
                 onChange={(e)=>dispatch(setModelName(e.target.value))}
                 placeholder='TTS model name' className="InputField-train" value={ttsTrainState.model_name}/>
                <br/>
                <input {...register("batchSize", { required: true })}
                onChange={(e)=>dispatch(setBatchSize(e.target.value))} 
                placeholder='Batch size' className="InputField-train" value={ttsTrainState.batch_size}/>
                <br/>
                <input {...register("saveEpoch", { required: true, valueAsNumber: true})}
                onChange={(e)=>dispatch(setSaveEpoch(e.target.value))} 
                placeholder='Save epoch' className="InputField-train" value={ttsTrainState.save_epoch}/>
                <br/>
                <input {...register("totalEpoch", { required: true,  valueAsNumber: true})}
                onChange={(e)=>dispatch(setTotalEpoch(e.target.value))} 
                placeholder='Total epoch' className="InputField-train" value={ttsTrainState.total_epoch}/>
                <br/>
                <br/>
                <RadioButtons label={"Language"} tags={['EN','JP','KR']} checked={(lang) => dispatch(setLanguage(lang))}/>
                <br/>
                <FileUploader setBase64={(file)=>dispatch(setTtsImageAsync(file))} setFileName={(imgName)=>dispatch(setImageName(imgName))} fileName={ttsTrainState.image_name}/>
                <br/>
                <button className="selection-button" onClick={onclick}>
                    {
                        "SELECT TRAIN DATAS"
                    }
                </button>
                <br/>
                <br/>
                {
                    loading?"loading":<RequestUploader/>
                }
            </form>

        }
        </>
    )
}

export default TtsTrain