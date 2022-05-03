import './App.css';

import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header.js";

import Login from "./components/Login/Login.js";
import Register from "./components/Register/Register.js";
import Cars from "./components/Cars/Cars.js";
import CarDetails from './components/CarDetails/CarDetails.js';
import Footer from './components/Footer/Footer.js';

function App() {
  return (
    <div className="site-wrapper">
<Header></Header>
        <main>
        <Routes>
          <Route path="/cars" element={<Cars />}>
          </Route>
          <Route path="/cars/:id" element={<CarDetails/>}>
          </Route>
          <Route path="/login" element={<Login />}>
          </Route>
          <Route path="/register" element={<Register />}>
          </Route>
        </Routes>
        </main>
        <Footer></Footer>      
    </div>
  );
}




export default App;
