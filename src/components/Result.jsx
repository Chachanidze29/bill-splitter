import React from "react";
import CustomButton from "./CustomButton";

const Result = ({total,tipAmount,resetHandler}) =>  (
    <div className='flex flex-col justify-between h-full'>
        <div>
            <div className='mb-4 flex flex-row justify-between items-center'>
                <span>Total:</span>
                <h1 className='text-second text-4xl font-bold'>{isNaN(total) ? '$0' : '$' + total}</h1>
            </div>
            <div className='flex flex-row justify-between items-center'>
                <span>Tip Amount:</span>
                <h1 className='text-second text-4xl font-bold'>{isNaN(tipAmount) ? '$0' : '$' + tipAmount}</h1>
            </div>
        </div>
        <CustomButton clickHandler={resetHandler}>Reset</CustomButton>
    </div>
)

export default Result;