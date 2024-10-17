import "./css/fileUpload.css"
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

const DatasetUploader = ({name,upload}) => {

    const fileInputHandler = (event) => {
      const files = event.target && event.target.files;
      if (files && files[0]) {
        upload(files[0].name)
      }
    };

    const [id, setId] = useState(uuidv4())
  

    return (
        <>
            <div>
                <label for={id}>
                    <div className="dataset-upload">
                        {
                          `${name} UPLOAD `
                        }
                    </div>
                </label>
                <input className={"file"} type="file" onInput={fileInputHandler}  id={id}/>
            </div>
        </>
    )
}

export default DatasetUploader