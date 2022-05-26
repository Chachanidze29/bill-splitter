import React, {useState} from "react";
import CustomButton from "./CustomButton";
import {useTip} from "../utils/StoreProvider";
import FormInput from "./FormInput";

const buttons = [0.05,0.1,0.25,0.5];

const SelectTip = () => {
    const {tip,setTip} = useTip();
    const [selectedIndex,setSelectedIndex] = useState(0);

    const handleChange = e => {
        const value = parseFloat(e.target.value);
        setTip(value);
    }

    return (
        <div>
            <p>Tip:</p>
            <div className='flex flex-wrap justify-between items-center'>
                {
                    buttons.map((value,ind) => <CustomButton className='basis-5/12' isSelected={selectedIndex === ind} key={ind} clickHandler={()=>{
                        setTip(value);
                        setSelectedIndex(ind);
                    }}>{value*100}%</CustomButton> )
                }
                <FormInput placeholder='Custom' type='number' name='tip' value={isNaN(tip) || tip === 0 ? '' : tip} changeHandler={handleChange} />
            </div>
        </div>
    )
}

export default SelectTip;