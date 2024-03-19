export default function BillInput({bill, handleBillChange}) {
    return <div>
        <label>How much was the bill?</label>
        <input type="text" placeholder="Bill value" value={bill} onChange={e => handleBillChange(Number(e.target.value))}></input>
    </div>;
}