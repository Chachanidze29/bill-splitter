import React from "react";
import FormInput from "./FormInput";
import {useBill} from "../utils/StoreProvider";

const BillInput = ()=> {
    const {bill,setBill} = useBill();

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