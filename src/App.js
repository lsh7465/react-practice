import React, { useState } from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import Products from "./components/Products";
import Detail from "./pages/Detail";
import Select from "./components/Select";
import { Routes, Route } from "react-router-dom";
import data from "./data";
import axios from "axios";
import Cart from "./pages/Cart";

function App() {
  const [clothes, setClothes] = useState(data);
  console.log(clothes);

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
              <Products clothes={clothes} />
              <button
                style={{ display: "block", margin: "auto" }}
                onClick={() => {
                  axios
                    .get("https://codingapple1.github.io/shop/data2.json")
                    .then((result) => {
                      console.log(result.data);
                      let copy = [...clothes, ...result.data];
                      setClothes(copy);
                    })
                    .catch(() => {
                      console.log("실패");
                    });
                }}
              >
                버튼
              </button>
            </>
          }
        />
        {/* 페이지 여러개 만들고싶으면 :URL파라미터 사용 */}
        <Route path="/detail/:id" element={<Detail clothes={clothes} />} />
        <Route path="*" element={<div>존재하지 않는 페이지</div>} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
