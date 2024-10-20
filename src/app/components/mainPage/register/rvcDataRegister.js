import { useForm, SubmitHandler } from "react-hook-form"
import DatasetUploader from "../../../utils/components/fileUpload/datasetUpload"
import "../css/regist.css"
import { useDispatch, useSelector } from "react-redux"
import {setDataSetName,setDataSet,setDescription}  from '../../../../features/regist/rvcRegistSlice';
import RequestUploader from "../../../utils/components/fileUpload/requestUpload";
import { useInsert } from "../../../utils/hooks/crud";
import { setDataset } from "../../../../features/train/ttsTrainSlice";
import { useEffect } from "react";

const RvcDataRegister = () => {

    const {register, handleSubmit} = useForm()
    const rvcRegister = useSelector((state)=>state.rvcRegist)
    const url = useSelector((state)=>state.urls.regist_rvc_data)
    const dispatch = useDispatch()

    const {mutate: post,isSuccess: success, isLoading:loading} = useInsert([])

    const rvcRegistClear = ()=> {
        dispatch(setDataSetName(""))
        dispatch(setDataset(null))
        dispatch(setDescription(""))
    }

    useEffect(()=>{
        if(success){
            rvcRegistClear()
        }
    },[success])

    const submit = (_) => {
        post({url:url, data:JSON.stringify(rvcRegister)})
    }

    return (
        <>
            <form onSubmit={handleSubmit(submit)}>
                <br/>
                <input {...register("modelDataSet", { required: {value: true, message: "dataset name must be registed"} })} 
                placeholder='RVC dataset name' className="InputField-regist"
                value={rvcRegister.data_set_name}
                onChange={(e)=>dispatch(setDataSetName(e.target.value))}
                />
                <br/>
                <br/>
                <br/>
                <label for="freeform">Description:</label>
                <br/>
                <textarea 
                placeholder='RVC dataset description'
                value={rvcRegister.description}
                onChange={(e)=>dispatch(setDescription(e.target.value))}
                id="freeform" name="freeform" rows="4" cols="25">
                </textarea>
                <br/>
                <br/>
                <br/>
                <DatasetUploader name={"DATASET"} upload={(file)=>dispatch(setDataSet(file))}/>
                <br/>
                <br/>
                {
                    loading?"loading":<RequestUploader/>
                }
            </form>
        </>
    )
}

export default RvcDataRegister