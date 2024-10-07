import { useForm, SubmitHandler } from "react-hook-form"
import FileUploader from "../../../utils/components/fileUpload/fileUpload"
import { useOutletContext } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import {setModelName,setBatchSize,setSaveEpoch,setTotalEpoch} from '../../../../features/train/rvcTrainSlice';
import { setImageAsync } from "../../../../features/train/rvcTrainSlice";

const RvcTrain = () => {

    const rvcTrainSelector = (state) => state.rvcTrain
    const rvcTrainState = useSelector(rvcTrainSelector)
    const {register} = useForm(rvcTrainState)
    const dispatch = useDispatch()
    const [setBase64,onclick] = useOutletContext()

    return (
        <>
        {
            <form>
                <br/>
                <input {...register("modelName", { required: true })}
                 onChange={(e)=>dispatch(setModelName(e.target.value))}
                 placeholder='RVC model name' className="InputField-train" value={rvcTrainState.modelName}/>
                <br/>
                <br/>
                <br/>
                <input {...register("batchSize", { required: true })}
                onChange={(e)=>dispatch(setBatchSize(e.target.value))} 
                placeholder='Batch size' className="InputField-train" value={rvcTrainState.batchSize}/>
                <br/>
                <br/>
                <br/>
                <input {...register("saveEpoch", { required: true, valueAsNumber: true})}
                onChange={(e)=>dispatch(setSaveEpoch(e.target.value))} 
                placeholder='Save epoch' className="InputField-train" value={rvcTrainState.saveEpoch}/>
                <br/>
                <br/>
                <br/>
                <input {...register("totalEpoch", { required: true,  valueAsNumber: true})}
                onChange={(e)=>dispatch(setTotalEpoch(e.target.value))} 
                placeholder='Total epoch' className="InputField-train" value={rvcTrainState.totalEpoch}/>
                <br/>
                <br/>
                <br/>
                <FileUploader setBase64={(file) => dispatch(setImageAsync(file))}/>
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