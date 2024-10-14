import { useState, useEffect, useCallback, useRef } from "react"
import "./css/fileUpload.css"

const DatasetUploader = ({name,upload=()=>false}) => {

    const inputEl = useRef(null);
    const [fileName, setFileName] = useState(null);

    const fileInputHandler = useCallback((event) => {
      const files = event.target && event.target.files;
      if (files && files[0]) {
        setFileName(event.target.files[0].name);
        upload(files[0].name)
      }
    }, []);
  
    useEffect(() => {
      if (inputEl.current !== null) {
        inputEl.current.addEventListener("input", fileInputHandler);
      }
      return () => {
        inputEl.current && inputEl.current.removeEventListener("input", fileInputHandler);
      };
    }, [inputEl, fileInputHandler]);

    return (
        <>
            <div>
                <label for="file">
                    <div className="dataset-upload">
                        {
                            fileName? fileName : `${name} UPLOAD `
                        }
                    </div>
                </label>
                <input type="file" ref={inputEl} id="file"/>
            </div>
        </>
    )
}

export default DatasetUploader