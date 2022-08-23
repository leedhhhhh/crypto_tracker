import { BrowserRouter, Route, Routes } from "react-router-dom";
import Coin from "./routes/Coin";
import Coins from "./routes/Coins";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:coinId" element={<Coin></Coin>}></Route>
        <Route path="/" element={<Coins></Coins>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
