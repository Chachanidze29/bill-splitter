import {createContext} from "react";

const SelectedContext = createContext({
    selectedIndex:-1,
    setSelectedIndex:()=>{}
});

export default SelectedContext;