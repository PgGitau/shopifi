import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menu from './components/nav/Menu';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <BrowserRouter>
       {/* menu comp appears in all pages */}
      <Menu /> 

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
