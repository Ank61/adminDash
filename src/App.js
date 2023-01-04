import './App.css';
import { NavLink, Route, Routes } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Home from './Component/Pages/home';
import User from './Component/Pages/user';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/user" element={<User/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
