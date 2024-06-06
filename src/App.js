import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Lobby from './Pages/Lobby';
import MyCourses from './Pages/MyCourses';
import NotFound from './Pages/NotFound';
import { useEffect, useState } from 'react';
import Home from './Component/Home';
import NavbarMy from './Component/NavbarMy';

function App() {
  const [username, setUsername] = useState('');
  const [nim, setNim] = useState('');
  const [prodi, setProdi] = useState('');
  const [deskripsi, setDeskripsi] = useState('')
  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    const storedNim = localStorage.getItem('nima');
    const storedProdia = localStorage.getItem('prodii');
    if (storedUsername && storedNim && storedProdia) {
      setUsername(storedUsername);
      setNim(storedNim)
      setProdi(storedProdia)
    }
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
            <Routes>
                <Route path='/' element={<Lobby />} />
                <Route path='/login' element={<Home setUsername={setUsername} setNim={setNim} setProdi={setProdi} />} />
                <Route path='/my' element={<MyCourses username={username} nim={nim} prodi={prodi} />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
