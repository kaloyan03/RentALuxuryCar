import { Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";

import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  return (
    <div className="site-wrapper">

<Routes>
          <Route path="/login" element={<Login />}>
          </Route>
          <Route path="/register" element={<Register />}>
          </Route>
        </Routes>
      <Header></Header>
    
      
    </div>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}


export default App;
