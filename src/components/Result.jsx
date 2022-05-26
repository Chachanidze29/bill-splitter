import React from "react";
import CustomButton from "./CustomButton";
import {billInitial, peopleInitial, tipInitial, useBill, usePeople, useTip} from "../utils/StoreProvider";

const Result = () => {
    const {bill,setBill} = useBill();
    const {tip,setTip} = useTip();
    const {numOfPeople,setNumOfPeople} = usePeople();

    const resetHandler = ()=> {
        setBill(billInitial);
        setTip(tipInitial);
        setNumOfPeople(peopleInitial);
    }

    const calculate = ()=> {
        const total = Number.parseFloat((bill*tip).toFixed(2));
        const tipAmount = Number.parseFloat((total/numOfPeople).toFixed(2)) ;
        return {total,tipAmount};
    }

    const {total,tipAmount} = calculate();

    return (
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
            <CustomButton isSelected={true} disabled={bill===billInitial && tip === tipInitial && numOfPeople === peopleInitial} clickHandler={resetHandler}>Reset</CustomButton>
        </div>
    )
}

export default Result;