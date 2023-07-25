import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import IncomePage from "./pages/IncomePage";
import ExpensePage from "./pages/ExpensePage";

const App = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<IncomePage />} />
                <Route path="/income" element={<IncomePage />} />
                <Route path="/expense" element={<ExpensePage />} />
                <Route path="/expense" element={<ExpensePage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
