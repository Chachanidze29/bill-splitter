import React from "react";
import FormInput from "./FormInput";
import {usePeople} from "../utils/StoreProvider";

const PeopleInput = () => {
    const {numOfPeople,setNumOfPeople} = usePeople();

    const handleChange = e => {
        const value = parseFloat(e.target.value);
        setNumOfPeople(value);
    }

    return (
        <div>
            <p>Number of People:</p>
            <FormInput type='number' name='people' value={isNaN(numOfPeople) ? '' : numOfPeople} changeHandler={handleChange} />
        </div>
    )
}

export default PeopleInput;