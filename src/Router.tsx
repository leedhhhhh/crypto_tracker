import { BrowserRouter, Route, Routes } from "react-router-dom";
import Chart from "./routes/Chart";
import Coin from "./routes/Coin";
import Coins from "./routes/Coins";
import Price from "./routes/Price";

interface IRouterProps {}

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:coinId/*" element={<Coin></Coin>}></Route>
        <Route path="/" element={<Coins></Coins>}></Route>
        <Route path="chart" element={<Chart coinId="coinId" />} />
        <Route path="price" element={<Price />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
