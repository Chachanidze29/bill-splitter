import React, {useState} from "react";
import FormInput from "./FormInput";
import {useError, usePeople} from "../utils/StoreProvider";

const PeopleInput = () => {
    const {numOfPeople,setNumOfPeople} = usePeople();
    const {error,setError} = useError();

    const handleChange = e => {
        const value = parseFloat(e.target.value);
        if(value === 0) {
            setError("Can't be zero");
        } else {
            setError(null)
        }
        setNumOfPeople(value);
    }

    return (
        <div>
            <div className='flex flex-row justify-between'>
                <p>Number of People:</p>
                {error && <p className='text-red'>{error}</p>}
            </div>
            <FormInput type='number' name='people' value={isNaN(numOfPeople) ? '' : numOfPeople} changeHandler={handleChange} />
        </div>
    )
}

export default PeopleInput;