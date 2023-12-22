import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Mint from "./pages/mint";
import Coin from "./pages/coin";
import Detail from "./pages/detail";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mint" element={<Mint />} />
        <Route path="/coin" element={<Coin />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
