import { useForm, SubmitHandler } from "react-hook-form"
import RadioButtons from "../../../utils/components/radioGroup/radioGroup"
import { useOutletContext } from "react-router-dom"
import FileUploader from "../../../utils/components/fileUpload/fileUpload"
import { useSelector, useDispatch } from "react-redux"
import {setModelName,setBatchSize,setSaveEpoch,setTotalEpoch,setLanguage,setImageName} from '../../../../features/train/ttsTrainSlice';
import { setTtsImageAsync } from "../../../../features/train/ttsTrainSlice"

const TtsTrain = () => {

    const ttsTrainState = useSelector((state) => state.ttsTrain)
    const {register} = useForm(ttsTrainState)
    const dispatch = useDispatch()
    const [onclick] = useOutletContext()
    
    return (
        <>
        {
            <form>
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
            </form>

        }
        </>
    )
}

export default TtsTrain