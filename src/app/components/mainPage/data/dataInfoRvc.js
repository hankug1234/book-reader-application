import { useForm, SubmitHandler } from "react-hook-form"
import "../css/regist.css"


const DataInfoRvc = () => {

    const {register} = useForm()


    return (
        <>
            <form>
                <br/>
                <input {...register("modelDataSet", { required: true })} 
                placeholder='RVC dataset name' className="InputField-regist"
                />
                <br/>
                <br/>
                <br/>
                <label for="freeform">Description:</label>
                <br/>
                <textarea 
                placeholder='RVC dataset description'
                id="freeform" name="freeform" rows="4" cols="25">
                </textarea>
                <br/>
                <br/>
                <br/>
                <input {...register("modelDataSetId", { required: true })} 
                placeholder='RVC dataset ID' className="InputField-regist"
                />
            </form>
        </>
    )
}

export default DataInfoRvc 