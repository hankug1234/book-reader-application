import { useForm, SubmitHandler } from "react-hook-form"
import FileUploader from "../../../utils/components/fileUpload/fileUpload"
import { useOutletContext } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import {setModelName,setBatchSize,setSaveEpoch,setTotalEpoch,setImageName,setDataset,setImage} from '../../../../features/train/rvcTrainSlice';
import { setRvcImageAsync } from "../../../../features/train/rvcTrainSlice";
import { useInsert } from "../../../utils/hooks/crud";
import { useEffect } from "react";
import RequestUploader from "../../../utils/components/fileUpload/requestUpload";
import defaltImage from "../images/logo.svg"

const RvcTrain = () => {

    const url = useSelector((state)=>state.urls.train_rvc)

    const {mutate: post,isSuccess: success, isLoading:loading} = useInsert([])

    const rvcTrainState = useSelector((state) => state.rvcTrain)

    const {register,handleSubmit} = useForm(rvcTrainState)

    const dispatch = useDispatch()
    const [onclick] = useOutletContext()

    const rvcTrainClear = ()=> {
        dispatch(setModelName(""))
        dispatch(setBatchSize(null))
        dispatch(setSaveEpoch(null))
        dispatch(setTotalEpoch(null))
        dispatch(setImageName(""))
        dispatch(setImage(defaltImage))
        dispatch(setDataset(""))
    }

    useEffect(()=>{
        if(success){
            rvcTrainClear()
        }
    },[success])

    const submit = (_) => {
        post({url:url, data:JSON.stringify(rvcTrainState)})
    }

    return (
        <>
        {
            <form onSubmit={handleSubmit(submit)}>
                <br/>
                <input {...register("modelName", { required: true })}
                 onChange={(e)=>dispatch(setModelName(e.target.value))}
                 placeholder='RVC model name' className="InputField-train" value={rvcTrainState.model_name}/>
                <br/>
                <input {...register("batchSize", { required: true })}
                onChange={(e)=>dispatch(setBatchSize(e.target.value))} 
                placeholder='Batch size' className="InputField-train" value={rvcTrainState.batch_size}/>
                <br/>
                <input {...register("saveEpoch", { required: true, valueAsNumber: true})}
                onChange={(e)=>dispatch(setSaveEpoch(e.target.value))} 
                placeholder='Save epoch' className="InputField-train" value={rvcTrainState.save_epoch}/>
                <br/>
                <input {...register("totalEpoch", { required: true,  valueAsNumber: true})}
                onChange={(e)=>dispatch(setTotalEpoch(e.target.value))} 
                placeholder='Total epoch' className="InputField-train" value={rvcTrainState.total_epoch}/>
                <br/>
                <br/>
                <FileUploader setBase64={(file) => dispatch(setRvcImageAsync(file))} setFileName={(imgName)=>dispatch(setImageName(imgName))} fileName={rvcTrainState.image_name}/>
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

export default RvcTrain