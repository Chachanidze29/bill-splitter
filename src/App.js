import BillInput from "./components/BillInput";
import SelectTip from "./components/SelectTip";
import PeopleInput from "./components/PeopleInput";
import Result from "./components/Result";
import './App.css';

const App = () => (
    <div className='flex flex-col w-1/2'>
        <h1 className='font-bold text-xl tracking-widest text-center text-first uppercase'>Splitter</h1>
        <div className='w-full flex flex-row justify-around bg-white p-5 rounded-xl mt-10 mb-0 mr-auto ml-auto'>
            <div className='basis-2/5 flex flex-col'>
                <BillInput/>
                <SelectTip/>
                <PeopleInput/>
            </div>
            <div className='basis-2/5 bg-first rounded-xl p-5 text-white'>
                <Result/>
            </div>
        </div>
    </div>
);

export default App;
