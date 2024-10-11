import { useForm, SubmitHandler } from "react-hook-form"
import DatasetUploader from "../../../utils/components/fileUpload/datasetUpload"
import "../css/regist.css"
import { useDispatch, useSelector } from "react-redux"
import {setDataSetName,setDataSet,setDescription}  from '../../../../features/regist/rvcRegistSlice';

const RvcDataRegister = () => {

    const {register} = useForm()
    const rvcRegister = useSelector((state)=>state.rvcRegist)
    const dispatch = useDispatch()

    return (
        <>
            <form>
                <br/>
                <input {...register("modelDataSet", { required: true })} 
                placeholder='RVC dataset name' className="InputField-regist"
                value={rvcRegister.dataSetName}
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
                <DatasetUploader name={"DATASET"}/>
            </form>
        </>
    )
}

export default RvcDataRegister