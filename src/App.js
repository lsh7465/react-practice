import React from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import Products from "./components/Products";
import Select from "./components/Select";
import Detail from "./pages/Detail";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="main-bg"></div>
              <Select />
              <Products />
            </>
          }
        />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
