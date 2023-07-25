import React, { useState } from "react";
import IncomeForm from "../components/IncomeForm";

const IncomePage = () => {
    const [incomeTransactions, setIncomeTransactions] = useState([]);

    const handleAddIncome = (transaction) => {
        setIncomeTransactions([...incomeTransactions, transaction]);
    };

    return (
        <div>
            <h2>Income Page</h2>
            <IncomeForm handleAddIncome={handleAddIncome} />
            <div>
                <h3>Income Transactions:</h3>
                <ul>
                    {incomeTransactions.map((transaction, index) => (
                        <li key={index}>
                            Date: {transaction.date}, Amount:{" "}
                            {transaction.amount}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default IncomePage;
