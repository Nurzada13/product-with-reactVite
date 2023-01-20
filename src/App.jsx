import { Route, Routes } from "react-router";
import "./App.css";
import DetailetPage from "./components/detailetPage";
import Product from "./components/products";

function App() {
  return (
    <div className="App">
    {/* 9 */}
      <Routes>
        <Route path="/" element={<Product />} />


        <Route path="/product/:id" element={<DetailetPage />} />
      </Routes>
    </div>
  );
}

export default App;
