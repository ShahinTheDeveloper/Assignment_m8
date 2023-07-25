import React, { useState } from "react";

const IncomeForm = ({ handleAddIncome }) => {
    const [date, setDate] = useState("");
    const [amount, setAmount] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        handleAddIncome({ date, amount });
        setDate("");
        setAmount("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
            />
            <input
                type="number"
                placeholder="Enter amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
            />
            <button type="submit">Add Income</button>
        </form>
    );
};

export default IncomeForm;
