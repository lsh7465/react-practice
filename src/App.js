import "./App.css";
import Navigation from "./components/Navigation";
import Products from "./components/Products";
import Select from "./components/Select";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navigation />

      <div className="main-bg"></div>

      <Select />

      <Products />
    </div>
  );
}

export default App;
