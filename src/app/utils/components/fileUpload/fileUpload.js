import { useState, useEffect, useCallback, useRef } from "react"
import "./css/fileUpload.css"

const FileUploader = ({setBase64}) => {

    const inputEl = useRef(null);
    const [fileName, setFileName] = useState(null);

    const fileInputHandler = useCallback((event) => {
      const files = event.target && event.target.files;
      if (files && files[0]) {
        setFileName(event.target.files[0].name);
        setBase64(event.target.files[0])
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
                    <div className="file-upload">
                        {
                            fileName? fileName : "FILE upload "
                        }
                    </div>
                </label>
                <input type="file" ref={inputEl} id="file"/>
            </div>
        </>
    )
}

export default FileUploader