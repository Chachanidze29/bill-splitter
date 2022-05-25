import {useContext, useState} from "react";
import BillContext from "../contexts/BillContext";
import PeopleContext from "../contexts/PeopleContext";
import TipContext from "../contexts/TipContext";

export const billInitial = 0;
export const tipInitial = 0;
export const peopleInitial = 1;

export const useBill = ()=> useContext(BillContext);
export const useTip = ()=> useContext(TipContext);
export const usePeople = ()=> useContext(PeopleContext);

const StoreProvider = ({children}) => {
    const [bill,setBill] = useState(billInitial);
    const [tip,setTip] = useState(tipInitial);
    const [numOfPeople,setNumOfPeople] = useState(peopleInitial);

    return (
        <TipContext.Provider value={{tip: tip,setTip:setTip}}>
            <PeopleContext.Provider value={{numOfPeople: numOfPeople,setNumOfPeople:setNumOfPeople}}>
                <BillContext.Provider value={{bill: bill,setBill:setBill}}>
                    {children}
                </BillContext.Provider>
            </PeopleContext.Provider>
        </TipContext.Provider>
    )
}

export default StoreProvider;