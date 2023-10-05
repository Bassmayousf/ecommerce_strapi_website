import "./App.css";
import StoreContext from "./hooks/StoreContext";
import Products from "./components/Products";
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Women from "./components/women/Women";
import Men from "./components/men/Men";
import Kids from "./components/kids/Kids";
import { useEffect, useState } from "react";
import Layout from "./components/Layout";
import Home from "./components/home/Home";
import All from "./components/All";
function App() {
  const [filter, setFilter] = useState("http://localhost:1337/api/products?populate=*");

  useEffect(() => {
    console.log(filter);
  }, [filter]);

  return (
    <div className="app">
      
    <Router>
      <StoreContext.Provider value={{filter , setFilter }}>
        <Routes>
          <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />

            <Route path="/men" element={<Men />} />
            <Route path="/women" element={<Women />} />
            <Route path="/kids" element={<Kids />} />
            <Route path="/all" element={<All />} />
            <Route path="/products" element={<Products />} />

          </Route>
        </Routes>
      </StoreContext.Provider>
    </Router>

    </div>

    
  );
}

export default App;
