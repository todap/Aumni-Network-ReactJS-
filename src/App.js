import logo from './logo.svg';
import './App.css';
import Home from './Components/pages/Home';
import AboutUs from './Components/pages/AboutUs';
import { Routes, Route } from "react-router-dom";
import MyNav from './Components/MyNav';
import Login from './Components/pages/Login';
import Newsroom from './Components/pages/Newsroom';
import AlumniRegister from './Components/pages/AlumniRegister';
import CompanyRegister from './Components/pages/CompanyRegister';
function App() {
  return (
    <div className="App">
      <>
      <MyNav/>
      </>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/about' element={<AboutUs/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/newsroom' element={<Newsroom/>}/>
        <Route path='/student' element={<AlumniRegister/>}/>
        <Route path="/company" element={<CompanyRegister/>}/>
      </Routes>
      
    </div>
  );
}
export default App;
