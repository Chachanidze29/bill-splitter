import React from "react";

const FormInput = ({className,placeholder,iconUrl,changeHandler,type,value}) => {
    const conditionalClass = `${className} bg-third border-2 border-white rounded text-first font-bold outline-0 p-2 focus:border-second`;
    return (
        <div>
            <img src={iconUrl}/>
            <input placeholder={placeholder} className={conditionalClass} type={type} value={value}
                   onChange={changeHandler}/>
        </div>
    )
}
export default FormInput;