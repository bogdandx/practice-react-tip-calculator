import BillInput from "./BillInput";
import TipPercentage from "./TipPercentage";
import BillTotal from "./BillTotal";
import Reset from "./Reset";
import {useState} from "react";

export default function App() {
    const [bill, setBill] = useState("")
    const [tipPercentages, setTipPercentages] = useState([0, 0])

    function handleReset(){
        setBill("")
        setTipPercentages([5,10])
    }

    return (
        <div>
            <BillInput bill={bill} handleBillChange={(newBillAmount) => setBill(newBillAmount)}/>
            <TipPercentage tipPercentage={tipPercentages[0]}
                           handleTipPercentageChange={(newTip) => setTipPercentages([newTip, tipPercentages[1]])}>
                How did you like the service?
            </TipPercentage>
            <TipPercentage tipPercentage={tipPercentages[1]}
                           handleTipPercentageChange={(newTip) => setTipPercentages([tipPercentages[0], newTip])}>
                How did your friend like the service?
            </TipPercentage>
            {bill > 0 && <>
                <BillTotal bill={bill} tips={tipPercentages}/>
                <Reset handleReset={handleReset}/>
            </>}
        </div>
    );
}