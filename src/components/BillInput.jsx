import React from "react";
import FormInput from "./FormInput";

const BillInput = ({bill,setBill})=> {
    const handleChange = e => {
        const value = parseFloat(e.target.value);
        setBill(value);
    }

    return (
        <div>
            <p>Bill:</p>
            <FormInput type='number' name='bill' value={isNaN(bill) ? '' : bill} changeHandler={handleChange} />
        </div>
    )
}

export default BillInput;