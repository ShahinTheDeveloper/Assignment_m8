import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/income">Income</Link>
                </li>
                <li>
                    <Link to="/expense">Expense</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
