import {createContext} from "react";

const PeopleContext = createContext({
    numOfPeople:1,
    setNumOfPeople:()=>{}
});

export default PeopleContext;