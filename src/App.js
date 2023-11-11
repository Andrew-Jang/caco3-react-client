import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import logo from "./assets/logo.png"
import Main from './pages/Main';

function App() {
  return (
    <div style={{ height: "100svh", width: "100svw", backgroundColor: "#E2E7EA" }}>
      <header className='w-full h-14 flex items-center justify-center'>
        <Link to="/">
          <img src={logo} draggable={false} className='h-8 object-contain -mb-2' alt="" />
        </Link>
      </header>
      <Routes>
        <Route path="/*" element={<Main />} />
      </Routes>


    </div>
  );
}

export default App;
