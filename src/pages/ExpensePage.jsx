import React, { useState } from "react";
import ExpenseForm from "../components/ExpenseForm";

const ExpensePage = () => {
    const [expenseTransactions, setExpenseTransactions] = useState([]);

    const handleAddExpense = (transaction) => {
        setExpenseTransactions([...expenseTransactions, transaction]);
    };

    return (
        <div>
            <h2>Expense Page</h2>
            <ExpenseForm handleAddExpense={handleAddExpense} />
            <div>
                <h3>Expense Transactions:</h3>
                <ul>
                    {expenseTransactions.map((transaction, index) => (
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

export default ExpensePage;
