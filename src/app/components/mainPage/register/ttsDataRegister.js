import { useForm, SubmitHandler } from "react-hook-form"

const TtsDataRegister = () => {

    return (
        <>
            <form>
                <input placeholder='TTS dataset path' className="InputField"/>
                <br/>
                <br/>
                <br/>
                <input placeholder='Config file name' className="InputField"/>
                <br/>
                <br/>
                <br/>
                <input placeholder='File list file name' className="InputField"/>
            </form>
        </>
    )
}

export default TtsDataRegister