import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import FormPage from './pages/FormPage';
import Home from './pages/Home';
function App() {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home/>} /> 
        <Route path='/form/:id' element={<FormPage/>} />
    </Routes>
    </>
  );
}

export default App;
