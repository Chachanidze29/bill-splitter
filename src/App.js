import {useState} from "react";
import BillInput from "./components/BillInput";
import SelectTip from "./components/SelectTip";
import PeopleInput from "./components/PeopleInput";
import Result from "./components/Result";
import './App.css';

const billInitial = 0;
const tipInitial = 0;
const peopleInitial = 1;

function App() {
    const [bill,setBill] = useState(billInitial);
    const [tip,setTip] = useState(tipInitial);
    const [numOfPeople,setNumOfPeople] = useState(peopleInitial);

    const calculate = ()=> {
        const total = Number.parseFloat(((bill*tip)/numOfPeople).toFixed(2));
        const tipAmount = Number.parseFloat((total/numOfPeople).toFixed(2)) ;
        return {total,tipAmount};
    }

    const resetHandler = ()=> {
        setBill(billInitial);
        setTip(tipInitial);
        setNumOfPeople(peopleInitial);
    }

    const {total,tipAmount} = calculate();

    return (
        <div className='flex flex-col w-1/2'>
            <h1 className='font-bold text-xl tracking-widest text-center text-first uppercase'>Splitter</h1>
            <div className='w-full flex flex-row justify-around bg-white p-5 rounded-xl mt-10 mb-0 mr-auto ml-auto'>
                <div className='basis-2/5 flex flex-col'>
                    <BillInput bill={bill} setBill={setBill}/>
                    <SelectTip tip={tip} setTip={setTip}/>
                    <PeopleInput numOfPeople={numOfPeople} setNumOfPeople={setNumOfPeople} />
                </div>
                <div className='basis-2/5 bg-first rounded-xl p-5 text-white'>
                    <Result total={total} resetHandler={resetHandler} tipAmount={tipAmount} />
                </div>
            </div>
        </div>
    );
}

export default App;
