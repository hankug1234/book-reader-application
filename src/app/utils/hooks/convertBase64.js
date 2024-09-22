import { useState} from "react";

const useBase64 = (image)=>{
    const [state, setState] = useState(image)
    const setBase64 = (file)=>{
        if (file) {
            const reader = new FileReader();
            reader.onload = e => {
                const dataURL = reader.result;
                setState(dataURL);
              };
            reader.readAsDataURL(file);
          }

    } 

    return [state,setBase64]
}

export default useBase64