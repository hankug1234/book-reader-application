import './css/radioButtons.css'
import { useState } from 'react';

const Radio = ({ children, value, name, defaultChecked, disabled, setRadioName, radioName}) => {
 
    const onclick = (e)=> {
        setRadioName(e.target.name)
    }

    return (
      <label>
        <input
          className="radio"
          type="radio"
          value={value}
          name={name}
          defaultChecked={defaultChecked}
          disabled={disabled}
          checked={radioName===name?true:false}
          onChange={()=>{""}}
          onClick={onclick}
        />
        {children}
      </label>
    );
  }

const  RadioGroup = ({ label, children }) => {
    return (
      <fieldset>
        <legend>{label}</legend>
        {children}
      </fieldset>
    );
  }

const RadioButtons = ({tags,label,checked}) => {
    const[radioName, setRadioName] = useState("")
    checked(radioName)
    return (
        <>
            <RadioGroup label = {label}>
                {
                    tags.map((tag,index) => {
                        return(
                        <Radio name={tag} key={index} radioName={radioName} setRadioName={setRadioName}>
                            {
                                tag
                            }
                        </Radio>
                        )
                    })
                }
            </RadioGroup>
        </>
    )
}

export default RadioButtons