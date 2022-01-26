import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/auth';
import Home from './pages/home';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<Login />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
