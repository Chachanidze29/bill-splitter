import {createContext} from "react";

const TipContext = createContext({
    tip:0,
    setTip:()=>{}
});

export default TipContext;