import {useState,useEffect, useCallback, useRef } from "react"
import "./css/fileUpload.css"
import { v4 as uuidv4 } from "uuid"; 

const FileUploader = ({setBase64,fileName,setFileName}) => {

    const allowedExtensions = ['jpg', 'png', 'gif','svc']
    const inputEl = useRef(null);

    const fileInputHandler = useCallback((event) => {
      const files = event.target && event.target.files;
      if (files && files[0]) {
        const file_name = event.target.files[0].name
        const extension = file_name.split('.').pop().toLowerCase();

        if(allowedExtensions.includes(extension)){
          setFileName(file_name);
          setBase64(event.target.files[0])
        }else{
          alert(`file extension must on jpg, png, git, svc`)
        }
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

    const [id,setId] = useState(uuidv4())

    return (
        <>
            <div>
                <label for={id}>
                    <div className="file-upload">
                        {
                            fileName? fileName : "IMAGE UPLOAD "
                        }
                    </div>
                </label>
                <input className={"file"} type="file" ref={inputEl} id={id}/>
            </div>
        </>
    )
}

export default FileUploader