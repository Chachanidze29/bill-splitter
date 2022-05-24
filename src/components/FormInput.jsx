import React from "react";

const FormInput = ({iconUrl,changeHandler,type,value}) => (
    <div>
        <img src={iconUrl}/>
        <input className='bg-third rounded-xl text-first font-bold outline-0 p-2' type={type} value={value} onChange={changeHandler}/>
    </div>
)

export default FormInput;