import React from "react";
import Dashboard from "./component/Dashboard";
import { Route, Routes } from "react-router-dom";
import Market from "./component/Market";
import StockAnalysis from "./component/StockAnalysis";
import Investment from "./component/Investment";
import News from "./component/News";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/market" element={<Market />} />
        <Route path="/analysis" element={<StockAnalysis />} />
        <Route path="/investment" element={<Investment />} />
        <Route path="/news" element={<News />} />
      </Routes>
    </div>
  );
};

export default App;
