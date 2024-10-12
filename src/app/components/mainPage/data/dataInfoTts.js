import { useForm, SubmitHandler } from "react-hook-form"
import "../css/regist.css"


const DataInfoTts = () => {

    const {register} = useForm()

    return (
        <>
            <form>
                <br/>
                <input
                {...register("modelDataSet", { required: true })}  
                placeholder='TTS dataset name' className="InputField-regist"/>
                <br/>
                <br/>
                <br/>
                <label for="freeform">Description:</label>
                <br/>
                <textarea 
                placeholder='TTS dataset description'
                id="freeform" name="freeform" rows="4" cols="25">
                </textarea>
                <br/>
                <br/>
                <br/>
                <input
                {...register("modelDataSetId", { required: true })}  
                placeholder='TTS dataset ID' className="InputField-regist"
                disabled={true}/>
                <br/>
                <br/>
                <br/>
                <label for="config">Config:</label>
                <br/>
                <div id={"config"} className={"dataDescription"}>
                </div>
                <br/>
                <input
                {...register("modelDataSetFileList", { required: true })}  
                placeholder='TTS dataset file list' className="InputField-regist"
                disabled={true}/>
            </form>
        </>
    )
}

export default DataInfoTts 