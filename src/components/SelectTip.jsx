import React from "react";
import CustomButton from "./CustomButton";
import {useTip} from "../utils/StoreProvider";

const SelectTip = () => {
    console.log('Hello World');
    const {tip,setTip} = useTip();

    const handleChange = e => {
        const value = parseFloat(e.target.value);
        setTip(value);
    }

    return (
        <div>
            <p>Tip:</p>
            <div className='flex flex-wrap justify-between'>
                <CustomButton clickHandler={()=>setTip(0.05)}>5%</CustomButton>
                <CustomButton clickHandler={()=>setTip(0.1)}>10%</CustomButton>
                <CustomButton clickHandler={()=>setTip(0.15)}>15%</CustomButton>
                <CustomButton clickHandler={()=>setTip(0.25)}>25%</CustomButton>
                <CustomButton clickHandler={()=>setTip(0.5)}>50%</CustomButton>
                <input className='text-first font-bold w-1/3 m-0 outline-0 p-2 bg-third' placeholder='Custom' type='number' name='tip' value={isNaN(tip) || tip === 0 ? '' : tip} onChange={handleChange} />
            </div>
        </div>
    )
}

export default SelectTip;