import {createContext} from "react";

const BillContext = createContext({
    bill:0,
    setBill:()=>{}
});

export default BillContext;