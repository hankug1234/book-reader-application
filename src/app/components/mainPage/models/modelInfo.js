import { useForm} from "react-hook-form"
import "../css/regist.css"
import FileUploader from "../../../utils/components/fileUpload/fileUpload"

const ModelInfo = () => {

    const {register} = useForm()


    return (
        <>
            <form>
                <br/>
                <input {...register("modelName", { required: true })} 
                placeholder='model name' className="InputField-regist"
                />
                <br/>
                <br/>
                <br/>
                <input {...register("dataSetId", { required: true })} 
                placeholder='data set Id' className="InputField-regist"
                disabled={true}
                />
                <br/>
                <br/>
                <br/>
                <input {...register("modelType", { required: true })} 
                placeholder='model type' className="InputField-regist"
                disabled={true}
                />
                <br/>
                <br/>
                <br/>
                <label for="freeform">test script:</label>
                <br/>
                <textarea 
                placeholder='RVC dataset description'
                id="freeform" name="freeform" rows="4" cols="25">
                </textarea>
                <br/>
                <br/>
                <FileUploader setBase64={(file) => false} setFileName={(imgName)=>false} fileName={"IMAGE"}/>
                <br/>
            </form>
        </>
    )
}

export default ModelInfo