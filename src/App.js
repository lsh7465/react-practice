import "./App.css";
import Banner from "./components/Banner";
import Products from "./components/Products";
import Select from "./components/Select";

function App() {
  return (
    <div className="App">
      <Banner />

      <div className="main-bg"></div>

      <Select />
      
      <Products />
    </div>
  );
}

export default App;
