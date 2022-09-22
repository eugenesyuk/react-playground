import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import { Home } from "./components/Home";
import { SearchFilter } from "./components/SearchFilter";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/searchFilter" element={<SearchFilter />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
