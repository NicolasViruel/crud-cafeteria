import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/views/Home/Home";
import Navigation from "./components/layout/Navigation";
import Footer from "./components/layout/Footer";
import ProductsTable from "./components/views/ProductsTable/ProductsTable";
import ProductCreate from "./components/views/ProductCreate/ProductCreate";
import ProductEdit from "./components/views/ProductEdit/ProductEdit";
import Error404 from "./components/views/Error404/Error404";
<<<<<<< HEAD
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { useEffect, useState } from "react";


function App() {

  const [products, setProducts] = useState([])
=======
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
  //State
  const [products, setProducts] = useState([]);
>>>>>>> master
  //Variable de entorno
  const URL = process.env.REACT_APP_API_CAFETERIA;

  useEffect(() => {
    getApi();
<<<<<<< HEAD
  }, [])
  
// recordar levantar Json server con el codigo: "json-server --watch db.json --port 4000" sino nunca trae los objetos creados
  const getApi = async () => {
    try {
      const res = await fetch(URL);
      const productApi = await res.json()
      setProducts(productApi)
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>

=======
  }, []);

  const getApi = async () => {
    try {
      const res = await fetch(URL);
      const productApi = await res.json();
      setProducts(productApi);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
>>>>>>> master
      <BrowserRouter>
        <Navigation />
        <main>
          <Routes>
            <Route exact path="/" element={<Home products={products} />} />
<<<<<<< HEAD
            <Route exact path="/product/table" element={<ProductsTable products={products} URL={URL} getApi= {getApi} />}/>
            <Route exact path="/product/create" element={<ProductCreate URL={URL} getApi= {getApi} />}/>
            <Route exact path="/product/edit/:id" element={<ProductEdit URL={URL} getApi= {getApi}/>}/>
            <Route exact path="*" element={<Error404/>}/>
          </Routes>
          </main>  
      </BrowserRouter>
      
      <Footer />
=======
            <Route
              exact
              path="/product/table"
              element={
                <ProductsTable products={products} URL={URL} getApi={getApi} />
              }
            />
            <Route
              exact
              path="/product/create"
              element={<ProductCreate URL={URL} getApi={getApi} />}
            />
            <Route
              exact
              path="/product/edit/:id"
              element={<ProductEdit URL={URL} getApi={getApi} />}
            />
            <Route exact path="*" element={<Error404 />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
>>>>>>> master
    </div>
  );
}

export default App;
