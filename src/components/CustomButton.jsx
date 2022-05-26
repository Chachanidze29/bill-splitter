import React from "react";

const CustomButton = ({className,isSelected,disabled,clickHandler,children})=> {
    const selectCondition = isSelected ? 'bg-second text-first' : 'bg-first text-second';
    const disableCondition = disabled ? 'bg-disabled hover:bg-disabled text-first hover:cursor-auto' : 'hover:bg-hover hover:text-first';
    const buttonClass = `${className} flex-button font-bold uppercase rounded pl-4 pr-4 pt-2 pb-2  ${selectCondition} ${disableCondition}`;
    return (
        <button disabled={disabled} className={buttonClass} onClick={clickHandler}>{children}</button>
    )
}

export default CustomButton;