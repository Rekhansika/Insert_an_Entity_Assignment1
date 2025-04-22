import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import AddBook from "./components/AddBook";

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-book" element={<AddBook/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;