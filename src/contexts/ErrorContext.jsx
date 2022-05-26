import {createContext} from "react";

const ErrorContext = createContext({
    error:'',
    setError:()=>{}
});

export default ErrorContext;