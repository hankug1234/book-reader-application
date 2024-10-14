import "./css/fileUpload.css"

const RequestUploader = ({}) => {


    return (
        <>
            <div>
                <label for="submit">
                    <div className="dataset-upload">
                        {
                            "SEND"
                        }
                    </div>
                </label>
                <input type="submit"  id="submit"/>
            </div>
        </>
    )
}

export default RequestUploader