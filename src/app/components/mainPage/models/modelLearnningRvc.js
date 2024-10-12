import { useForm, SubmitHandler } from "react-hook-form"
import { useOutletContext } from "react-router-dom"

const ModelLearnningRvc = () => {

    const {register} = useForm()
    const [onclick] = useOutletContext()

    return (
        <>
        {
            <form>
                <br/>
                <input {...register("modelName", { required: true })}
                 placeholder='RVC model name' className="InputField-train" />
                <br/>
                <input {...register("batchSize", { required: true })}
                placeholder='Batch size' className="InputField-train" />
                <br/>
                <input {...register("saveEpoch", { required: true, valueAsNumber: true})}
                placeholder='Save epoch' className="InputField-train" />
                <br/>
                <input {...register("totalEpoch", { required: true,  valueAsNumber: true})}
                placeholder='Total epoch' className="InputField-train" />
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

export default ModelLearnningRvc