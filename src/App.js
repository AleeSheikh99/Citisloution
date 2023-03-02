
import { Routes, Route } from 'react-router-dom';
import About from './About';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Contact from './Contact';
import Home from './Home';
import Service from './Service';
import NavBar from './NavBar';

function App() {
  return (
    <>
    <NavBar/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/service' element={<Service/>}></Route>
    </Routes>
    </>
  );
}

export default App;
