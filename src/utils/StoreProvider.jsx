import {useContext, useState} from "react";
import BillContext from "../contexts/BillContext";
import PeopleContext from "../contexts/PeopleContext";
import TipContext from "../contexts/TipContext";
import ErrorContext from "../contexts/ErrorContext";
import SelectedContext from "../contexts/SelectedContext";

export const billInitial = 0;
export const tipInitial = 0;
export const peopleInitial = 1;
export const selectedInitial = -1;
export const errorInitial = '';

export const useBill = ()=> useContext(BillContext);
export const useTip = ()=> useContext(TipContext);
export const usePeople = ()=> useContext(PeopleContext);
export const useError = ()=> useContext(ErrorContext);
export const useSelected = ()=> useContext(SelectedContext);

const StoreProvider = ({children}) => {
    const [bill,setBill] = useState(billInitial);
    const [tip,setTip] = useState(tipInitial);
    const [numOfPeople,setNumOfPeople] = useState(peopleInitial);
    const [error,setError] = useState(errorInitial);
    const [selectedIndex,setSelectedIndex] = useState(selectedInitial);

    return (
        <TipContext.Provider value={{tip: tip,setTip:setTip}}>
            <PeopleContext.Provider value={{numOfPeople: numOfPeople,setNumOfPeople:setNumOfPeople}}>
                <BillContext.Provider value={{bill: bill,setBill:setBill}}>
                    <ErrorContext.Provider value={{error: error,setError:setError}}>
                        <SelectedContext.Provider value={{selectedIndex: selectedIndex,setSelectedIndex:setSelectedIndex}}>
                            {children}
                        </SelectedContext.Provider>
                    </ErrorContext.Provider>
                </BillContext.Provider>
            </PeopleContext.Provider>
        </TipContext.Provider>
    )
}

export default StoreProvider;