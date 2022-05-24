import React from "react";

const CustomButton = ({clickHandler,children})=> (
    <button className='flex-button bg-second border-2 font-bold uppercase rounded text-first pl-4 pr-4 pt-2 pb-2 hover:bg-first hover:border-second hover:text-second' onClick={clickHandler}>{children}</button>
)

export default CustomButton;