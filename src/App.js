import './App.css';
import Navbar from './Component/navbar';
import Dashboard from './Component/Pages/dashboard';
import Sidebar from './Component/sidebar';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Sidebar/>
     <Dashboard/>
    </div>
  );
}

export default App;
