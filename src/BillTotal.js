export default function BillTotal({bill, tips}) {
     const tipAmounts = tips.map(tipPercentage => tipPercentage * bill / 100)

     const sum = tipAmounts.reduce((acc,currentValue ) => acc + currentValue, 0);

     // let sum = 0
     // for (const tipAmount of tipAmounts)
     //    sum = sum + tipAmount


     const tipTotal = sum / tips.length
     const billTotal = bill + tipTotal

     return <h3>You pay ${billTotal} (${bill} + ${tipTotal} tip)</h3>;
}